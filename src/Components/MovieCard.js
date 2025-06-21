import React from "react";
import { IMG_CDN_URL } from "../utils/Constants/Constant";
import { useDispatch } from "react-redux";
import { openPopup } from "../utils/popupSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  if (!movie?.poster_path) return null;

  return (
    <div
      onClick={() => dispatch(openPopup(movie))}
      className="min-w-[100px] sm:min-w-[120px] md:min-w-[180px] max-w-[100px] sm:max-w-[120px] md:max-w-[180px] h-[150px] sm:h-[180px] md:h-[270px] overflow-hidden"
    >
      <img
        src={IMG_CDN_URL + movie.poster_path}
        alt="Movie"
        className="w-full h-full object-cover rounded-md shadow-lg transition-transform duration-300 hover:scale-105 md:hover:scale-110 cursor-pointer"
      />
    </div>
  );
};

export default MovieCard;
