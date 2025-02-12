import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

////
const MovieDetailPage = () => {
  const { id } = useParams();
  const { currentMovie, fetchMovie, deleteMovie } = useGlobalContext();
  const api_url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

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
        <button
          className="btn btn-danger"
          onClick={() => {
            if (confirm("Sei sicuro di voler eliminare il film?")) {
              deleteMovie(id, navigate("/"));
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieDetailPage;
