import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("isAuth"));
  // console.log(auth)
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
