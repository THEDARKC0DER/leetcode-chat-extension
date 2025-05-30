import React, { useState } from "react";
import UsernameForm from "../components/UsernameForm";
import ChatWindow from "../components/ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/userSlice";

const ChatPage = () => {
  const username = useSelector((state) => state.user.username);

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
  return (
    <div className="h-[400px] w-[300px]">
      {!username ? (
        <UsernameForm
          inputUsername={inputUsername}
          setInputUserName={setInputUserName}
          onSetUsername={handleSetUsername}
        />
      ) : (
        <ChatWindow />
      )}
    </div>
  );
};

export default ChatPage;
