import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './ChatComponent.css';

const loadSavedMessages = () => {
  try {
    const savedMessages = localStorage.getItem('devchat-messages');
    if (!savedMessages) return [];

    const parsed = JSON.parse(savedMessages);
    return Array.isArray(parsed)
      ? parsed.map((message) => ({
          ...message,
          timestamp: new Date(message.timestamp),
        }))
      : [];
  } catch (error) {
    console.error('Failed to load saved messages:', error);
    return [];
  }
};

const createSessionId = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    const random = Math.random() * 16 | 0;
    const value = character === 'x' ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

const loadSessionId = () => {
  try {
    const savedSessionId = localStorage.getItem('devchat-session-id');
    if (savedSessionId) return savedSessionId;

    const sessionId = createSessionId();
    localStorage.setItem('devchat-session-id', sessionId);
    return sessionId;
  } catch (error) {
    console.error('Failed to load chat session:', error);
    return createSessionId();
  }
};

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState('gpt-5.4-nano');
  const [sessionId, setSessionId] = useState(loadSessionId);
  const [isHydrated, setIsHydrated] = useState(false);
  const messagesEndRef = useRef(null);
  const activeRequestRef = useRef(0);

  const API_BASE_URL = 'http://localhost:8000';

  useEffect(() => {
    setMessages(loadSavedMessages());
    setIsHydrated(true);
  }, []);

  // Scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isHydrated) return;

    scrollToBottom();
    try {
      localStorage.setItem('devchat-messages', JSON.stringify(messages));
    } catch (error) {
      console.error('Failed to save messages:', error);
    }
  }, [messages, isHydrated]);

  // Send message to API
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const currentInput = input;
    const requestId = Date.now();
    activeRequestRef.current = requestId;

    const userMessage = {
      id: requestId,
      type: 'user',
      content: currentInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          model: model,
          message: currentInput,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || `API Error: ${response.statusText}`);
      }

      if (activeRequestRef.current !== requestId) {
        return;
      }

      const aiMessage = {
        id: requestId + 1,
        type: 'ai',
        content: data.output_text,
        model: data.model,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);

      if (activeRequestRef.current !== requestId) {
        return;
      }

      const errorMessage = {
        id: requestId + 1,
        type: 'error',
        content: `שגיאה: ${error.message}`,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      if (activeRequestRef.current === requestId) {
        activeRequestRef.current = 0;
        setIsLoading(false);
      }
    }
  };

  const handleClearChat = async () => {
    const previousSessionId = sessionId;
    const nextSessionId = createSessionId();

    activeRequestRef.current = 0;
    setMessages([]);
    setSessionId(nextSessionId);
    setIsLoading(false);

    try {
      localStorage.removeItem('devchat-messages');
      localStorage.setItem('devchat-session-id', nextSessionId);
    } catch (error) {
      console.error('Failed to clear saved chat:', error);
    }

    try {
      const response = await fetch(`${API_BASE_URL}/chat/${previousSessionId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to clear server-side chat history:', error);
      setMessages([{
        id: Date.now(),
        type: 'error',
        content: `השיחה נוקתה מהמכשיר, אך לא ניתן היה למחוק את הזיכרון בשרת: ${error.message}`,
        timestamp: new Date(),
      }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-title-wrap">
          <span className="chat-icon" aria-label="Developer chat icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 18l-6-6 6-6 1.4 1.4L6.8 12l3.6 3.6L9 18zm6 0l-1.4-1.4L17.2 12l-3.6-3.6L15 7l6 6-6 6z" />
            </svg>
          </span>
          <div className="chat-brand">
            <h1>DevChat</h1>
            <span>מרחב עבודה חכם</span>
          </div>
        </div>
        <div className="model-selector">
          <label htmlFor="model">מודל:</label>
          <select
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={isLoading}
          >
            <option value="gpt-5.4-nano">GPT 5.4 Nano</option>
            <option value="gpt-4">GPT 4</option>
          </select>
        </div>
      </div>

      <div className="chat-messages">
        {!isHydrated ? (
          <div className="empty-state">
            <p>טוען שיחה...</p>
          </div>
        ) : messages.length === 0 ? (
          <div className="empty-state welcome-state">
            <div className="welcome-emblem" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path d="M24 5.5 28.6 19.4 42.5 24l-13.9 4.6L24 42.5l-4.6-13.9L5.5 24l13.9-4.6L24 5.5Z" />
                <circle cx="37.5" cy="10.5" r="2" />
                <circle cx="10.5" cy="37.5" r="1.5" />
              </svg>
            </div>
            <span className="welcome-eyebrow">DEVCHAT · AI ASSISTANT</span>
            <h2>רעיונות גדולים מתחילים בשיחה.</h2>
            <p className="welcome-description">
              שאל, חקור, בנה — והפוך מחשבה לתוצאה.
            </p>
          </div>
        ) : null}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`message message-${message.type}`}
          >
            <div className="message-content">
              {message.type === 'user' ? (
                <p>{message.content}</p>
              ) : message.type === 'error' ? (
                <p className="error-text">{message.content}</p>
              ) : (
                <ReactMarkdown
                  components={{
                    h1: ({ node, ...props }) => (
                      <h2 {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h3 {...props} />
                    ),
                    code: ({ node, inline, ...props }) => (
                      <code
                        className={inline ? 'inline-code' : 'code-block'}
                        {...props}
                      />
                    ),
                    pre: ({ node, ...props }) => (
                      <pre className="code-pre" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a target="_blank" rel="noopener noreferrer" {...props} />
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              )}
            </div>
            <span className="message-time">
              {message.timestamp.toLocaleTimeString('he-IL')}
            </span>
          </div>
        ))}

        {isLoading && (
          <div className="message message-ai loading">
            <div className="spinner"></div>
            <p>העלאת תשובה...</p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="הקלד את הודעתך..."
          disabled={isLoading}
          className="chat-input"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="send-button"
        >
          שלח
        </button>
        <button
          type="button"
          onClick={handleClearChat}
          className="clear-button"
        >
          נקה
        </button>
      </form>
    </div>
  );
};

export default ChatComponent;