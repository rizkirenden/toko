// src/components/atoms/InputText.jsx
import React from "react";

export const Inputtext = ({ value, onChange, placeholder }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className="px-4 py-2 border border-[#A0C878] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDEB9D]"
  />
);
