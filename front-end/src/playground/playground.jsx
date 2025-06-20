import React from "react";
import { Tableheader } from "../components/molecules/dashboard/toko/tableheader";
import Datatabelheader from "../components/organisms/dashboard/toko/datatabelheader";
import { Tabeldata } from "../components/molecules/dashboard/toko/tabeldata";
import Datatabel from "../components/organisms/dashboard/toko/datatabel";
import { Tabelfooter } from "../components/molecules/dashboard/toko/tabelfooter";
const Playground = () => {
  return (
    <div className="bg-white">
      <Datatabelheader />
      <Datatabel />
      <Tabelfooter />
    </div>
  );
};

export default Playground;
