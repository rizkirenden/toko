import React, { useState } from "react";
import { Tableheader } from "../../../molecules/dashboard/toko/tableheader";
import useTokoStore from "../../../../store/tokoStore";

const Datatabelheader = () => {
  const [search, setSearch] = useState("");
  const { fetchTokos } = useTokoStore();

  const handleSearch = (value) => {
    setSearch(value);
    fetchTokos({
      page: 1,
      limit: 5,
      search: value,
    });
  };

  return (
    <Tableheader
      title="Data Toko"
      searchValue={search}
      onSearch={handleSearch}
    />
  );
};

export default Datatabelheader;
