import React, { useState } from 'react';
import style from './Header.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { findMessageInCurrentChat } from '../../../redux/slices/ChtatsSlice';
const userPlaceholder = require('../../../assets/userPlaceholder.jpg');

const Header = () => {
  const { selectedChatID, searchedMessageID } = useAppSelector(
    (state) => state.Chats
  );
  const { userName: currentUser, userImage: currentUserImage } = useAppSelector(
    (state) => state.Chats.chats[selectedChatID]
  );

  const dispatch = useAppDispatch();

  const [search, setSearch] = useState('');

  const searchFunc = () => {
    if (searchedMessageID) {
      const message = document.getElementById(searchedMessageID);
      message?.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setSearch('');
    }
  };

  return (
    <div className={style.Header}>
      <div className={style.Left}>
        <img
          src={currentUserImage || userPlaceholder}
          alt='userPlaceholder'
          className={style.UserPic}
        />
        <h1 className={style.UserName}>{currentUser}</h1>
      </div>
      <div className={style.Right}>
        <input
          className={style.Search}
          value={search}
          placeholder='search  messages'
          onChange={(e) => {
            setSearch(e.target.value);
            dispatch(findMessageInCurrentChat(search));
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchFunc();
            }
          }}
        />
        <SearchIcon
          onClick={() => {
            searchFunc();
          }}
        />
      </div>
    </div>
  );
};

export default Header;
