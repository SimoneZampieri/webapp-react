import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { useGlobalContext } from "../context/GlobalContext";

////
const MovieDetailPage = () => {
  const { id } = useParams();
  const { currentMovie, fetchMovie, deleteMovie } = useGlobalContext();
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  const handleDelete = () => {
    deleteMovie(id)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error("Error deleting movie:", err);
      });
  };

  if (!currentMovie) {
    return <p>Ci vorrà solo un attimo...</p>;
  }

  return (
    <div>
      <h1>{currentMovie.title}</h1>
      <div className="container">
        <img
          src={currentMovie.image}
          alt={currentMovie.title}
          className="img-fluid imgcont"
        />
        <h4 className="my-3">{currentMovie.abstract}</h4>
      </div>
      <h3>Recensioni:</h3>
      {currentMovie.reviews && currentMovie.reviews.length > 0 ? (
        currentMovie.reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))
      ) : (
        <p>Nessuna recensione disponibile</p>
      )}
      <div>
        <ReviewForm movie_id={currentMovie?.id} />
      </div>
      <Link to={"/"} className="btn btn-warning mt-5">
        Torna alla home
      </Link>
      <div className="d-flex justify-content-end">
        <button className="btn btn-danger" onClick={handleDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieDetailPage;
