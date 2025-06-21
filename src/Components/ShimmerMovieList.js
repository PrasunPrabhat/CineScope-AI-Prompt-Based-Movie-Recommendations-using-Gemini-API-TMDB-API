import React from "react";
import ShimmerMovieCard from "./ShimmerMovieCard";

const ShimmerMovieList = ({ count = 5 }) => {
  return (
    <div className="text-white mt-6 sm:mt-8">
      <div className="h-6 sm:h-7 md:h-9 w-48 bg-gray-700 rounded-md mb-3 sm:mb-4 md:mb-6 relative inline-block">
        <div className="absolute left-1 -bottom-1 sm:-bottom-2 md:-bottom-3 h-1 w-full bg-gray-700 rounded-md"></div>
      </div>
      <div className="flex overflow-x-scroll no-scrollbar space-x-2 sm:space-x-3 md:space-x-4 px-2">
        {Array(count)
          .fill(0)
          .map((_, index) => (
            <ShimmerMovieCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default ShimmerMovieList;
