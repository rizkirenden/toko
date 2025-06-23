import React from "react";
import { Card } from "../../../atoms/card";
import { SearchInput } from "../../../atoms/search-input";

export const Tableheader = ({ title, searchValue, onSearch }) => {
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
      </div>
    </Card>
  );
};
