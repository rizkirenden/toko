import React from "react";
import { Tabelfooter } from "../../../molecules/dashboard/user/tabelfooter";
import useUserStore from "../../../../store/userStore";
const Datatabelfooter = ({ currentPage, onPageChange }) => {
  const { total } = useUserStore();
  const limit = 5;
  const totalPages = Math.ceil(total / limit);

  return (
    <Tabelfooter
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
};

export default Datatabelfooter;
