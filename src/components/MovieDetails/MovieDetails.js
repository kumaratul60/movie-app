import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../redux/features/movieSlice";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const dataSelctor = useSelector(getSelectedMovieOrShow);
  console.log("selector", dataSelctor);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));

    // cleanup function
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie_section">
      {Object.keys(dataSelctor).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="left_section">
            <div className="movie_title">{dataSelctor.Title}</div>
            <div className="movie_rating">
              <span>
                IMDB Rating :{" "}
                <i className="fa fa-start"> {dataSelctor.imdbRating}</i>
              </span>
              <span>
                IMDB Votes :{" "}
                <i className="fa fa-thumbs-up"> {dataSelctor.imdbVotes}</i>
              </span>
              <span>
                Runtime: <i className="fa fa-film"> {dataSelctor.RunTime}</i>
              </span>
              <span>
                Year : <i className="fa fa-calendar"> {dataSelctor.Year}</i>
              </span>
            </div>
            <div className="movie_plot">{dataSelctor.Plot}</div>
            <div className="movie_details">
              <div>
                <span>Director</span>
                <span>{dataSelctor.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{dataSelctor.Actors}</span>
              </div>{" "}
              <div>
                <span>Generes</span>
                <span>{dataSelctor.Gener}</span>
              </div>{" "}
              <div>
                <span>Languages</span>
                <span>{dataSelctor.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{dataSelctor.Awards}</span>
              </div>
            </div>
          </div>
          <div className="right_section">
            <img src={dataSelctor.Poster} alt={dataSelctor.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
