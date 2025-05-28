import React from "react";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";
export const Introduction = () => {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen overflow-hidden">
      <video
        src="/assets/introduction.mp4"
        className="w-screen h-screen object-cover shadow-lg"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-60 pointer-events-none" />

      <div className="absolute z-10 text-center animate-fade-in">
        <Tittle
          level={3}
          className="text-5xl md:text-7xl font-extrabold text-[#A0C878] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] tracking-wide"
        >
          Sweetness in every bite
        </Tittle>
        <Subtittle clasName="text-xl italic font-light md:text-2xl mt-2 text-[#DDEB9D] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] tracking-wide">
          Freshly baked happiness, every day.
        </Subtittle>
      </div>
    </div>
  );
};
