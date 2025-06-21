import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: {},
    popularMovies: null, // Add this line to handle popular movies as well.
    topRatedMovies: null, // Add this line to handle top-rated movies as well.
    upcomingMovies: null, // Add this line to handle upcoming movies as well.
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      const { movieId, trailer } = action.payload;
      state.trailerVideos[movieId] = trailer;
    },
    clearTrailerVideos: (state) => {
      state.trailerVideos = {};
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRated,
  addUpcoming,
  clearTrailerVideos,
} = movieSlice.actions;

export default movieSlice.reducer;
