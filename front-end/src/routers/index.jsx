import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import NotFound from "../pages/notfound";
import Playground from "../playground/playground";
import Produkpage from "../pages/produkpage";
import Tokopage from "../pages/tokopage";
import Loginpage from "../pages/loginpage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/produk" element={<Produkpage />} />
        <Route path="/toko" element={<Tokopage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
