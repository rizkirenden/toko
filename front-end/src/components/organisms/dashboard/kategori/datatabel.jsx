import React, { useEffect } from "react";
import { Tabeldata } from "../../../molecules/dashboard/kategori/tabeldata";
import useCategoryStore from "../../../../store/categoryStore";

const Datatabel = ({ page, limit }) => {
  const { categoriesData, fetchCategoriesData } = useCategoryStore();

  useEffect(() => {
    fetchCategoriesData({ page, limit });
  }, [page, limit, fetchCategoriesData]);

  return (
    <div className="space-y-4">
      <Tabeldata data={categoriesData} />
    </div>
  );
};

export default Datatabel;
