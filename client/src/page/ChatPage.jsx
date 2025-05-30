import React, { useEffect, useState } from "react";
import UsernameForm from "../components/UsernameForm";
import ChatWindow from "../components/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/userSlice";

import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

const ChatPage = () => {
  const username = useSelector((state) => state.user.username);

  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();

  const [inputUsername, setInputUserName] = useState("");

  const handleSetUsername = () => {
    const name = inputUsername.trim();
    if (name === "") {
      const anonName = `Anonymous#${Math.floor(Math.random() * 10000)}`;
      dispatch(setUsername(anonName));
    } else {
      dispatch(setUsername(name));
    }
  };

  const handleSendMessage = (text) => {
    socket.emit("send-message", {
      user: username,
      text,
    });
  };

  useEffect(() => {
    socket.on("receive-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });
    return () => {
      socket.off("receive-message");
    };
  }, []);

  return (
    <div className="h-[400px] w-[300px]">
      {!username ? (
        <UsernameForm
          inputUsername={inputUsername}
          setInputUserName={setInputUserName}
          onSetUsername={handleSetUsername}
        />
      ) : (
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
      )}
    </div>
  );
};

export default ChatPage;
