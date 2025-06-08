import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAF6E9]">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-[#A0C878] border-t-transparent rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="text-[#5A7243] font-semibold text-lg tracking-wide animate-pulse">
          Memuat halaman...
        </p>
      </div>
    </div>
  );
};

export default Loading;
