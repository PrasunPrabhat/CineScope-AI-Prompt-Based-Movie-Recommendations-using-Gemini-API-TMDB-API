import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../utils/popupSlice";
import { IMG_CDN_URL } from "../utils/Constants/Constant";

const MoviePopup = () => {
  const dispatch = useDispatch();
  const { selectedMovie } = useSelector((state) => state.popup);
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);

  const popupRef = useRef(null); // Reference to the popup card

  // Close popup on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        dispatch(closePopup());
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch]);

  if (!selectedMovie) return null;
  if (!trailerVideo?.key) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center px-2 sm:px-4 ">
      <div
        ref={popupRef}
        className="bg-gray-800 rounded-lg max-w-md sm:max-w-[67rem] md:h-[88vh] w-full p-4 relative shadow-lg flex flex-col sm:flex-row gap-4"
      >
        {/* ❌ Close button */}
        <button
          onClick={() => dispatch(closePopup())}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        {/* 🎞️ Poster on Left */}
        <img
          src={IMG_CDN_URL + selectedMovie.poster_path}
          alt={selectedMovie.title}
          className="w-full max-h-56 md:max-h-[38rem] sm:w-40 md:w-[23rem] h-auto rounded-md object-contain"
        />

        {/* 📋 Details on Right */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-black mb-1 md:text-cyan-400 md:underline">
            {selectedMovie.title}
          </h2>

          <p className="text-sm sm:text-base md:text-justify text-gray-700 mb-3 overflow-y-auto max-h-28 sm:max-h-40 md:text-neutral-300">
            {selectedMovie.overview}
          </p>

          {trailerVideo?.key ? (
            <div className="relative">
              <iframe
                className="w-full h-48 sm:h-40 md:h-[21rem] rounded-md pointer-events-none"
                src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1&iv_load_policy=3&disablekb=1`}
                title="Trailer"
                allow="autoplay"
              ></iframe>

              {/* External YouTube link */}
              <a
                href={`https://www.youtube.com/watch?v=${trailerVideo.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-sm sm:text-base text-white text-center bg-purple-700 px-4 py-2 rounded-md hover:bg-green-500 transition-all md:ml-[8.25rem] md:mt-10 md:mr-[11.75rem] md:p-[1.5rem] md:rounded-lg"
              >
                🔗 Watch this trailer on YouTube
              </a>
            </div>
          ) : (
            <p className="text-sm italic text-red-500">No trailer available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoviePopup;
