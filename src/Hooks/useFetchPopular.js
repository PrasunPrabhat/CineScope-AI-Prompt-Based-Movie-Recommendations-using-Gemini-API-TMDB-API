import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants/Constant";
import { addPopularMovies } from "../utils/movieSlice";
import { toast } from "react-toastify";

const useFetchPopular = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const fetchPopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      toast.error("Failed to fetch movies ❌");
      console.error("Fetch Error:", error);
    }
  };
  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);
};

export default useFetchPopular;
