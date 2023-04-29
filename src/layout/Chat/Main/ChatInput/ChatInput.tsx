import React, { useState } from "react";
import style from "./ChatInput.module.scss";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../../redux/slices/ChtatsSlice";

const ChatInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  return (
    <input
      className={style.ChatInput}
      placeholder="Message"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch(sendMessage(text));
          setText("");
        }
      }}
    />
  );
};

export default ChatInput;
