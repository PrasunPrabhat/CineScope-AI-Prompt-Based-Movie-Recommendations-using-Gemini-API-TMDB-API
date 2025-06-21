import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moiveResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, moiveResults } = action.payload;
      state.movieNames = movieNames;
      state.moiveResults = moiveResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = GptSlice.actions;

export default GptSlice.reducer;
