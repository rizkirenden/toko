import React from "react";
import { Input } from "../../atoms/input";
import { useNavigate } from "react-router";
export const Logininput = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 text-[#5A7243]">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Masukkan email anda"
          className="bg-[#FAF6E9] focus:ring-[#DDEB9D]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-semibold">
          Password
        </label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Masukkan password"
          className="bg-[#FAF6E9] focus:ring-[#DDEB9D]"
        />
      </div>
    </div>
  );
};
