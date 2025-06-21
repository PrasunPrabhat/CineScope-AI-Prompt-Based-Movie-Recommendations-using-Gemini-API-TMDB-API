import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    showPopup: false,
    selectedMovie: null,
  },
  reducers: {
    openPopup: (state, action) => {
      state.selectedMovie = action.payload;
      state.showPopup = true;
    },
    closePopup: (state) => {
      state.selectedMovie = null;
      state.showPopup = false;
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
