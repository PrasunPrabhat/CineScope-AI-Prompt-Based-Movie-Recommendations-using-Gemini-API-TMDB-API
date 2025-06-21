import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../../utils/UserDataSlice";
import moviesReducer from "../../utils/movieSlice";
import gptReducer from "../../utils/GptSlice"; // Add the GPT slice here as well.
import languageReducer from "../../utils/languageSlice"; // Add the language slice here as well.
import popupReducer from "../../utils/popupSlice";

const appStore = configureStore({
  reducer: {
    user: userDataReducer,
    movies: moviesReducer, // Add the movie slice here as well.
    gpt: gptReducer, // Add the GPT slice here as well.
    language: languageReducer,
    popup: popupReducer, // Add the popup slice here as well.
  },
});

export default appStore;
