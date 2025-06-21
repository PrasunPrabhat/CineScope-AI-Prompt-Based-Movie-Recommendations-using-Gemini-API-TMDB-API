import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/Constants/Constant";
import { addUpcoming } from "../utils/movieSlice";
import { toast } from "react-toastify";

const useUpcoming = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const fetchUpcomingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      // console.log(json);
      dispatch(addUpcoming(json.results));
    } catch (error) {
      toast.error("Failed to fetch movies ❌");
      console.error("Fetch Error:", error);
    }
  };
  useEffect(() => {
    !upcomingMovies && fetchUpcomingMovies();
  }, []);
};

export default useUpcoming;
