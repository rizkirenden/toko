import React, { useState } from "react";
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
    <div>
      <Datatabelheader />
      <Datatabel page={page} limit={limit} />
      <Datatabelfooter currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default ProdukLayout;
