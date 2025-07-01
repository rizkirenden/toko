import React, { useEffect, useState } from "react";
import { Tabeldata } from "../../../molecules/dashboard/kategori/tabeldata";
import useCategoryStore from "../../../../store/categoryStore";
import { Formedit } from "../../../molecules/dashboard/kategori/formedit";

const Datatabel = ({ page, limit }) => {
  const { categoriesData, fetchCategoriesData, deleteCategory } =
    useCategoryStore();
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategoriesData({ page, limit });
  }, [page, limit, fetchCategoriesData]);

  const handleEdit = (category) => {
    setSelectedCategory(category);
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus kategori ini?");
    if (!konfirmasi) return;
    try {
      await deleteCategory(id);
      fetchCategoriesData({ page, limit });
      alert("Kategori berhasil dihapus");
    } catch (err) {
      alert("Gagal menghapus kategori:" + err);
    }
  };
  return (
    <div className="space-y-4">
      <Tabeldata
        data={categoriesData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-lg w-full">
            <Formedit
              category={selectedCategory}
              onClose={() => {
                setSelectedCategory(null);
                fetchCategoriesData({ page, limit });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Datatabel;
