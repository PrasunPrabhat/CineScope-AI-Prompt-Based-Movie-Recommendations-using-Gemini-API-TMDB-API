import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  // ✅ Pick a random movie index between 0 and 19
  // const randomIndex = Math.floor(Math.random() * Math.min(movies.length, 20));
  // console.log(randomIndex)
  const mainMovie = movies[11];

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="relative w-full h-[54vh] sm:h-[65vh] md:h-[90vh] overflow-hidden">
      <VideoBG moiveId={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
