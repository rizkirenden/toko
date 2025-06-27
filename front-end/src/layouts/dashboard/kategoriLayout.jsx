import React, { useState } from "react";

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
    <div>
      <Datatabelheader />
      <Datatabel page={page} limit={limit} />
      <Datatabelfooter currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default KategoriLayout;
