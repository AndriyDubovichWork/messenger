import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import rawData, { ChatsT, MessageT } from './rawData/rawData';
import uniqid from 'uniqid';
import stringSimilarity from 'string-similarity';

type ChtatsState = {
  chats: ChatsT;
  selectedChatID: number;
  userID: string;
  searchedMessageID: null | string;
  searchedChatID: null | number;
};

const initialState: ChtatsState = {
  chats: rawData.chats,
  selectedChatID: 0,
  userID: 'deffaultUserID',
  searchedMessageID: null,
  searchedChatID: null,
};

const ChtatsSlice = createSlice({
  name: 'Chats',
  initialState,
  reducers: {
    sendMessage(state, action) {
      let currDate = new Date();

      let hoursMin = currDate.getHours() + ':' + currDate.getMinutes();

      const message: MessageT = {
        text: action.payload,
        seen: false,
        sendTime: hoursMin,
        sender: state.userID,
        MessageID: uniqid(),
      };
      state.chats[state.selectedChatID].messages.push(message);
    },
    DeleteMessages(state, action) {
      state.chats[state.selectedChatID].messages = state.chats[
        state.selectedChatID
      ].messages.filter((message) => {
        return message.MessageID !== action.payload;
      });
    },
    findMessageInCurrentChat(state, action) {
      const matches = stringSimilarity.findBestMatch(
        action.payload,
        state.chats[state.selectedChatID].messages.map((message) => {
          return message.text;
        })
      );

      state.searchedMessageID =
        state.chats[state.selectedChatID].messages[
          matches.bestMatchIndex
        ].MessageID;
    },
    findMessageInAllChats(state, action) {
      let bestMatch = 0;

      for (let i = 0; i < state.chats.length; i++) {
        const matches = stringSimilarity.findBestMatch(
          action.payload,
          state.chats[i].messages.map((message) => {
            return message.text;
          })
        );

        if (matches.bestMatch.rating > bestMatch) {
          state.searchedMessageID =
            state.chats[i].messages[matches.bestMatchIndex].MessageID;

          bestMatch = matches.bestMatch.rating;

          state.searchedChatID = i;
        }
      }
    },
    setSelectedChatID(state, action) {
      state.selectedChatID = action.payload;
    },
  },
});

export const {
  sendMessage,
  DeleteMessages,
  findMessageInCurrentChat,
  findMessageInAllChats,
  setSelectedChatID,
} = ChtatsSlice.actions;
export default ChtatsSlice.reducer;
