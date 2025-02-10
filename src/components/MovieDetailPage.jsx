import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import renderReviews from "../components/ReviewCard";

//function
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
        <p>{movie.description}</p>
      </div>
      <h3>Recensioni:</h3>
      {reviews && reviews.length > 0 && renderReviews()}
    </div>
  );
};

export default MovieDetailPage;
