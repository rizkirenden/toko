import React from "react";
import { Card } from "../../atoms/card";
import { VscFolderLibrary } from "react-icons/vsc";
import { Subtittle } from "../../atoms/subtittle";

export const Cardkategori = ({ total }) => {
  return (
    <div>
      <Card className="w-full h-full rounded-2xl px-2 py-4 bg-[#A0C878] ">
        <div className="flex flex-col items-center text-white space-y-2">
          <VscFolderLibrary className="text-white text-4xl" />
          <div className="text-lg font-semibold">{total}</div>
          <Subtittle className="text-white">Total Kategori</Subtittle>
        </div>
      </Card>
    </div>
  );
};
