import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const storedUsername = localStorage.getItem("leetcodeChatUser");

const initialState = {
  username: storedUsername || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("leetcodeChatUser", action.payload);
    },
  },
});

export const {setUsername}=userSlice.actions

export default userSlice.reducer