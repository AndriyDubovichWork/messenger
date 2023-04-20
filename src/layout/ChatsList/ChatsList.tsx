import React from 'react';
import Chats from './Chats/Chats';
import Header from './Header/Header';
import style from './ChatsList.module.scss';

const ChatsList = () => {
  return (
    <div className={style.Sidebar}>
      <Header />
      <Chats />
    </div>
  );
};

export default ChatsList;
