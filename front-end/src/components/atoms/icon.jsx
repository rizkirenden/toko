import React from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa";
export const Icon = ({ name, size = 20, color = "white" }) => {
  const icons = {
    home: <RiHomeSmileFill size={size} color={color} />,
    menu: <MdRestaurantMenu size={size} color={color} />,
    shop: <GiShop size={size} color={color} />,
    login: <IoLogIn size={size} color={color} />,
    search: <FaSearchengin size={size} color={color} />,
  };

  return icons[name] || null;
};
