import React, { useState } from "react";
import { Sidebar } from "../../components/molecules/dashboard/sidebar";
import Datatabelheader from "../../components/organisms/dashboard/kategori/datatabelheader";
import Datatabel from "../../components/organisms/dashboard/kategori/datatabel";
import Datatabelfooter from "../../components/organisms/dashboard/kategori/datatabelfooter";
const KategoriLayout = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar tetap (optional, jika layout ini berdiri sendiri) */}
      <Sidebar />

      <main className="flex-1 md:ml-64 px-4 py-6">
        <Datatabelheader />
        <Datatabel page={page} limit={limit} />
        <Datatabelfooter currentPage={page} onPageChange={handlePageChange} />
      </main>
    </div>
  );
};

export default KategoriLayout;
