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
            <h4 className={style.Message}>
              <h4 className={style.Text}>{message.text}</h4>
              <h6 className={style.Date}>{message.sendTime}</h6>
            </h4>
          </div>
        );
      })}
      <div id="RequiredForAutoScroll" />
    </div>
  );
};

export default Messages;
