import React, { useState } from "react";
import { Tabelheader } from "../../../molecules/dashboard/produk/tabelheader";
import useProdukStore from "../../../../store/produkStore";
import { Forminput } from "../../../molecules/dashboard/produk/forminput";
const Datatabelheader = ({ onRefresh }) => {
  const [search, setSearch] = useState("");
  const { fetchProduksData } = useProdukStore();
  const [showFormInput, setShowFormInput] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
    fetchProduksData({
      page: 1,
      limit: 5,
      search: value,
    });
  };

  return (
    <>
      <Tabelheader
        title="Data Produk"
        searchValue={search}
        onSearch={handleSearch}
        renderAction={
          <button
            onClick={() => setShowFormInput(true)}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            + Tambah Produk
          </button>
        }
      />

      {showFormInput && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-lg w-full">
            <Forminput
              onSuccess={() => {
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
