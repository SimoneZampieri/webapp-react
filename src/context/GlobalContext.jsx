import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const apiUrl = "http://localhost:3000";
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios
      .get(apiUrl)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.error("Errore nel fetch dei dati", error);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const value = {
    movies,
    fetchMovies,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
