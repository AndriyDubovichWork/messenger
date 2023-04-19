import React from 'react';
import Chats from './Chats/Chats';
import Header from './Header/Header';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={style.Sidebar}>
      <Header />
      <Chats />
    </div>
  );
};

export default Sidebar;
