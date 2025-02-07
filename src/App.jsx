import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import DefLayout from "./components/DefLayout";

//app function
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
