import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";

////
const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const api_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  useEffect(() => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        console.error("Errore nel caricamento dati", error);
      });
  }, [id]);

  if (!movie) {
    return <p>Ci vorrà solo un attimo...</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <div className="container">
        <img
          src={movie.image}
          alt={movie.title}
          className="img-fluid imgcont"
        />
        <p>{movie.description}</p>
      </div>
      <h3>Recensioni:</h3>
      {movie.reviews && movie.reviews.length > 0 ? (
        movie.reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))
      ) : (
        <p>Nessuna recensione disponibile</p>
      )}
      <div>
        <ReviewForm movie_id={movie?.id} fetchMovie={setMovie} />
      </div>
      <Link to={"/"} className="btn btn-warning mt-5">
        Torna alla home
      </Link>
    </div>
  );
};

export default MovieDetailPage;
