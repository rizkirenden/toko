import React, { useState } from "react";
import { Sidebar } from "../../components/molecules/dashboard/sidebar";
import Datatabel from "../../components/organisms/dashboard/produk/datatabel";
import Datatabelheader from "../../components/organisms/dashboard/produk/datatabelheader";
import Datatabelfooter from "../../components/organisms/dashboard/produk/datatabelfooter";

const ProdukLayout = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 px-4 py-6">
        {" "}
        <Datatabelheader />
        <Datatabel page={page} limit={limit} />
        <Datatabelfooter currentPage={page} onPageChange={handlePageChange} />
      </main>
    </div>
  );
};

export default ProdukLayout;
