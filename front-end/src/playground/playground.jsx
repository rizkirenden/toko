import React from "react";
import { Cardkategori } from "../components/molecules/dashboard/card-kategori";
import { Cardproduk } from "../components/molecules/dashboard/card-produk";
import { Cardtoko } from "../components/molecules/dashboard/card-toko";
import { Carduser } from "../components/molecules/dashboard/card-user";
const Playground = () => {
  return (
    <div>
      <Cardkategori />
      <Cardproduk />
      <Cardtoko />
      <Carduser />
    </div>
  );
};

export default Playground;
