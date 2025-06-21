import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { moiveResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames || movieNames.length === 0) return null;

  return (
    <div className="px-4 py-6 sm:px-8 sm:py-10 w-full">
      <div className="max-w-[111rem] mx-auto space-y-6 bg-black/60 backdrop-blur-md rounded-xl p-4 sm:p-6 transition-all duration-300 ease-in-out">
        {movieNames.map((moiveName, index) => (
          <div key={moiveName} className="border-b border-gray-700 pb-4">
            <MovieList title={moiveName} movies={moiveResults[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
