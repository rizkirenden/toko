import React from "react";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";

export const Content = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center mb-8 px-4">
      <img
        src="/assets/logo.png"
        alt="Logo"
        className="w-32 sm:w-40 md:w-48 object-contain transition-transform duration-300 hover:scale-105"
      />
      <Tittle className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
        Selamat Datang
      </Tittle>
      <Subtittle className="text-lg md:text-xl text-white opacity-90">
        Silakan masuk untuk melanjutkan
      </Subtittle>
    </div>
  );
};
