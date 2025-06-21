import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/Constants/Constant";

const GPTSearch = ({ selectedLang }) => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
      </div>

      {/* Foreground content */}
      <div className="z-10 w-full max-w-screen-xl px-3 sm:px-6 py-6 space-y-6">
        <GptSearchBar selectedLang={selectedLang} />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
