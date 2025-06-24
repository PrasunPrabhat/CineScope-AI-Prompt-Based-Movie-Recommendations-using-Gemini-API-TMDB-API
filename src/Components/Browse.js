import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useHandleSignOut from "../Hooks/useHandleSignOut";
import useFetchNowPlayingMovies from "../Hooks/useFetchNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useFetchPopular from "../Hooks/useFetchPopular";
import useFetchTopRated from "../Hooks/useFetchTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import GPTSearch from "./GPTSearch";
import { toggleGptSearchView } from "../utils/GptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constants/Constant";
import { setLanguage } from "../utils/languageSlice";
import MoviePopup from "./MoviePopup";

const Browse = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  // console.log(user);

  const selectedLang = useSelector((state) => state.language.selectedLang);

  const handleChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  // Custom Hook: Handle sign out logic
  const handleSignOut = useHandleSignOut();
  // Custom Hook: Fetch now-playing movies from TMDB API
  useFetchNowPlayingMovies();
  useFetchPopular();
  useFetchTopRated();
  useUpcoming();

  const showGPTSearch = useSelector((state) => state.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    // Implement GPT Search logic here Toggle My GPT Search state
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="relative min-h-screen text-black font-sans">
      {/* 🔥 Header */}
      <header className="fixed top-0 left-0 w-full flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 px-4 sm:px-6 py-3 bg-gradient-to-b from-black/100 to-transparent z-50">
        {/* Netflix Logo */}

        <img
          className="w-24 sm:w-28 md:w-36"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />

        {/* Right Section: Language, GPT, User Info */}
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          {/* 🌐 Language Selector */}
          {showGPTSearch && (
            <select
              value={selectedLang}
              onChange={handleChange}
              className="bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded-md border border-gray-600 focus:outline-none w-28 sm:w-auto"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            onClick={handleGptSearchClick}
            className="bg-purple-600 hover:bg-green-700 text-white font-semibold text-xs sm:text-sm px-3 py-1.5 rounded shadow transition w-28 sm:w-auto"
          >
            {showGPTSearch ? "Home Page" : "GPT Search"}
          </button>

          {/* Display Name */}
          <p className="hidden sm:block font-medium text-white text-xs sm:text-sm">
            {user?.displayName}
          </p>

          {/* Profile Avatar */}
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
            />
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              {user?.displayName?.[0]?.toUpperCase() || "U"}
            </div>
          )}

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm px-3 py-1.5 rounded font-medium w-24 sm:w-auto"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* 🧱 Main and Secondary Containers */}
      <MoviePopup />
      <main className="relative overflow-hidden bg-black">
        {showGPTSearch ? (
          <GPTSearch selectedLang={selectedLang} />
        ) : (
          // React Fragment to render multiple elements without creating an extra DOM node
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </main>
    </div>
  );
};

export default Browse;
