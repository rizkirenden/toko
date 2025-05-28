import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";

export const Menucard = ({ nameCategory, nameDescription }) => {
  return (
    <Card className="bg-[#A0C878] text-white px-4 py-3 rounded-tl-none rounded-bl-none rounded-tr-none rounded-br-full shadow-md w-32 h-96">
      <Tittle className="text-lg font-bold truncate">{nameCategory}</Tittle>
      <Subtittle className="text-sm truncate">{nameDescription}</Subtittle>
    </Card>
  );
};
