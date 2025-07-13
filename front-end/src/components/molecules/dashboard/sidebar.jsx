import React, { useState } from "react";
import { Navitem } from "../../atoms/navitem";
import { Icon } from "../../atoms/icon";
import { Button } from "../../atoms/button";
import { useNavigate } from "react-router-dom";
import Authstore from "../../../store/authStore";
import { IoLogOut } from "react-icons/io5";
export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = Authstore();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      {/* Toggle untuk HP */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black md:hidden fixed top-4 left-4 z-50 bg-white/20 backdrop-blur-lg p-2 rounded-lg shadow-md hover:bg-white/30 transition"
      >
        <Icon name="sidebar" className="w-6 h-6 " color="black" />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        ></div>
      )}

      <div
        className={`
          fixed inset-y-0 left-0 z-40
          transform transition-transform duration-300
          w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-center mb-8">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-14 drop-shadow-xl"
            />
          </div>

          <nav className="flex flex-col gap-4">
            <Navitem
              label="Dashboard"
              href="/dashboard"
              icon={<Icon name="dashboard" className="text-black" />}
            />
            <Navitem
              label="Toko"
              href="/datatoko"
              icon={<Icon name="toko" />}
            />
            <Navitem
              label="Produk"
              href="/dataproduk"
              icon={<Icon name="produk" />}
            />
            <Navitem
              label="Category"
              href="/datacategory"
              icon={<Icon name="kategori" />}
            />
            <Navitem label="User" href="/user" icon={<Icon name="user" />} />

            <Button
              onClick={handleLogout}
              className="bg-red-500 text-white justify-center font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition flex items-center gap-2"
            >
              <IoLogOut className="text-lg" />
              Logout
            </Button>
          </nav>

          <div className="mt-auto text-center text-xs text-white/50">
            © 2025 MyApp
          </div>
        </div>
      </div>

      {/* Sidebar tetap (Desktop) */}
      <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:left-0 md:w-64 md:bg-white/10 md:backdrop-blur-xl md:border-r md:border-white/20 md:shadow-xl md:z-40">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-center mb-8">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="h-14 drop-shadow-xl"
            />
          </div>

          <nav className="flex flex-col gap-4">
            <Navitem
              label="Dashboard"
              href="/dashboard"
              icon={<Icon name="dashboard" />}
            />
            <Navitem
              label="Toko"
              href="/datatoko"
              icon={<Icon name="toko" />}
            />
            <Navitem
              label="Produk"
              href="/dataproduk"
              icon={<Icon name="produk" />}
            />
            <Navitem
              label="Category"
              href="/datacategory"
              icon={<Icon name="kategori" />}
            />
            <Navitem label="User" href="/user" icon={<Icon name="user" />} />
            <Button
              onClick={handleLogout}
              className="bg-red-500 text-white justify-center font-semibold py-2 px-4 rounded-md hover:bg-red-600 transition flex items-center gap-2"
            >
              <IoLogOut className="text-lg" />
              Logout
            </Button>
          </nav>

          <div className="mt-auto text-center text-xs text-white/50">
            © 2025 MyApp
          </div>
        </div>
      </div>
    </>
  );
};
