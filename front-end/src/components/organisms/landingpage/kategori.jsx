import React, { useEffect } from "react";
import { Categorycard } from "../../molecules/landingpage/category-card";
import useCategoryStore from "../../../store/categoryStore";
import { Judul } from "../../molecules/landingpage/judul";
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
    <div>
      <div className="flex items-center justify-center mb-5">
        <Judul>Kategori</Judul>
      </div>
      <div className="overflow-x-auto w-full no-scrollbar">
        <div className="flex relative w-max px-5">
          {categories.map((category, index) => (
            <div
              key={category.id || category._id}
              className={`relative ${index !== 0 ? "-ml-5" : ""} z-[${
                categories.length - index
              }]`}
            >
              <Categorycard
                nameCategory={category.name}
                descriptionCategory={category.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kategori;
