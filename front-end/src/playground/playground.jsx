import React from "react";
import { Tableheader } from "../components/molecules/dashboard/toko/tableheader";
import Datatabelheader from "../components/organisms/dashboard/toko/datatabelheader";
import { Tabeldata } from "../components/molecules/dashboard/toko/tabeldata";
import Datatabel from "../components/organisms/dashboard/toko/datatabel";
const Playground = () => {
  return (
    <div className="bg-white">
      <Datatabelheader />
      <Datatabel />
    </div>
  );
};

export default Playground;
