import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addToFavourite: (state = initialState, action) => {
      state.push(action.payload);
    },
    removeFromFavourite: (state = initialState, action) => {
      // const id = action.payload;
      return state.filter((value) => value.id !== action.payload);
    },
  },
});

export const favouriteAction = favouriteSlice.actions;
export default favouriteSlice;
