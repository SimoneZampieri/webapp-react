import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-3">
      <img src={movie.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.abstract}</p>
      </div>
    </div>
  );
};

export default MovieCard;
