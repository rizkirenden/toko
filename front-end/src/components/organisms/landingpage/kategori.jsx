import React, { useEffect } from "react";
import { Menucard } from "../../molecules/landingpage/menu-card";
import useCategoryStore from "../../../store/categoryStore";

const Kategori = () => {
  const { categories, loading, error, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="flex flex-wrap p-4 justify-start">
      {categories.map((category, index) => (
        <div
          key={category.id || category._id}
          className={`relative ${index !== 0 ? "-ml-5" : ""} z-[${
            categories.length - index
          }]`}
        >
          <Menucard nameCategory={category.name} />
        </div>
      ))}
    </div>
  );
};

export default Kategori;
