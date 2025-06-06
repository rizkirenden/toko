import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";
import { Button } from "../../atoms/button";
import { TiShoppingCart } from "react-icons/ti";

export const Tokocard = ({
  namaToko,
  namaPemilik,
  alamatToko,
  toko_logo,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Card className="relative flex flex-col h-40 w-28 items-center px-3 pb-6 pt-3 bg-[#A0C878]/90 backdrop-blur-md text-white rounded-md shadow-xl overflow-visible">
        <Button
          onClick={onClick}
          className="absolute -bottom-3 -right-3 p-2 rounded-full bg-white border-2 border-[#A0C878] text-[#A0C878] font-semibold shadow-md hover:bg-[#A0C878] hover:text-white transition"
        >
          <TiShoppingCart size={18} />
        </Button>
        <img
          src={toko_logo}
          alt="Logo Toko"
          className="w-16 h-16 object-cover rounded-full border-2 border-white mb-2"
        />
        <Tittle className="text-2xl font-extrabold text-white mb-3 border-b-4 border-white pb-1 text-center truncate">
          {namaToko}
        </Tittle>
        <Subtittle className="text-sm text-white mb-1 text-center truncate">
          <span className="font-semibold">{namaPemilik}</span>
        </Subtittle>
        <Subtittle className="text-sm text-white mb-1 text-center truncate">
          <span className="font-semibold">{alamatToko}</span>
        </Subtittle>
      </Card>
    </div>
  );
};
