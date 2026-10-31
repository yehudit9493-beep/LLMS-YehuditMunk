import os

import httpx
from openai import OpenAI

BASE_URL = "https://safeai613.com/v1"
API_KEY = os.getenv("SAFEAI_API_KEY")

if not API_KEY:
    raise RuntimeError("Set the SAFEAI_API_KEY environment variable before running main.py")

httpx_client = httpx.Client(http2=True)

client = OpenAI(
    base_url=BASE_URL,
    api_key=API_KEY,
    http_client=httpx_client
)

response = client.responses.create(
    model="gpt-5.4-nano",
    input="""תיצור לי דף בית לאתר עם עיצוב בסגנון css tailwind"""
)

print(response.output_text)
