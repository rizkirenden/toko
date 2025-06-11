import React from "react";
import { Content } from "../../molecules/login/content";
import { Loginbtn } from "../../molecules/login/login-btn";
import { Logininput } from "../../molecules/login/login-input";

const Login = () => {
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="w-full max-w-md p-8 ">
        <div className="mb-6 text-center">
          <Content />
        </div>
        <div className="space-y-4">
          <Logininput />
          <Loginbtn />
        </div>
      </div>
    </div>
  );
};

export default Login;
