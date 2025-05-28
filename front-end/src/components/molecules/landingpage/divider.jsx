import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";

export const Divider = ({ skew = true }) => {
  const repeatedText = Array(20).fill("HAPPINESS");

  return (
    <Card
      className={`relative bg-[#DDEB9D] w-full h-16 overflow-hidden ${
        skew ? "transform -skew-y-3" : ""
      }`}
    >
      <div className="absolute inset-0 flex items-center whitespace-nowrap">
        <div className="marquee flex">
          {repeatedText.map((text, i) => (
            <span key={`1-${i}`} className="inline-block mr-8">
              <Tittle className="text-white text-lg font-bold">{text}</Tittle>
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};
