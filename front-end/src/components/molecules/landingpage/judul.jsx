import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";

export const Judul = ({ children }) => {
  return (
    <Card className="relative bg-[#DDEB9D] w-32 h-10  overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-[#A0C878] flex items-center justify-center">
        <Tittle className="text-[#FFFDF6] text-center">{children}</Tittle>
      </div>
      <div className="absolute inset-y-0 right-0 w-16 overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            fill="#FFFDF6"
            d={`
    M100 0
    C50 35, 50 65, 100 100
    C70 65, 70 35, 100 0
    Z
  `}
          />
        </svg>
      </div>
    </Card>
  );
};
