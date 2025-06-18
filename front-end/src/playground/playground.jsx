import React from "react";
import { Sidebar } from "../components/molecules/dashboard/sidebar";
import { Carduser } from "../components/molecules/dashboard/card-user";
import { Cardproduk } from "../components/molecules/dashboard/card-produk";
import { Cardtoko } from "../components/molecules/dashboard/card-toko";
import { Cardkategori } from "../components/molecules/dashboard/card-kategori";
import Datakategori from "../components/organisms/dashboard/datakategori";
const Playground = () => {
  return (
    <div className="bg-white">
      <Sidebar />
      <Carduser />
      <Cardproduk />
      <Cardtoko />
      <Datakategori />
    </div>
  );
};

export default Playground;
