import React from "react";
import { Icon } from "./icon";

export const SearchInput = ({
  value,
  onChange,
  placeholder = "Cari...",
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 border rounded-full shadow-sm bg-white focus-within:ring-2 focus-within:ring-[#A0C878] ${className}`}
    >
      <Icon name="search" color="#A0C878" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full outline-none text-sm bg-transparent text-gray-700"
        {...rest}
      />
    </div>
  );
};
