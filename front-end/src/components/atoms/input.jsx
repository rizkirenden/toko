import React from "react";

export const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  className = "",
  ...rest
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A0C878] ${className}`}
      {...rest}
    />
  );
};
