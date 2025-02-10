import { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import Home from "./Home";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
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
      <Link href="/movies">
        <button className="btn btn-success">Torna ai Film</button>
      </Link>
    </div>
  );
};

export default MovieDetailPage;
