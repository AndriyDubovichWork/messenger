import React, { useState, useEffect } from "react";
import style from "./ChatInput.module.scss";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../../../redux/slices/ChtatsSlice";
import { useAppSelector } from "../../../../redux/hooks";

const ChatInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const AutoScroll = () => {
    const bottomElement = document.getElementById("RequiredForAutoScroll");
    bottomElement?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const selectedID = useAppSelector((state) => state.Chats.selectedChatID);
  const Messages = useAppSelector(
    (state) => state.Chats.chats[selectedID].messages
  );

  useEffect(() => {
    AutoScroll();
  }, [Messages]);

  return (
    <input
      className={style.ChatInput}
      placeholder="Message"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && text) {
          dispatch(sendMessage(text));
          setText("");
        }
      }}
    />
  );
};

export default ChatInput;
