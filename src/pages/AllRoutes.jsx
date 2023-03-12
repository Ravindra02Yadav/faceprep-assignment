import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default AllRoutes;
