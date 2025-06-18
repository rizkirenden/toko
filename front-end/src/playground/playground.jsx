import React from "react";
import { Sidebar } from "../components/molecules/dashboard/sidebar";
import Datakategori from "../components/organisms/dashboard/datakategori";
import Dataproduk from "../components/organisms/dashboard/dataproduk";
import Datauser from "../components/organisms/dashboard/datauser";
import Datatoko from "../components/organisms/dashboard/datatoko";
const Playground = () => {
  return (
    <div className="bg-white">
      <Sidebar />
      <Datatoko />
      <Datakategori />
      <Dataproduk />
      <Datauser />
    </div>
  );
};

export default Playground;
