import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/features/movieSlice";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner_img">
        <MovieListing />
      </div>
    </div>
  );
};

export default Home;
