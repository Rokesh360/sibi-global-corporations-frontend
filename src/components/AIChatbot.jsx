import React, { useState } from "react";
import {
  RobotOutlined,
  CloseOutlined,
  SendOutlined,
  UserOutlined,
  DeleteOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { sendChatMessage } from "../api/chatbotApi";

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 Welcome to Sibi Global Corporation. How can I help you today?",
    },
  ]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isSending) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await sendChatMessage({
        message: trimmedInput,
      });

      const botReply =
        response?.reply ||
        response?.message ||
        "Thanks for your message. Our team will get back to you shortly.";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: botReply,
        },
      ]);
    } catch (error) {
      console.error("Chatbot API Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "bot",
          text: "I'm currently unable to connect to the AI assistant. Please try again later or contact our team directly.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "bot",
        text: "Hello! 👋 How can I help you today?",
      },
    ]);
  };

  const handleSuggestion = (text) => {
    setInput(text);
  };

  return (
    <>
      {!open && (
        <button
          className="ai-chat-button"
          onClick={() => setOpen(true)}
          aria-label="Open AI chatbot"
        >
          <RobotOutlined />
          <span className="ai-chat-pulse" />
        </button>
      )}

      {open && (
        <div className="ai-chat-container">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <div className="ai-avatar">
                <RobotOutlined />
              </div>

              <div>
                <h3>SGC AI Assistant</h3>

                <div className="ai-status">
                  <span />
                  Online
                </div>
              </div>
            </div>

            <div className="ai-chat-actions">
              <button onClick={clearChat} aria-label="Clear chat">
                <DeleteOutlined />
              </button>

              <button
                onClick={() => setOpen(false)}
                aria-label="Minimize chat"
              >
                <MinusOutlined />
              </button>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <CloseOutlined />
              </button>
            </div>
          </div>

          <div className="ai-chat-body">
            <div className="ai-welcome">
              <div className="ai-welcome-icon">
                <RobotOutlined />
              </div>

              <h4>How can I help you?</h4>

              <p>
                Ask me about our steel structures, PEB buildings, fabrication,
                projects, or services.
              </p>

              <div className="ai-suggestions">
                <button
                  onClick={() =>
                    handleSuggestion("Tell me about your PEB structures")
                  }
                >
                  PEB Structures
                </button>

                <button
                  onClick={() =>
                    handleSuggestion("What services do you provide?")
                  }
                >
                  Our Services
                </button>

                <button
                  onClick={() =>
                    handleSuggestion("I want to request a quotation")
                  }
                >
                  Request Quote
                </button>
              </div>
            </div>

            <div className="ai-messages">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`ai-message-row ${message.sender}`}
                >
                  {message.sender === "bot" && (
                    <div className="message-avatar bot-avatar">
                      <RobotOutlined />
                    </div>
                  )}

                  <div className="ai-message">{message.text}</div>

                  {message.sender === "user" && (
                    <div className="message-avatar user-avatar">
                      <UserOutlined />
                    </div>
                  )}
                </div>
              ))}

              {isSending && (
                <div className="ai-message-row bot">
                  <div className="message-avatar bot-avatar">
                    <RobotOutlined />
                  </div>

                  <div className="ai-message">
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="ai-chat-footer">
            <div className="ai-input-wrapper">
              <input
                type="text"
                value={input}
                placeholder="Type your message..."
                disabled={isSending}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />

              <button
                onClick={sendMessage}
                disabled={!input.trim() || isSending}
                aria-label="Send message"
              >
                <SendOutlined />
              </button>
            </div>

            <p className="ai-powered">
              Powered by AI • Sibi Global Corporation
            </p>
          </div>
        </div>
      )}
    </>
  );
}