import React from "react";
import { Tabelfooter } from "../../../molecules/dashboard/kategori/tabelfooter";
import useCategoryStore from "../../../../store/categoryStore";

const Datatabelfooter = ({ currentPage, onPageChange }) => {
  const { total } = useCategoryStore();
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
