import React from "react";

export const Tittle = ({ level = 1, className = "", children }) => {
  const Tag = `h${level}`;

  return <Tag className={className}>{children}</Tag>;
};
