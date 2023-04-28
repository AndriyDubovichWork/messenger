import { configureStore } from '@reduxjs/toolkit';
import Chatsreducer from './slices/ChtatsSlice'

export const store = configureStore({
  reducer: {
    Chats: Chatsreducer ,
  },
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
