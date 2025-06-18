import React from "react";
import { Sidebar } from "../components/molecules/dashboard/sidebar";
import { Carduser } from "../components/molecules/dashboard/card-user";
import { Cardtoko } from "../components/molecules/dashboard/card-toko";
import Datakategori from "../components/organisms/dashboard/datakategori";
import Dataproduk from "../components/organisms/dashboard/dataproduk";
const Playground = () => {
  return (
    <div className="bg-white">
      <Sidebar />
      <Carduser />
      <Cardtoko />
      <Datakategori />
      <Dataproduk />
    </div>
  );
};

export default Playground;
