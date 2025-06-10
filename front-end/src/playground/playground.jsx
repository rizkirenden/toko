import React from "react";
import { Loginbtn } from "../components/molecules/login/login-btn";
import { Logininput } from "../components/molecules/login/login-input";
import { Header } from "../components/molecules/login/header";

const Playground = () => {
  return (
    <div className="bg-[#A0C878]">
      <Loginbtn />
      <Logininput />
      <Header />
    </div>
  );
};

export default Playground;
