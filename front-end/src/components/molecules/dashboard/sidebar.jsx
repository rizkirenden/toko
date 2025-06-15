import React from "react";
import { Card } from "../../atoms/card";
import { Navitem } from "../../atoms/navitem";
import { Icon } from "../../atoms/icon";

export const Sidebar = () => {
  return (
    <Card>
      <div>
        <img src="/assets/logo.png" alt="logo" />
      </div>
      <nav>
        <Navitem
          label="dahsboard"
          href=""
          text=""
          icon={<Icon name="" className="" />}
        />
        <Navitem
          label="toko"
          href=""
          text=""
          icon={<Icon name="" className="" />}
        />
        <Navitem
          label="produk"
          href=""
          text=""
          icon={<Icon name="" className="" />}
        />
        <Navitem
          label="category"
          href=""
          text=""
          icon={<Icon name="" className="" />}
        />
        <Navitem
          label="register"
          href=""
          text=""
          icon={<Icon name="" className="" />}
        />
        <Navitem
          label="logout"
          href=""
          text=""
          icon={<Icon name="" className="" />}
        />
      </nav>
    </Card>
  );
};
