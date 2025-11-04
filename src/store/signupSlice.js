import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup",
  initialState: [],
  reducers: {
    addValues: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const signupActions = signupSlice.actions;
export default signupSlice;
