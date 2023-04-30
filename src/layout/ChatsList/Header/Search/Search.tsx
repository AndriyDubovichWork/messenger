import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import style from './Search.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  findMessageInAllChats,
  setSelectedChatID,
} from '../../../../redux/slices/ChtatsSlice';

const Search = () => {
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();

  const { searchedMessageID, searchedChatID } = useAppSelector(
    (state) => state.Chats
  );
  const searchFunc = () => {
    if (searchedMessageID) {
      const message = document.getElementById(searchedMessageID);
      message?.scrollIntoView({ behavior: 'smooth', block: 'center' });

      setSearch('');

      dispatch(setSelectedChatID(searchedChatID));
    }
  };

  return (
    <>
      <input
        className={style.Search}
        value={search}
        placeholder='search  messages'
        onChange={(e) => {
          setSearch(e.target.value);
          dispatch(findMessageInAllChats(search));
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
    </>
  );
};

export default Search;
