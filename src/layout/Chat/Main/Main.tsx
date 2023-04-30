import React from "react";
import ChatInput from "./ChatInput/ChatInput";
import ChatMessages from "./ChatMessages/ChatMessages";
import style from "./Main.module.scss";

const Main = () => {
  return (
    <div className={style.Main}>
      <ChatMessages />
      <ChatInput />
    </div>
  );
};

export default Main;
