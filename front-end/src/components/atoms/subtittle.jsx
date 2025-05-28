import React from "react";

export const Subtittle = ({ clasName = "", children }) => {
  return <p className={`${clasName}`}>{children}</p>;
};
