import React from "react";

export const Navitem = ({
  label,
  href,
  icon,
  active = false,
  text = "",
  color = "text-white",
  activeColor = "text-yellow-200",
  hoverColor = "hover:text-yellow-100",
}) => {
  const textColor = active ? activeColor : color;

  return (
    <a
      href={href}
      className={`flex flex-col items-center gap-1 ${textColor} ${hoverColor} transition duration-200`}
    >
      {icon}
      <span className={text}>{label}</span>
    </a>
  );
};
