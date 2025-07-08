import React, { useState } from "react";
import { Tabelheader } from "../../../molecules/dashboard/kategori/tabelheader";
import useCategoryStore from "../../../../store/categoryStore";
import { Forminput } from "../../../molecules/dashboard/kategori/forminput";
const Datatabelheader = ({ onRefresh }) => {
  const [search, setSearch] = useState("");
  const { fetchCategoriesData } = useCategoryStore();
  const [showFormInput, setShowFormInput] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
    fetchCategoriesData({
      page: 1,
      limit: 5,
      search: value,
    });
  };

  return (
    <>
      <Tabelheader
        title="Data Kategori"
        searchValue={search}
        onSearch={handleSearch}
        renderAction={
          <button
            onClick={() => setShowFormInput(true)}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            + Tambah Toko
          </button>
        }
      />

      {showFormInput && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-lg w-full">
            <Forminput
              onSuces={() => {
                setShowFormInput(false);
                onRefresh?.();
              }}
              onClose={() => setShowFormInput(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Datatabelheader;
