import React from "react";
import style from "./Message.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { MessageT } from "../../../../../redux/slices/rawData/rawData";
import { DeleteMessages } from "../../../../../redux/slices/ChtatsSlice";
import CheckIcon from "@mui/icons-material/Check";
import DoneAllIcon from "@mui/icons-material/DoneAll";

type MessagePropsT = {
  message: MessageT;
};

const Message = ({ message }: MessagePropsT) => {
  const userID = useAppSelector((state) => state.Chats.userID);

  const dispatch = useAppDispatch();
  return (
    <div
      className={`${style.MessageContainer} ${
        userID === message.sender ? style.SendMessageContainer : ""
      }`}
      onClick={() => {
        if (userID === message.sender) {
          dispatch(DeleteMessages(message.MessageID));
        }
      }}
    >
      <div className={style.Message}>
        <h4 className={style.Text}>{message.text}</h4>
        <h6 className={style.Date}>{message.sendTime}</h6>
        {message.seen ? (
          <DoneAllIcon sx={{ fontSize: "1vw" }} />
        ) : (
          <CheckIcon sx={{ fontSize: "1vw" }} />
        )}
      </div>
    </div>
  );
};

export default Message;
