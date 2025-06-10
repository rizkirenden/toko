import React from "react";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";

export const Header = () => {
  return (
    <div className="flex flex-col">
      <img src="/assets/logo.png" alt="Logo" className="" />
      <div>
        {" "}
        <Tittle className="text-xl font-bold">Selamat Datang</Tittle>
      </div>
      <div>
        <Subtittle></Subtittle>
      </div>
    </div>
  );
};
