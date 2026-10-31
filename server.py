import os
from typing import Dict, List, Literal, Union
from uuid import UUID

import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openai import OpenAI
from pydantic import BaseModel

# =========== Config ===========
BASE_URL = "https://safeai613.com/v1"

# =========== FastAPI Setup ===========
app = FastAPI(title="SafeAI API", version="1.0.0")


# =========== CORS Middleware ===========
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========== Models ===========
class ConversationMessage(BaseModel):
    role: Literal["user", "assistant"]
    content: str


class RequestModel(BaseModel):
    model: str = "gpt-4o-mini"
    input: Union[str, List[ConversationMessage]]


class ChatRequest(BaseModel):
    session_id: UUID
    model: str = "gpt-5.4-nano"
    message: str


class ResponseModel(BaseModel):
    output_text: str
    model: str


# =========== Client and server-side memory ===========
httpx_client = httpx.Client(http2=True)
client = None
conversations: Dict[UUID, List[ConversationMessage]] = {}


def get_client():
    global client

    api_key = os.getenv("SAFEAI_API_KEY")
    if not api_key:
        raise HTTPException(
            status_code=503,
            detail="SAFEAI_API_KEY environment variable is not configured",
        )

    if client is None:
        client = OpenAI(
            base_url=BASE_URL,
            api_key=api_key,
            http_client=httpx_client,
        )
    return client


# =========== Routes ===========
@app.post("/chat", response_model=ResponseModel)
async def chat(request: ChatRequest):
    """Continue a server-side conversation and return the model response."""
    if not request.message.strip():
        raise HTTPException(status_code=422, detail="Message cannot be empty")

    history = conversations.get(request.session_id, [])
    current_messages = [
        *history,
        ConversationMessage(role="user", content=request.message),
    ]

    try:
        response = get_client().responses.create(
            model=request.model,
            input=[message.model_dump() for message in current_messages],
        )
    except HTTPException:
        raise
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error)) from error

    current_messages.append(
        ConversationMessage(role="assistant", content=response.output_text)
    )
    conversations[request.session_id] = current_messages

    return ResponseModel(
        output_text=response.output_text,
        model=request.model,
    )


@app.delete("/chat/{session_id}")
async def clear_chat(session_id: UUID):
    conversations.pop(session_id, None)
    return {"status": "cleared"}


@app.post("/generate", response_model=ResponseModel)
async def generate_content(request: RequestModel):
    """Stateless compatibility endpoint for single generation requests."""
    model_input = request.input
    if isinstance(model_input, list):
        model_input = [message.model_dump() for message in model_input]

    try:
        response = get_client().responses.create(
            model=request.model,
            input=model_input,
        )
    except HTTPException:
        raise
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error)) from error

    return ResponseModel(
        output_text=response.output_text,
        model=request.model,
    )


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


@app.on_event("shutdown")
async def shutdown_event():
    httpx_client.close()


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
