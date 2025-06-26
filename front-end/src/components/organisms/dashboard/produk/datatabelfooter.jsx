import React from "react";
import { Tabelfooter } from "../../../molecules/dashboard/produk/tabelfooter";
import useProdukStore from "../../../../store/produkStore";

const Datatabelfooter = ({ currentPage, onPageChange }) => {
  const { total } = useProdukStore();
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
