import React from "react";

export const Card = ({ className = "", style, children }) => {
  return <div className={` ${className}, ${style}`}>{children}</div>;
};
