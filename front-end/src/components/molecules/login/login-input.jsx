import React from "react";
import { Input } from "../../atoms/input";

export const Logininput = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Input type="email" name="email" placeholder="Email" />
      </div>
      <div>
        <Input type="password" name="password" placeholder="Password" />
      </div>
    </div>
  );
};
