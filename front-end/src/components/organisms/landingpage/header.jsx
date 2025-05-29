import React from "react";
import { Infortmationdev } from "../../molecules/landingpage/infortmation-dev";
import { Navbar } from "../../molecules/landingpage/nav-bar";
import { Introduction } from "../../molecules/landingpage/introduction";
const Header = () => {
  return (
    <div>
      <Infortmationdev />
      <Navbar />
      <Introduction />
    </div>
  );
};

export default Header;
