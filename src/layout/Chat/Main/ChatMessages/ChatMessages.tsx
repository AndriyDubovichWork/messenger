import React from "react";
import style from "./ChatMessages.module.scss";
import { useAppSelector } from "../../../../redux/hooks";
import Message from "./Message/Message";
const ChatMessages = () => {
  const ChatsList = useAppSelector((state) => state.Chats.chats);
  const selectedChatID = useAppSelector((state) => state.Chats.selectedChatID);
  return (
    <div className={style.Messages}>
      {ChatsList[selectedChatID].messages.map((message) => {
        return <Message message={message} key={message.MessageID} />;
      })}
      <div id="RequiredForAutoScroll" />
    </div>
  );
};

export default ChatMessages;
