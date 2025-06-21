import React from "react";


const ShimmerMovieCard = () => {
  return (
    <div className="min-w-[100px] sm:min-w-[120px] md:min-w-[180px] max-w-[100px] sm:max-w-[120px] md:max-w-[180px] h-[150px] sm:h-[180px] md:h-[270px] overflow-hidden rounded-md">
      <div className="w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-pulse rounded-md"></div>
    </div>
  );
};

export default ShimmerMovieCard;
