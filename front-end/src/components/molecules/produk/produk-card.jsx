import React, { useState } from "react";

export const Produkcardproduk = ({
  nama_toko,
  nama_kategori,
  name,
  harga,
  deskripsi_bahan,
  gambar_product,
  video_product,
  status,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl w-full h-full max-w-sm mx-auto bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] border border-[#A0C878]/20 hover:border-[#A0C878]/50 transition-all duration-500 shadow-[0_0_15px_rgba(160,200,120,0.1)] hover:shadow-[0_0_25px_rgba(160,200,120,0.3)]"
      onMouseEnter={() => {
        setShowVideo(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setShowVideo(false);
        setIsHovered(false);
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgxNjAsMjAwLDEyMCwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] rounded-2xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-30" : "opacity-10"
        }`}
      ></div>

      {/* Glow Border */}
      <div
        className={`absolute inset-0 rounded-2xl pointer-events-none transition-all duration-700 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 rounded-2xl bg-[#A0C878]/10 border border-[#A0C878]/30 box-content"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col p-4">
        {/* Media */}
        <div className="relative overflow-hidden rounded-xl bg-[#0a0a0a] aspect-video mb-3 flex items-center justify-center border border-[#A0C878]/20 group-hover:border-[#A0C878]/50 transition-all duration-500">
          {showVideo && video_product ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
            >
              <source
                src={`http://localhost:3000/uploads/${video_product}`}
                type="video/mp4"
              />
            </video>
          ) : gambar_product ? (
            <img
              src={`http://localhost:3000/uploads/${gambar_product}`}
              alt={name}
              className="w-full h-full object-cover brightness-90 group-hover:brightness-110 transition-all duration-500"
            />
          ) : (
            <div className="text-center p-4">
              <div className="inline-block p-4 rounded-full bg-[#1a1a1a] border border-dashed border-[#A0C878]/30 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#A0C878]/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium text-[#A0C878]/70">
                PRODUCT IMAGE
              </span>
            </div>
          )}

          {/* Status */}
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md flex items-center ${
              status === "active"
                ? "bg-[#A0C878]/20 text-[#DDEB9D] border border-[#A0C878]/50"
                : "bg-gray-800/80 text-gray-400 border border-gray-600/50"
            }`}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                status === "active"
                  ? "bg-[#A0C878] animate-pulse"
                  : "bg-gray-500"
              }`}
            ></span>
            {status.toUpperCase()}
          </div>

          {video_product && (
            <div className="absolute bottom-3 right-3 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full p-2 border border-[#A0C878]/30 group-hover:border-[#A0C878]/60 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#DDEB9D] group-hover:text-[#A0C878] transition-colors duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-base font-semibold text-[#FAF6E9] mb-1 group-hover:text-[#DDEB9D] transition-colors duration-300 tracking-wide line-clamp-2">
            {name}
          </h3>
          <p className="text-sm text-[#A0C878]/80 mb-2 line-clamp-2 font-light leading-snug">
            {deskripsi_bahan}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="px-2 py-1 rounded-full bg-[#0a0a0a] text-xs text-[#A0C878]/80 border border-[#A0C878]/20 truncate">
                <span className="font-medium text-[#DDEB9D]">
                  STORE: {nama_toko}
                </span>
              </div>
              <div className="px-2 py-1 rounded-full bg-[#0a0a0a] text-xs text-[#A0C878]/80 border border-[#A0C878]/20 truncate">
                <span className="font-medium text-[#DDEB9D]">
                  CAT: {nama_kategori}
                </span>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[#A0C878]/10 group-hover:border-[#A0C878]/30 transition-all duration-500">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-[#A0C878]/60">
                  PRICE
                </span>
                <span className="text-xs px-2 py-1 rounded bg-[#A0C878]/10 text-[#DDEB9D] border border-[#A0C878]/20">
                  IDR
                </span>
              </div>
              <p className="text-lg font-bold text-[#DDEB9D] mt-1">
                {typeof harga === "number"
                  ? harga.toLocaleString("id-ID")
                  : harga}
              </p>
            </div>
          </div>
        </div>

        {/* Brackets */}
        <div
          className={`absolute inset-0 pointer-events-none overflow-hidden rounded-2xl ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#A0C878] rounded-tl"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#A0C878] rounded-tr"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#A0C878] rounded-bl"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#A0C878] rounded-br"></div>
        </div>
      </div>
    </div>
  );
};
