import React from "react";
import Login from "../components/organisms/login/login";
import Footer from "../components/organisms/landingpage/footer";
import { Infortmationdev } from "../components/molecules/landingpage/infortmation-dev";

const LoginpageLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#A0C878]">
      <Infortmationdev />

      <main className="flex-grow flex items-center justify-center">
        <section className="w-full flex items-center justify-center">
          <Login />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LoginpageLayout;
