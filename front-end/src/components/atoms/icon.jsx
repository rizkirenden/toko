import React from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { GiShop } from "react-icons/gi";
import { FaSearchengin } from "react-icons/fa";
import { MdDashboard, MdCategory, MdRestaurantMenu } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { LuBaggageClaim } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { IoLogOut, IoLogIn, IoAppsOutline } from "react-icons/io5";

export const Icon = ({ name, size = 20, color = "white" }) => {
  const icons = {
    home: <RiHomeSmileFill size={size} color={color} />,
    menu: <MdRestaurantMenu size={size} color={color} />,
    shop: <GiShop size={size} color={color} />,
    login: <IoLogIn size={size} color={color} />,
    search: <FaSearchengin size={size} color={color} />,
    dashboard: <MdDashboard size={size} color={color} />,
    toko: <HiBuildingStorefront size={size} color={color} />,
    produk: <LuBaggageClaim size={size} color={color} />,
    kategori: <MdCategory size={size} color={color} />,
    user: <FaUsers size={size} color={color} />,
    logout: <IoLogOut size={size} color={color} />,
    sidebar: <IoAppsOutline size={size} color={color} />,
  };

  return icons[name] || null;
};
