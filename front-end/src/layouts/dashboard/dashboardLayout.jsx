import React from "react";
import { Sidebar } from "../../components/molecules/dashboard/sidebar";
import Datauser from "../../components/organisms/dashboard/datauser";
import Datatoko from "../../components/organisms/dashboard/datatoko";
import Datakategori from "../../components/organisms/dashboard/datakategori";
import Dataproduk from "../../components/organisms/dashboard/dataproduk";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 md:ml-64 px-4 py-6">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Datauser />
            <Datatoko />
            <Datakategori />
            <Dataproduk />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
