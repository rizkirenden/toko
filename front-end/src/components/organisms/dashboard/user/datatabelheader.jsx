import React, { useState } from "react";
import { Tabelheader } from "../../../molecules/dashboard/user/tabelheader";
import useUserStore from "../../../../store/userStore";

const Datatabelheader = () => {
  const [search, setSearch] = useState("");
  const { fetchUsers } = useUserStore();

  const handleSearch = (value) => {
    setSearch(value);
    fetchUsers({
      page: 1,
      limit: 5,
      search: value,
    });
  };
  return (
    <Tabelheader
      title="Data Users"
      searchValue={search}
      onSearch={handleSearch}
    />
  );
};

export default Datatabelheader;
