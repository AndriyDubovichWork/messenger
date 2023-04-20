import React, { useState } from 'react';
import style from './App.module.scss';
import { Drawer } from '@mui/material';
import ChatsList from '../layout/ChatsList/ChatsList';
import Chat from '../layout/Chat/Chat';

function App() {
  return (
    <div className={style.App}>
      <ChatsList />
      <Chat />
    </div>
  );
}

export default App;
