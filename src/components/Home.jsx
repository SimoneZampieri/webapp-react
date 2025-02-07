import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";

const Home = () => {
  const { movies } = useGlobalContext();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Lista dei film:</p>
      <div className="row">
        {Array.isArray(movies) && movies.length > 0 ? (
          movies.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        ) : (
          <p>Nessun film disponibile</p>
        )}
      </div>
    </div>
  );
};

export default Home;
