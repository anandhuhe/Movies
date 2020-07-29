import React from "react";
import { Link, Route } from "react-router-dom";
import CurrentMovieDetails from "../CurrentMovieDetails";

const Movie = ({ name, year, image, type, imdbID, match, _setCurrentMovieDetails, ...props }) => {
  return (
    <div class="col m4">
      <div class="card" onClick={() => _setCurrentMovieDetails(imdbID)}>
        <div class="card-image">
          <img src={image} style={{ height: 280 }} />
        </div>
        <div class="card-content">
          <span className="card-title">{name}</span>
          <p>Year : {year}</p>
          <p> Type:{type}</p>
        </div>
      </div>
    </div>
  );
};
export default Movie;
