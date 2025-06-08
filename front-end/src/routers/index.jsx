import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import NotFound from "../pages/notfound";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
