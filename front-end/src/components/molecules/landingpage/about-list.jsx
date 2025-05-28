import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";

export const Aboutlist = () => {
  const data = [
    { number: 1, title: "Berpengalaman" },
    { number: 2, title: "Layanan Profesional" },
    { number: 3, title: "Teknologi Terbaru" },
    { number: 4, title: "Tim Ahli" },
    { number: 5, title: "Harga Kompetitif" },
    { number: 6, title: "Respons Cepat" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-6 text-xs sm:text-sm">
      <div className="flex flex-col gap-6">
        {data.slice(0, 3).map((item) => (
          <Card
            key={item.number}
            className="relative bg-[#A0C878] w-auto h-20 rounded-tl-full rounded-br-full shadow-md overflow-hidden"
          >
            <div className="absolute top-2 left-2">
              <Card className="flex items-center justify-center bg-yellow-200 text-white w-6 h-6 rounded-full text-sm font-bold shadow">
                {item.number}
              </Card>
            </div>
            <div className="flex items-center justify-center h-full">
              <Tittle className="text-white font-bold text-center">
                {item.title}
              </Tittle>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {data.slice(3).map((item) => (
          <Card
            key={item.number}
            className="relative bg-[#A0C878] w-auto h-20 rounded-tl-full rounded-br-full shadow-md overflow-hidden"
          >
            <div className="absolute top-2 left-2">
              <Card className="flex items-center justify-center bg-yellow-200 text-white w-6 h-6 rounded-full text-sm font-bold shadow">
                {item.number}
              </Card>
            </div>
            <div className="flex items-center justify-center h-full">
              <Tittle className="text-white font-bold text-center">
                {item.title}
              </Tittle>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
