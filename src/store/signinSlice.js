import { createSlice } from "@reduxjs/toolkit";

// let obj = "";
const signinSlice = createSlice({
  name: "signin",
  initialState: "",
  reducers: {
    addValues: (state, action) => (state = action.payload),
  },
});

export const signinActions = signinSlice.actions;
export default signinSlice;
