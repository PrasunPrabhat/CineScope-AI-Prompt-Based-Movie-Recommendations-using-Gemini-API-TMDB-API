import React, { useRef } from "react";
import { LANG } from "../utils/language";

import { API_OPTIONS } from "../utils/Constants/Constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = ({ selectedLang }) => {
  const languageText = LANG[selectedLang];
  const searchText = useRef();
  const dispatch = useDispatch();

  // Seacrh Movie in the TMDB database
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log("GPT Search:", searchText.current.value);
    const prompt =
      "Act as a Movie Recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like: Gadar, Sholay, Don, Koi mil gaya, Golmaal";

    const res = await fetch("https://netflix-backend-p65a.onrender.com/api/gpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    // console.log("GPT Movie List:", data.text);
    const GEM_MOVIE_LIST = data.text.split(",");

    const promiseArray = GEM_MOVIE_LIST.map((movie) =>
      searchMovieTMDB(movie.trim())
    );

    const movieDetails = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: GEM_MOVIE_LIST,
        moiveResults: movieDetails,
      })
    );
  };

  return (
    <div className="w-full flex justify-center items-center pt-24 px-3 sm:px-4">
      <form
        className="w-full max-w-md sm:max-w-3xl bg-gray-900 p-4 sm:p-6 rounded-xl shadow-md grid grid-cols-12 gap-3 sm:gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-12 sm:col-span-10 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-gray-700 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={languageText?.gptSearchPlaceholder}
        />
        <button
          type="button"
          onClick={handleGptSearchClick}
          className="col-span-12 sm:col-span-2 bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-4 sm:px-5 py-2 sm:py-3 rounded-lg font-bold transition"
        >
          {languageText?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
