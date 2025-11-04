import { createSlice } from "@reduxjs/toolkit";

// let obj = "";
const searchFilterSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searchMovie: (state, action) => (state = action.payload),
  },
});

export const searchFilterAction = searchFilterSlice.actions;
export default searchFilterSlice;
