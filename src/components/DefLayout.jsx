import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DefLayout = () => {
  return (
    <div className="container mt-3">
      <Outlet />
    </div>
  );
};

export default DefLayout;
