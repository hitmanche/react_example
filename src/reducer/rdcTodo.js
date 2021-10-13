import { createSlice } from "@reduxjs/toolkit";

export const RdcTodo = createSlice({
  name: "todo",
  initialState: {
    list: localStorage.getItem("localTodo") && [],
    whichMS: localStorage.getItem("whichMSTODO") || "S",
  },
  reducers: {
    loadListTodo: (state, action) => {
      state.list = action.payload;
    },
    resetTodo: (state) => {
      state.list = [];
    },
    setMSTodo: (state, action) => {
      localStorage.setItem("whichMSTODO", action.payload);
      state.whichMS = action.payload;
    },
  },
});

export const { loadListTodo, resetTodo, setMSTodo } = RdcTodo.actions;

export const todoList = (state) => state.todo.list;
export const whichMSTodo = (state) => state.todo.whichMS;

export default RdcTodo.reducer;
