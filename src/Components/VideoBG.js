import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBG = ({ moiveId }) => {
  useMovieTrailer(moiveId);
  const trailerVideo = useSelector(
    (state) => state.movies?.trailerVideos?.[moiveId]
  );

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute top-0 left-0 w-screen aspect-video z-0 overflow-hidden pb-36">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerVideo.key}&modestbranding=1`}
        title="Netflix Trailer Background"
        allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <div className="absolute top-0 left-0 w-full h-full opacity-80"></div>
    </div>
  );
};

export default VideoBG;
