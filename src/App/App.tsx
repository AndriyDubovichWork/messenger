import React, { useState } from 'react';
import './App.scss';
import { Drawer } from '@mui/material';

function App() {
  return (
    <h1>
       <Drawer
      anchor={'left'}
      open={true}
    >
      123
    </Drawer>
    </h1>
  );
}

export default App;
