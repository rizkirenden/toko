import React from "react";

import Datatabel from "../components/organisms/dashboard/produk/datatabel";
import Datatabelheader from "../components/organisms/dashboard/produk/datatabelheader";
import Datatabelfooter from "../components/organisms/dashboard/produk/datatabelfooter";
import ProdukLayout from "../layouts/dashboard/produkLayout";
import KategoriLayout from "../layouts/dashboard/kategoriLayout";
import UserLayout from "../layouts/dashboard/userLayout";

const Playground = () => {
  return (
    <div className="bg-white">
      <UserLayout />
    </div>
  );
};

export default Playground;
