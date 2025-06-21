import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants/Constant";
import { addTopRated } from "../utils/movieSlice";
import { toast } from "react-toastify";

const useFetchTopRated = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const fetchTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addTopRated(json.results));
    } catch (error) {
      toast.error("Failed to fetch movies ❌");
      console.error("Fetch Error:", error);
    }
  };
  useEffect(() => {
    !topRatedMovies && fetchTopRatedMovies();
  }, []);
};

export default useFetchTopRated;
