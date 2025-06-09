import React from "react";
import { Card } from "../../atoms/card";
import { TiShoppingCart } from "react-icons/ti";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Tokocardtoko = ({ namaToko, no_telp, alamatToko, toko_logo }) => {
  const navigate = useNavigate();

  return (
    <div className="group relative w-full h-full">
      {/* Blur background on hover */}
      <div className="absolute inset-0 bg-[#A0C878]/20 rounded-2xl blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>

      <Card className="relative h-full bg-gradient-to-br from-[#A0C878] to-[#DDEB9D] p-5 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-[#FAF6E9]/10 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FAF6E9]/10 rounded-tr-2xl"></div>

        {/* Logo */}
        <div className="relative z-10 mx-auto mb-4 w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-300">
          <img
            src={`http://localhost:3000/uploads/${toko_logo}`}
            alt="Logo Toko"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none"></div>
        </div>

        {/* Nama Toko */}
        <h3 className="relative z-10 text-xl font-bold text-center text-white mb-4 px-2 py-1 bg-[#5A7243]/30 rounded-lg backdrop-blur-sm">
          {namaToko}
        </h3>

        {/* Kontak */}
        <div className="relative z-10 space-y-3 mb-6">
          <div className="flex items-center justify-center bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
            <a
              href={`https://wa.me/${no_telp.replace(/^0/, "62")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white"
            >
              <FaWhatsapp size={16} />
              <span className="text-sm font-medium">{no_telp}</span>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
            <FaMapMarkerAlt size={16} className="text-white" />
            <span className="text-sm font-medium text-white line-clamp-1">
              {alamatToko}
            </span>
          </div>
        </div>

        {/* Tombol Arahkan ke /produk */}
        <button
          onClick={() => navigate("/produk")}
          className="relative z-10 mx-auto flex items-center justify-center p-3 bg-white text-[#5A7243] rounded-full shadow-lg transition-all duration-300 hover:bg-[#5A7243] hover:text-white hover:scale-110 hover:shadow-xl group-hover:animate-bounce"
          aria-label="Lihat produk"
        >
          <TiShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF6E9] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-[#FAF6E9] justify-center items-center text-xs font-bold text-[#5A7243]">
              +
            </span>
          </span>
        </button>

        {/* Corner border hover effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white rounded-br-lg"></div>
        </div>
      </Card>
    </div>
  );
};
