import React from "react";
import style from "./ChatElement.module.scss";
import PushPinIcon from "@mui/icons-material/PushPin";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { ChatT } from "../../../../redux/slices/rawData/rawData";
import { useAppDispatch } from "../../../../redux/hooks";
import { setSelectedChatID } from "../../../../redux/slices/ChtatsSlice";
const userPlaceholder = require("../../../../assets/userPlaceholder.jpg");

type ChatElementPropsT = {
  ChatData: ChatT;
  id: number;
};

const ChatElement = ({
  ChatData: { messages, userName },
  id,
}: ChatElementPropsT) => {
  const dispatch = useAppDispatch();

  const isDone = true;

  return (
    <div
      className={style.ChatElement}
      onClick={() => {
        dispatch(setSelectedChatID(id));
      }}
    >
      <img
        src={userPlaceholder}
        alt="user Placeholder"
        className={style.ChatImage}
      />
      <h5 className={style.ChatName}>{userName}</h5>
      <div className={style.HadSeen}>
        {isDone ? <DoneAllIcon /> : <CheckIcon />}
        <h6>Wed</h6>
      </div>
      <h6 className={style.LastMessage}>last message</h6>
      <PushPinIcon className={style.Pin} />
    </div>
  );
};

export default ChatElement;
