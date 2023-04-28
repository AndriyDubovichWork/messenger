import React from "react";
import ChatElement from "./ChatElement/ChatElement";
import { useAppSelector } from "../../../redux/hooks";

const Chats = () => {
  const chatsList = useAppSelector((state) => state.Chats.chats);
  return (
    <div>
      {chatsList.map((Chat, id) => {
        return <ChatElement ChatData={Chat} id={id} />;
      })}
    </div>
  );
};

export default Chats;
