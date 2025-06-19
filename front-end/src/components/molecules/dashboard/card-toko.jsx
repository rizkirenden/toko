import React from "react";
import { Card } from "../../atoms/card";
import { Subtittle } from "../../atoms/subtittle";
import { HiBuildingStorefront } from "react-icons/hi2";

export const Cardtoko = ({ total }) => {
  return (
    <div>
      <Card className="w-full h-full rounded-2xl px-2 py-4 bg-[#A0C878] ">
        <div className="flex flex-col items-center text-white space-y-2">
          <HiBuildingStorefront className="text-white text-4xl" />
          <div className="text-lg font-semibold">{total}</div>
          <Subtittle className="text-white">Total Kategori Produk</Subtittle>
        </div>
      </Card>
    </div>
  );
};
