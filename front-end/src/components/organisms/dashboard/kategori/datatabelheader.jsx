import React, { useState } from "react";
import { Tabelheader } from "../../../molecules/dashboard/kategori/tabelheader";
import useCategoryStore from "../../../../store/categoryStore";

const Datatabelheader = () => {
  const [search, setSearch] = useState("");
  const { fetchCategoriesData } = useCategoryStore();

  const handleSearch = (value) => {
    setSearch(value);
    fetchCategoriesData({
      page: 1,
      limit: 5,
      search: value,
    });
  };
  return (
    <Tabelheader
      title="Data Kategori"
      searchValue={search}
      onSearch={handleSearch}
    />
  );
};

export default Datatabelheader;
