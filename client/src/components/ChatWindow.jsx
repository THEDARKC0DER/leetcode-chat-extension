import React from "react";
import { useSelector } from "react-redux";

const ChatWindow = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="flex flex-col h-[400px] bg-gray-900 text-white p-4 rounded">
      <h2 className="text-xl font-semibold mb-4">
        Welcome, <span className="text-green-400">{username}</span>
      </h2>
      {/* <div className="flex-1 overflow-y-auto  space-y-2 bg-gray-800 p-4 rounded-lg mb-4">
        {messages.map((msg) => (
          <div key={msg.id || msg.timestamp} className="text-sm">
            <b className="font-semibold text-blue-400">{msg.user} </b>
            <span className="text-gray-300"> {msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div> */}
      <div className="flex items-center gap-2">
        {/* <input
          type="text"
          placeholder="Text your message..."
          className="flex-1 rounded bg-gray-700 text-white  placeholder-gray-500 focus:outline-none p-1"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key == "Enter" && handleSend()}
        /> */}
        <button
          // onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-1 font-medium"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
