import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import rawData, { ChatsT, MessageT } from "./rawData/rawData";

type ChtatsState = {
  chats: ChatsT;
  selectedChatID: number;
  userID: string;
};

const initialState: ChtatsState = {
  chats: rawData.chats,
  selectedChatID: 0,
  userID: "deffaultUserID",
};

const ChtatsSlice = createSlice({
  name: "Chats",
  initialState,
  reducers: {
    sendMessage(state, action) {
      let currDate = new Date();

      let hoursMin = currDate.getHours() + ":" + currDate.getMinutes();

      const message: MessageT = {
        text: action.payload,
        seen: false,
        sendTime: hoursMin,
        sender: state.userID,
      };
      state.chats[state.selectedChatID].messages.push(message);
    },
    setSelectedChatID(state, action) {
      state.selectedChatID = action.payload;
    },
  },
});

export const { sendMessage, setSelectedChatID } = ChtatsSlice.actions;
export default ChtatsSlice.reducer;
