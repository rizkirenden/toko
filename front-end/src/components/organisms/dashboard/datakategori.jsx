import React, { useEffect } from "react";
import useCategoryStore from "../../../store/categoryStore";
import { Cardkategori } from "../../molecules/dashboard/card-kategori";

const Datakategori = () => {
  const { categories, loading, error, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  return (
    <div>
      <Cardkategori total={categories.length} />
    </div>
  );
};

export default Datakategori;
