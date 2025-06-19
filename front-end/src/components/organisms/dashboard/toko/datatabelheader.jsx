import React, { useState } from "react";
import { Tableheader } from "../../../molecules/dashboard/toko/tableheader";
import useTokoStore from "../../../../store/tokoStore";

const Datatabelheader = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const { fetchTokos } = useTokoStore();

  const handleSearch = (value) => {
    setSearch(value);
    fetchTokos({ search: value, filter });
  };

  const handleFilter = (value) => {
    setFilter(value);
    fetchTokos({ search, filter: value });
  };

  return (
    <Tableheader
      title="Data Toko"
      searchValue={search}
      onSearch={handleSearch}
      filterValue={filter}
      onFilterChange={handleFilter}
    />
  );
};

export default Datatabelheader;
