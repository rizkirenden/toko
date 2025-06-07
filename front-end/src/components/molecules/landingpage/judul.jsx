import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";

export const Judul = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-[#A0C878]/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <Card className="relative overflow-hidden bg-gradient-to-r from-[#DDEB9D] via-[#A0C878] to-[#DDEB9D] p-[2px] rounded-full group">
        <div className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] rounded-full px-8 py-3">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-full border-[1.5px] border-transparent group-hover:border-[#A0C878] group-hover:animate-[pulse_2s_infinite] pointer-events-none"></div>

          {/* Main title */}
          <Tittle className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDEB9D] via-[#A0C878] to-[#DDEB9D] font-bold text-xl tracking-wider text-center uppercase">
            {children}
          </Tittle>

          {/* Decorative elements */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A0C878] animate-pulse"></div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A0C878] animate-pulse delay-300"></div>

          {/* Hover effect triangles */}
          <div className="absolute left-0 top-0 w-3 h-3 border-l-2 border-t-2 border-[#A0C878] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute right-0 top-0 w-3 h-3 border-r-2 border-t-2 border-[#A0C878] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute left-0 bottom-0 w-3 h-3 border-l-2 border-b-2 border-[#A0C878] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute right-0 bottom-0 w-3 h-3 border-r-2 border-b-2 border-[#A0C878] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </Card>

      {/* Optional: Animated dots trail */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-[#A0C878] opacity-0 group-hover:opacity-100"
            style={{ animation: `fadeIn 0.3s ${i * 0.1}s forwards` }}
          ></div>
        ))}
      </div>
    </div>
  );
};
