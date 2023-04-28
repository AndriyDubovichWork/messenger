import React from "react";
import style from "./Messages.module.scss";
import { useAppSelector } from "../../../../redux/hooks";
const Messages = () => {
  const ChatsList = useAppSelector((state) => state.Chats.chats);
  const selectedChatID = useAppSelector((state) => state.Chats.selectedChatID);
  return (
    <div className={style.Messages}>
      <div className={style.MessageContainer}>
        {ChatsList[selectedChatID].messages.map((message) => {
          return <h4 className={style.Message}>{message.text}</h4>;
        })}
      </div>
    </div>
  );
};

export default Messages;
