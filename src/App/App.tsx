import React, { useState } from "react";
import style from "./App.module.scss";
import { Drawer } from "@mui/material";
import ChatsList from "../layout/ChatsList/ChatsList";
import Chat from "../layout/Chat/Chat";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className={style.App}>
        <ChatsList />
        <Chat />
      </div>
    </Provider>
  );
}

export default App;
