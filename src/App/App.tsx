import React, { useState } from 'react';
import style from './App.module.scss';
import { Drawer } from '@mui/material';
import Sidebar from '../layout/Sidebar/Sidebar';
import Chat from '../layout/Chat/Chat';

function App() {
  return (
    <div className={style.App}>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
