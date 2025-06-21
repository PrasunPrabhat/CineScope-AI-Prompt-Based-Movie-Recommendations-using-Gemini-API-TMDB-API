import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants/Constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { toast } from "react-toastify";

const useFetchNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    if (!nowPlayingMovies) fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      toast.error("Failed to fetch movies ❌");
      console.error("Fetch Error:", error);
    }
  };
};

export default useFetchNowPlayingMovies;
