import React from "react";
import { Button } from "../../atoms/button";

export const Loginbtn = () => {
  return (
    <div className="flex flex-col gap-2">
      <Button className="bg-[#FFFDF6] text-[#5A7243] font-semibold p-3 rounded-xl shadow-md hover:bg-[#FAF6E9] transition">
        Login
      </Button>

      {/* Tombol Kembali – Lebih kalem */}
      <Button className="bg-[#DDEB9D] text-[#5A7243] font-semibold p-3 rounded-xl hover:bg-[#cddc8a] transition">
        Kembali
      </Button>
    </div>
  );
};
