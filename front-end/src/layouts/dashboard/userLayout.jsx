import React, { useState } from "react";
import Datatabelheader from "../../components/organisms/dashboard/user/datatabelheader";
import Datatabel from "../../components/organisms/dashboard/user/datatabel";
import Datatabelfooter from "../../components/organisms/dashboard/user/datatabelfooter";
const UserLayout = () => {
  const [page, setPage] = useState(1);
  const limit = 5;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div className="space-y-6">
      <Datatabelheader />
      <Datatabel page={page} limit={limit} />
      <Datatabelfooter currentPage={page} onPageChange={handlePageChange} />
    </div>
  );
};

export default UserLayout;
