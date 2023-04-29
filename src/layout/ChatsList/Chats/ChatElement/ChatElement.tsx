import React from "react";
import style from "./ChatElement.module.scss";
import PushPinIcon from "@mui/icons-material/PushPin";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { ChatT } from "../../../../redux/slices/rawData/rawData";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
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
  const SelecdedId = useAppSelector((state) => state.Chats.selectedChatID);

  const { text: lastMessage } = useAppSelector((state) => {
    const CurrentId = state.Chats.chats[id].messages.length - 1;
    return state.Chats.chats[id].messages[CurrentId];
  });
  const currentUserImage = useAppSelector(
    (state) => state.Chats.chats[id].userImage
  );
  const isDone = true;

  return (
    <div
      className={`${SelecdedId === id ? style.ChatElementSelected : ""} ${
        style.ChatElement
      }`}
      onClick={() => {
        dispatch(setSelectedChatID(id));
      }}
    >
      <img
        src={currentUserImage || userPlaceholder}
        alt="user Placeholder"
        className={style.ChatImage}
      />
      <h5 className={style.ChatName}>{userName}</h5>
      <div className={style.HadSeen}>
        {isDone ? <DoneAllIcon /> : <CheckIcon />}
        <h6>{}</h6>
      </div>
      <h6 className={style.LastMessage}>{lastMessage}</h6>
      <PushPinIcon className={style.Pin} />
    </div>
  );
};

export default ChatElement;
