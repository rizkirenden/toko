import React from "react";
import { Card } from "../../../atoms/card";
import { SearchInput } from "../../../atoms/search-input";
import { Selectbox } from "../../../atoms/select-box";
import { Navitem } from "../../../atoms/navitem";

export const Tableheader = ({
  title,
  searchValue,
  onSearch,
  filterValue,
  onFilterChange,
  filterOptions = [],
}) => {
  return (
    <Card className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <h1 className="text-xl font-bold">{title}</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
        <SearchInput
          value={searchValue}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Cari data..."
          className="w-full md:w-48"
        />

        {filterOptions.length > 0 && (
          <Selectbox
            value={filterValue}
            onChange={(e) => onFilterChange(e.target.value)}
            options={filterOptions.map((opt) => opt.label)}
          />
        )}
      </div>
    </Card>
  );
};
