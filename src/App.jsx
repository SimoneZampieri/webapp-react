import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DefLayout from "./components/DefLayout";
import { GlobalProvider } from "./context/GlobalContext";
import MovieDetailPage from "./components/MovieDetailPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import NewMovie from "./components/NewMovie";

//app function
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:id" element={<MovieDetailPage />} />
            <Route path="/" element={<NewMovie />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
