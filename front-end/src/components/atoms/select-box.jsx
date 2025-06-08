// src/components/atoms/SelectBox.jsx
import React from "react";

export const Selectbox = ({ options, value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="px-4 py-2 border border-[#A0C878] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDEB9D]"
  >
    <option value="">Semua</option>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
