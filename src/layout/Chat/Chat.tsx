import React from 'react';
import Header from './Header/Header';
import style from './Chat.module.scss';

const Chat = () => {
  return (
    <div className={style.Chat}>
      <Header />
    </div>
  );
};

export default Chat;
