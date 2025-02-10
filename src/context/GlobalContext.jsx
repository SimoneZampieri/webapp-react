import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";
import ReviewCard from "../components/ReviewCard";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState();

  const fetchMovies = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log("Errore nel fetch dei dati", error);
      });
  };

  const fetchMovie = (movie_id) => {
    const movieApi_url = `${import.meta.env.VITE_API_URL}/${movie_id}`;

    axios
      .get(movieApi_url)
      .then((res) => {
        setCurrentMovie(res.data);
      })
      .catch((error) => {
        console.log("Errore nel caricamento film", error);
      });
  };
  const renderReviews = () => {
    return movie.reviews.map((movie) => (
      <ReviewCard key={movie.id} review={movie} />
    ));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const value = {
    movies,
    fetchMovies,
    fetchMovie,
    currentMovie,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
