import { configureStore } from "@reduxjs/toolkit";
import user from "./rdcUser";
import todo from "./rdcTodo";

export const Store = configureStore({
  reducer: {
    user: user,
    todo: todo,
  },
});
