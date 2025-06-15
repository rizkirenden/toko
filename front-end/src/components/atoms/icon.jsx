import React from "react";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import { FaSearchengin } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiBuildingStorefront } from "react-icons/hi2";
import { LuBaggageClaim } from "react-icons/lu";
import { VscFolderLibrary } from "react-icons/vsc";
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
    kategori: <VscFolderLibrary size={size} color={color} />,
  };

  return icons[name] || null;
};
