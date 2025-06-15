import React from "react";

export const Navitem = ({ label, href, icon, active = false, text = "" }) => {
  return (
    <a
      href={href}
      className={`flex flex-col items-center gap-1 ${
        active ? "text-yellow-200" : "text-white"
      } hover:text-yellow-100 transition duration-200`}
    >
      {icon}
      <span className={`${text}`}>{label}</span>
    </a>
  );
};
