import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="text-white mt-6 sm:mt-[5rem]">
      <h1 className="text-lg sm:text-xl md:text-3xl font-extrabold tracking-wide px-2 mb-3 sm:mb-4 md:mb-6 relative inline-block drop-shadow-[0_1.5px_1.5px_rgba(255,0,128,0.75)]">
        {title}
        <span className="absolute left-1 -bottom-1 sm:-bottom-2 md:-bottom-3 h-1 w-full bg-gradient-to-r from-red-600 via-pink-500 to-purple-600 rounded-md"></span>
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar space-x-2 sm:space-x-3 md:space-x-4 px-2">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
