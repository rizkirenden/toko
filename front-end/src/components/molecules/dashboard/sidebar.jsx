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
          href="/dashboard"
          text=""
          icon={<Icon name="dashboard" className="" />}
        />
        <Navitem
          label="toko"
          href="/datatoko"
          text=""
          icon={<Icon name="toko" className="" />}
        />
        <Navitem
          label="produk"
          href="/dataproduk"
          text=""
          icon={<Icon name="produk" className="" />}
        />
        <Navitem
          label="category"
          href="/datacategory"
          text=""
          icon={<Icon name="kategori" className="" />}
        />
        <Navitem
          label="register"
          href="/register"
          text=""
          icon={<Icon name="user" className="" />}
        />
        <Navitem
          label="logout"
          href=""
          text=""
          icon={<Icon name="logout" className="" />}
        />
      </nav>
    </Card>
  );
};
