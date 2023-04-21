import React from 'react';
import style from './ChatElement.module.scss';
import PushPinIcon from '@mui/icons-material/PushPin';
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
const userPlaceholder = require('../../../../assets/userPlaceholder.jpg');

const ChatElement = () => {
  const isDone = true;
  return (
    <div>
      <img
        src={userPlaceholder}
        alt='user Placeholder'
        className={style.ChatImage}
      />
      <h5>user Name</h5>
      <h6>Wed</h6>
      {isDone ? <DoneAllIcon /> : <CheckIcon />}
      <h6>last message</h6>
      <PushPinIcon />
    </div>
  );
};

export default ChatElement;
