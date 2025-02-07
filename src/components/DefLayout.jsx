import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

const DefLayout = () => {
  return (
    <div>
      <Header />
      <div className="container mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default DefLayout;
