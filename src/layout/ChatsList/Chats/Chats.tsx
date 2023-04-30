import React from 'react';
import ChatElement from './ChatElement/ChatElement';
import { useAppSelector } from '../../../redux/hooks';
import style from './Chats.module.scss';
const Chats = () => {
  const chatsList = useAppSelector((state) => state.Chats.chats);
  return (
    <div className={style.Chats}>
      {chatsList.map((Chat, id) => {
        return <ChatElement ChatData={Chat} id={id} key={Chat.userName + id} />;
      })}
    </div>
  );
};

export default Chats;
