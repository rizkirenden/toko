import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";
import { useNavigate } from "react-router-dom";

export const Categorycard = ({ nameCategory, descriptionCategory }) => {
  const navigate = useNavigate();
  return (
    <div className="group relative w-48 h-48 perspective-1000">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#A0C878]/30 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <Card className="relative h-full w-full bg-gradient-to-br from-[#A0C878] to-[#DDEB9D] p-1 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
        {/* Wave top */}
        <div className="absolute top-0 left-0 w-full h-10 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#FAF6E9"
              opacity="0.25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#FAF6E9"
              opacity="0.5"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#FAF6E9"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end p-5 bg-gradient-to-t from-black/20 to-transparent rounded-2xl">
          <Tittle className="text-2xl font-bold text-white mb-2 drop-shadow-md">
            {nameCategory}
          </Tittle>
          <Subtittle className="text-sm text-white/80 mb-4 line-clamp-2">
            {descriptionCategory}
          </Subtittle>

          {/* Animated button */}
          <button
            onClick={() => navigate("/produk")}
            className="self-start px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Card>
    </div>
  );
};
