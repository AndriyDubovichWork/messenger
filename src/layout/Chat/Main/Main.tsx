import React from "react";
import ChatInput from "./ChatInput/ChatInput";
import Messages from "./Messages/Messages";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <div className={style.Main}>
      <Messages />
      <ChatInput />
    </div>
  );
};

export default Main;
