import React, { useState } from "react";
import { Navitem } from "../../atoms/navitem";
import { Icon } from "../../atoms/icon";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          </nav>

          <div className="mt-auto text-center text-xs text-white/50">
            © 2025 MyApp
          </div>
        </div>
      </div>

      <nav
        className="
          hidden md:flex fixed top-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-xl 
          border-b border-white/20 shadow-xl z-40 items-center px-8 gap-6
        "
      >
        <img
          src="/assets/logo.png"
          alt="logo"
          className="h-10 drop-shadow-xl"
        />

        <div className="flex gap-6 ml-8">
          <Navitem
            label="Dashboard"
            href="/dashboard"
            icon={<Icon name="dashboard" />}
          />
          <Navitem label="Toko" href="/datatoko" icon={<Icon name="toko" />} />
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
        </div>
      </nav>
    </>
  );
};
