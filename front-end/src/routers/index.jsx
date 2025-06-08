import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import NotFound from "../pages/notfound";
import Playground from "../playground/playground";
import Produkpage from "../pages/produkpage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/produk" element={<Produkpage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
