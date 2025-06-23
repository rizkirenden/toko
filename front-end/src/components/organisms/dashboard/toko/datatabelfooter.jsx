import React from "react";
import { Tabelfooter } from "../../../molecules/dashboard/toko/tabelfooter";
import useTokoStore from "../../../../store/tokoStore";

const Datatabelfooter = ({ currentPage, onPageChange }) => {
  const { total } = useTokoStore();
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
