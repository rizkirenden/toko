import React, { useState } from "react";
import Datatabelheader from "../../components/organisms/dashboard/toko/datatabelheader";
import Datatabel from "../../components/organisms/dashboard/toko/datatabel";
import Datatabelfooter from "../../components/organisms/dashboard/toko/datatabelfooter";
import { Sidebar } from "../../components/molecules/dashboard/sidebar";
const TokoLayout = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="space">
      <Datatabelheader />
      <Datatabel page={page} limit={limit} />
      <Datatabelfooter currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default TokoLayout;
