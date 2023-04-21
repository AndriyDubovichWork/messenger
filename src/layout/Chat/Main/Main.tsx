import React from 'react';
import Input from './Input/Input';
import Messages from './Messages/Messages';
import style from './Main.module.scss';

const Main = () => {
  return (
    <div className={style.Main}>
      <Messages />
      <Input />
    </div>
  );
};

export default Main;
