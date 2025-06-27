import React from "react";

import Datatabel from "../components/organisms/dashboard/produk/datatabel";
import Datatabelheader from "../components/organisms/dashboard/produk/datatabelheader";
import Datatabelfooter from "../components/organisms/dashboard/produk/datatabelfooter";
import ProdukLayout from "../layouts/dashboard/produkLayout";
import KategoriLayout from "../layouts/dashboard/kategoriLayout";

const Playground = () => {
  return (
    <div className="bg-white">
      <KategoriLayout />
    </div>
  );
};

export default Playground;
