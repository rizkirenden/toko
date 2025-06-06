import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";

export const Categorycard = ({ nameCategory }) => {
  return (
    <Card className="relative bg-[#A0C878] text-white items-center text-left py-6 pl-1 rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-full shadow-md w-24 h-auto overflow-hidden">
      {/* Wave SVG di atas */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-none"
        style={{ height: "40px" }}
      >
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 28"
        >
          <path
            d="M0,16 C150,30 350,0 600,16 C850,32 1050,16 1200,16 L1200,0 L0,0 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <Tittle className="text-lg font-bold truncate mt-2">
        {nameCategory}
      </Tittle>
      <Tittle>dsdsa</Tittle>
    </Card>
  );
};
