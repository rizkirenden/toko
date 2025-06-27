import React from "react";

import UserLayout from "../layouts/dashboard/userLayout";
import { Sidebar } from "../components/molecules/dashboard/sidebar";

const Playground = () => {
  return (
    <div className="bg-white">
      <Sidebar />
      <UserLayout />
    </div>
  );
};

export default Playground;
