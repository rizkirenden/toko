import React from "react";
import { Card } from "../../atoms/card";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWebAwesome } from "react-icons/fa6";
export const Infortmationdev = () => {
  return (
    <Card className="flex justify-between items-center w-full h-8 gap-4 bg-[#DDEB9D] px-4 ">
      <Tittle className="font-bold text-xs text-white">Developper</Tittle>
      <div className="flex gap-3">
        <a href="tel:+6287801077302" target="_blank" rel="noopener noreferrer">
          <Subtittle className="flex items-center text-xs text-[#FAF6E9] hover:text-green-700">
            <FaPhone className="text-xs text-blue-500" />
          </Subtittle>
        </a>
        <a
          href="https://wa.me/+6287801077302"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-[#FAF6E9] hover:text-green-600">
            <FaWhatsapp className="text-xs text-green-500" />
          </Subtittle>
        </a>
        <a
          href="mailto:rizkirenden@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-red-500">
            <SiGmail className="text-xs text-red-500" />
          </Subtittle>
        </a>
        <a
          href="https://www.instagram.com/rizkirenden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-pink-500">
            <FaInstagram className="text-xs text-[#E1306C]" />
          </Subtittle>
        </a>
        <a
          href="https://rizkirenden.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-pink-500">
            <FaWebAwesome className="text-xs text-cyan-500 " />
          </Subtittle>
        </a>
      </div>
    </Card>
  );
};
