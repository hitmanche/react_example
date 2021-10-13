import { createSlice } from "@reduxjs/toolkit";

export const RdcUser = createSlice({
  name: "user",
  initialState: {
    list: localStorage.getItem("localData") && [],
    whichMS: localStorage.getItem("whichMS") || "S",
  },
  reducers: {
    loadList: (state, action) => {
      state.list = action.payload;
    },
    reset: (state) => {
      state.list = [];
    },
    setMS: (state, action) => {
      localStorage.setItem("whichMS", action.payload);
      state.whichMS = action.payload;
    },
  },
});

export const { loadList, reset, setMS } = RdcUser.actions;

export const userList = (state) => state.user.list;
export const whichMS = (state) => state.user.whichMS;

export default RdcUser.reducer;
