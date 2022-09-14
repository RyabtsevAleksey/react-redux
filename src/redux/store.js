import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import todoAction from "./todoSlice.js";
import postSlice from "./postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    todoAction,
    post: postSlice,
  },
});
