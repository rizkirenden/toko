import React from "react";

import { Tabeldata } from "../components/molecules/dashboard/produk/tabeldata";
import { Tabelfooter } from "../components/molecules/dashboard/produk/tabelfooter";
const Playground = () => {
  return (
    <div className="bg-white">
      <Tabeldata />
      <Tabelfooter />
    </div>
  );
};

export default Playground;
