import React from "react";
import style from "./Messages.module.scss";
import { useAppSelector } from "../../../../redux/hooks";
const Messages = () => {
  const ChatsList = useAppSelector((state) => state.Chats.chats);
  const selectedChatID = useAppSelector((state) => state.Chats.selectedChatID);
  const userID = useAppSelector((state) => state.Chats.userID);
  return (
    <div className={style.Messages}>
      {ChatsList[selectedChatID].messages.map((message, id) => {
        return (
          <div
            className={`${style.MessageContainer} ${
              userID === message.sender ? style.SendMessageContainer : ""
            }`}
            key={message.text + id}
          >
            <h4 className={style.Message}>{message.text}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
