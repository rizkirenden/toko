import React from "react";
import { Card } from "../../atoms/card";
import { VscFolderLibrary } from "react-icons/vsc";
import { Subtittle } from "../../atoms/subtittle";

export const Cardkategori = ({ total }) => {
  return (
    <div className="p-8">
      <Card className="w-full bg-[#A0C878] h-full rounded-lg px-4 py-8">
        <div className="flex flex-col items-center text-white space-y-2">
          <VscFolderLibrary className="text-white text-4xl" />
          <div className="text-lg font-semibold">{total}</div>
          <Subtittle className="text-white">Total Kategori Produk</Subtittle>
        </div>
      </Card>
    </div>
  );
};
