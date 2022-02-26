import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../redux/features/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css";

const MovieListing = () => {
  const movieList = useSelector(getAllMovies);
  const showsList = useSelector(getAllShows);
  console.log("list", movieList);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movieList.Response === "True" ? (
      movieList.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie_error">
        <h3>{movieList.Error}</h3>
      </div>
    );

  renderShows =
    showsList.Response === "True" ? (
      showsList.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movie_error">
        <h3>{showsList.Error}</h3>
      </div>
    );

  return (
    <div className="movie_wrapper">
      <div className="movie_list">
        <h2>Movies</h2>
        <div className="movie_container">{renderMovies}</div>
      </div>
      <div className="shows_list">
        <h2>Shows</h2>
        <div className="shows_container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
