import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
    name: "chul",
  },
  reducers: {
    increment: (state) => {
      state.number += 1;
    },
    decrement: (state) => {
      state.number -= 1;
    },
  },
});

// Actions
export const { increment, decrement } = counterSlice.actions;

// Selector
export const counterSelector = (state) => state.counter.number;
export const nameSelector = (state) => state.counter.name;

// Reducer
export default counterSlice.reducer;
