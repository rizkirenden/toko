import React, { useState } from "react";
import { Tabelheader } from "../../../molecules/dashboard/produk/tabelheader";
import useProdukStore from "../../../../store/produkStore";

const Datatabelheader = () => {
  const [search, setSearch] = useState("");
  const { fetchProduksData } = useProdukStore();

  const handleSearch = (value) => {
    setSearch(value);
    fetchProduksData({
      page: 1,
      limit: 5,
      search: value,
    });
  };

  return (
    <Tabelheader
      title="Data Produk"
      searchValue={search}
      onSearch={handleSearch}
    />
  );
};

export default Datatabelheader;
