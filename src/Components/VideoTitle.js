import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute left-0 w-full aspect-[16/9] pt-14 sm:pt-24 md:pt-48 px-3 sm:px-6 md:px-12 text-gray-600 z-10 bg-gradient-to-r from-slate-950 to-transparent">
      {/* Title & Overview */}
      <div className="group relative top-14">
        <h1 className="bg-slate-500 rounded-md bg-opacity-60 py-1.5 px-2 sm:px-4 text-base sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 drop-shadow cursor-pointer inline-block text-white font-mono leading-snug">
          {title}
        </h1>

        <p className="text-[0.7rem] sm:text-sm md:text-lg max-w-[95%] sm:max-w-md md:max-w-xl mb-3 text-gray-800 drop-shadow font-mono bg-white bg-opacity-60 px-3 py-2 rounded-md font-semibold text-justify leading-tight">
          {overview.length > 180 ? overview.slice(0, 180) + "..." : overview}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 w-full max-w-[95%] relative top-14">
        <button className="bg-white text-black px-4 py-2 text-xs sm:text-sm md:text-base rounded hover:bg-gray-300 font-semibold shadow transition w-full sm:w-auto">
          ▶️ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-4 py-2 text-xs sm:text-sm md:text-base rounded hover:bg-gray-600 font-semibold shadow transition w-full sm:w-auto">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
