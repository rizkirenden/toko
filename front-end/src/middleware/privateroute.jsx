import React from "react";
import { Navigate } from "react-router";
import Authstore from "../store/authStore";
const Privateroute = ({ children }) => {
  const { token } = Authstore();
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Privateroute;
