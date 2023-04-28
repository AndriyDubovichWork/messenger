import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import rawData, { ChatsT } from "./rawData/rawData";

type ChtatsState = {
  chats: ChatsT;
  selectedChatID: number;
};

const initialState: ChtatsState = {
  chats: rawData.chats,
  selectedChatID: 0,
};

const ChtatsSlice = createSlice({
  name: "Chats",
  initialState,
  reducers: {
    sendMessage(state, action) {
      state.chats[state.selectedChatID].messages.push(action.payload);
    },
    setSelectedChatID(state, action) {
      state.selectedChatID = action.payload;
    },
  },
});

export const { sendMessage, setSelectedChatID } = ChtatsSlice.actions;
export default ChtatsSlice.reducer;
