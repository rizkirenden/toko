import React from "react";
import { Card } from "../../atoms/card";
// Pastikan file/logo ini ada

export const Footercard = () => {
  return (
    <Card className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-none">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-lg font-semibold">BaVerse</span>
        </div>

        {/* Kanan: Reserved Text */}
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Reserved BaVerse
        </div>
      </div>
    </Card>
  );
};
