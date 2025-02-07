import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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
      </div>
      <p>{movie.description}</p>
      <h3>Recensioni:</h3>
      {movie.reviews && movie.reviews.length > 0 ? (
        <ul>
          {movie.reviews.map((review) => (
            <li key={review.id}>{review.text}</li>
          ))}
        </ul>
      ) : (
        <p>Nessuna recensione disponibile</p>
      )}
    </div>
  );
};

export default MovieDetailPage;
