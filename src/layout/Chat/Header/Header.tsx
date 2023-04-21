import React from 'react';
import style from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const userPlaceholder = require('../../../assets/userPlaceholder.jpg');

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.Left}>
        <img
          src={userPlaceholder}
          alt='userPlaceholder'
          className={style.UserPic}
        />
        <h1 className={style.UserName}>user name</h1>
      </div>
      <div className={style.Right}>
        <SearchIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default Header;
