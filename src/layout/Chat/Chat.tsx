import React from "react";
import Header from "./Header/Header";
import style from "./Chat.module.scss";
import Main from "./Main/Main";

const Chat = () => {
  return (
    <div className={style.Chat}>
      <Header />
      <Main />
    </div>
  );
};

export default Chat;
