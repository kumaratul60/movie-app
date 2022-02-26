import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ data }) => {
  return (
    <div className="movie_card">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="cart_item">
          <div className="movie_img">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card_footer">
            <div className="card_info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
