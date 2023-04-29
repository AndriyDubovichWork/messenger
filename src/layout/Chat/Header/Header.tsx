import React from "react";
import style from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useAppSelector } from "../../../redux/hooks";
const userPlaceholder = require("../../../assets/userPlaceholder.jpg");

const Header = () => {
  const selectedChatID = useAppSelector((state) => state.Chats.selectedChatID);
  const currentUser = useAppSelector(
    (state) => state.Chats.chats[selectedChatID].userName
  );
  const currentUserImage = useAppSelector(
    (state) => state.Chats.chats[selectedChatID].userImage
  );
  return (
    <div className={style.Header}>
      <div className={style.Left}>
        <img
          src={currentUserImage || userPlaceholder}
          alt="userPlaceholder"
          className={style.UserPic}
        />
        <h1 className={style.UserName}>{currentUser}</h1>
      </div>
      <div className={style.Right}>
        <SearchIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default Header;
