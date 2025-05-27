import React from "react";

export const Navitem = ({
  label,
  href = "#",
  icon,
  text,
  active = false,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md ${text} hover:bg-[#DDEB9D] ${
        active ? "bg-[#DDEB9D] font-semibold" : ""
      }`}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
    </a>
  );
};
