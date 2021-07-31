import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter";

const makeStore = () => {
  const store = configureStore({
    reducer: { counter },
    devTools: process.env.NODE_ENV === "development",
    middleware: [],
  });

  return store;
};

export default makeStore;
