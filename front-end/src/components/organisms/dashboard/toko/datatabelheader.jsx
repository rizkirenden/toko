import React, { useState } from "react";
import { Tableheader } from "../../../molecules/dashboard/toko/tableheader";
import useTokoStore from "../../../../store/tokoStore";
import { Forminput } from "../../../molecules/dashboard/toko/forminput";

const Datatabelheader = ({ onRefresh }) => {
  const [search, setSearch] = useState("");
  const { fetchTokos } = useTokoStore();
  const [showFormInput, setShowFormInput] = useState(false);

  const handleSearch = (value) => {
    setSearch(value);
    fetchTokos({
      page: 1,
      limit: 5,
      search: value,
    });
  };

  return (
    <>
      <Tableheader
        title="Data Toko"
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
