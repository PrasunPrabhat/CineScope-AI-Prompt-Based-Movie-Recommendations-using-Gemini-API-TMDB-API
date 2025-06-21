import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants/Constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector(
    (state) => state.movies?.trailerVideos?.[movieId]
  );

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filtered = json.results.filter(
        (video) => video.type === "Trailer" && video.name === "Official Trailer"
      );
      const finalTrailer = filtered.length ? filtered[0] : json.results[0];

      dispatch(addTrailerVideo({ movieId, trailer: finalTrailer }));
    };

    if (!trailer && movieId) {
      getMovieVideos();
    }
  }, [movieId, dispatch, trailer]);
};

export default useMovieTrailer;
