import React from "react";
import { Input } from "../../atoms/input";

export const Logininput = ({ email, password, onChange }) => {
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
          value={email}
          onChange={onChange}
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
          value={password}
          onChange={onChange}
          placeholder="Masukkan password"
          className="bg-[#FAF6E9] focus:ring-[#DDEB9D]"
        />
      </div>
    </div>
  );
};
