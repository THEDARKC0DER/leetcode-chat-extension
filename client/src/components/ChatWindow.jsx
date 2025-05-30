import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const ChatWindow = ({ onSendMessage, messages }) => {
  const [hovered, setHovered] = useState(false);
  const username = useSelector((state) => state.user.username);

  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!message.trim()) return;
    onSendMessage(message.trim());
    setMessage("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        backgroundColor: "#101828",
      }}
      className="flex flex-col h-[400px]  text-white p-4 rounded"
    >
      <h2 className="text-xl font-semibold mb-4">
        Welcome, <span style={{ color: "#05df72 " }}>{username}</span>
      </h2>
      <div
        style={{ backgroundColor: "#1e2939 " }}
        className="flex-1 overflow-y-auto  space-y-2  p-4 rounded-lg mb-4 hide-scrollbar"
      >
        {messages.map((msg) => (
          <div key={msg.id || msg.timestamp} className="text-sm">
            <b className="font-semibold text-blue-400">{msg.user} </b>
            <span className="text-gray-300"> {msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Text your message..."
          style={{ backgroundColor: "#364153" }}
          className="flex-1 rounded text-white  placeholder-gray-500 focus:outline-none p-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            backgroundColor: hovered ? "#155dfc" : "oklch(62.3% 0.214 259.815)",
          }}
          className="  rounded text-white px-4 py-1 font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
