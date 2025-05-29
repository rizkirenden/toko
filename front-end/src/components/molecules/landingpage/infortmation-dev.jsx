import React from "react";
import { Tittle } from "../../atoms/tittle";
import { Subtittle } from "../../atoms/subtittle";
import { FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWebAwesome } from "react-icons/fa6";
export const Infortmationdev = () => {
  return (
    <div className="flex justify-between items-center w-full gap-4">
      <Tittle className="text-black font-bold text-xs">Information Dev</Tittle>
      <div className="flex gap-3">
        <a href="tel:+6287801077302" target="_blank" rel="noopener noreferrer">
          <Subtittle className="flex items-center text-xs text-black hover:text-green-700">
            <FaPhone />
          </Subtittle>
        </a>
        <a
          href="https://wa.me/+6287801077302"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-green-600">
            <FaWhatsapp />
          </Subtittle>
        </a>
        <a
          href="mailto:rizkirenden@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-red-500">
            <SiGmail />
          </Subtittle>
        </a>
        <a
          href="https://www.instagram.com/rizkirenden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-pink-500">
            <FaInstagram />
          </Subtittle>
        </a>
        <a
          href="https://rizkirenden.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Subtittle className="flex items-center text-xs text-black hover:text-pink-500">
            <FaWebAwesome />
          </Subtittle>
        </a>
      </div>
    </div>
  );
};
