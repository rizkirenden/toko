import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import NotFound from "../pages/notfound";
import Playground from "../playground/playground";
import Produkpage from "../pages/produkpage";
import Tokopage from "../pages/tokopage";
import Loginpage from "../pages/loginpage";
import Dashpage from "../pages/dahsboard/dashpage";
import Kategoripage from "../pages/dahsboard/kategoripage";
import Tokopages from "../pages/dahsboard/tokopage";
import Produkpages from "../pages/dahsboard/produkpage";
import Userpage from "../pages/dahsboard/userpage";

import Privateroute from "../middleware/privateroute";
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

        <Route
          path="/dashboard"
          element={
            <Privateroute>
              <Dashpage />
            </Privateroute>
          }
        />
        <Route
          path="/datatoko"
          element={
            <Privateroute>
              <Tokopages />
            </Privateroute>
          }
        />
        <Route
          path="/datacategory"
          element={
            <Privateroute>
              <Kategoripage />
            </Privateroute>
          }
        />
        <Route
          path="/dataproduk"
          element={
            <Privateroute>
              <Produkpages />
            </Privateroute>
          }
        />
        <Route
          path="/user"
          element={
            <Privateroute>
              <Userpage />
            </Privateroute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
