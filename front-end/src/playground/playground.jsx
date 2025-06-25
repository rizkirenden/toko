import React from "react";

import Datatabel from "../components/organisms/dashboard/produk/datatabel";
import { Tabelfooter } from "../components/molecules/dashboard/produk/tabelfooter";
import { Tableheader } from "../components/molecules/dashboard/toko/tableheader";
const Playground = () => {
  return (
    <div className="bg-white">
      <Tableheader />
      <Datatabel />
      <Tabelfooter />
    </div>
  );
};

export default Playground;
