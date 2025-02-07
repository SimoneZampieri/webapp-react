import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DefLayout from "./components/DefLayout";
import { GlobalProvider } from "./context/GlobalContext";
import MovieDetailPage from "./components/MovieDetailPage";

//app function
function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
