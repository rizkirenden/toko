import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";

export const Aboutlist = ({
  cardWidth = "w-auto",
  cardHeight = "h-20",
  textSize = "text-sm", // default text size
}) => {
  const data = [
    { number: 1, title: "Pengalaman" },
    { number: 2, title: "Profesional" },
    { number: 3, title: "Inovasi" },
    { number: 4, title: "Ahli" },
    { number: 5, title: "Terjangkau" },
    { number: 6, title: "Responsif" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 text-xs sm:text-sm">
      {[0, 1].map((col) => (
        <div className="flex flex-col gap-6" key={col}>
          {data.slice(col * 3, col * 3 + 3).map((item) => (
            <Card
              key={item.number}
              className={`relative bg-[#A0C878] ${cardWidth} ${cardHeight} rounded-tl-full rounded-br-full shadow-md overflow-hidden`}
            >
              <div className="absolute top-2 left-2">
                <Card className="flex items-center justify-center bg-yellow-200 text-white w-6 h-6 rounded-full text-sm font-bold shadow">
                  {item.number}
                </Card>
              </div>
              <div className="flex items-center justify-center h-full">
                <Tittle
                  className={`text-white font-bold text-center ${textSize}`}
                >
                  {item.title}
                </Tittle>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
