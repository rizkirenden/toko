import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6"
      style={{ backgroundColor: "#FAF6E9" }}
    >
      <h1
        className="text-8xl font-extrabold mb-6"
        style={{ color: "#A0C878", textShadow: "2px 2px #DDEB9D" }}
      >
        404
      </h1>
      <h2
        className="text-3xl font-semibold mb-4 text-center max-w-lg"
        style={{ color: "#5A7243" }}
      >
        Halaman Tidak Ditemukan
      </h2>
      <p
        className="mb-12 text-center max-w-md text-lg"
        style={{ color: "#5A7243" }}
      >
        Maaf, halaman yang kamu cari tidak tersedia. Yuk kembali ke toko kue dan
        nikmati aneka kue lezat kami!
      </p>

      {/* Floating Cake SVG */}
      <div className="relative w-40 h-40 mb-12">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1728/1728784.png"
          alt="Cake"
          className="w-full h-full object-contain drop-shadow-lg"
          style={{ animation: "floatUpDown 4s ease-in-out infinite" }}
        />

        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-3 rounded-full bg-[#A0C878] opacity-30 filter blur-sm"
          style={{ filter: "blur(8px)" }}
        />
      </div>

      {/* Tombol Kembali */}
      <button
        onClick={() => navigate(-1)}
        className="px-6 py-3 bg-[#A0C878] text-white rounded-full shadow-lg hover:bg-[#94b36b] transition-colors duration-300"
      >
        Kembali
      </button>

      <style>{`
        @keyframes floatUpDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
