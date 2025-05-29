import React from "react";
import { Card } from "../../atoms/card";

export const Imageabout = ({ width = "w-24", height = "h-24" }) => {
  return (
    <Card className={`bg-transparent shadow-none p-0 ${width} ${height}`}>
      <img
        src="/assets/about.png"
        alt="About"
        className="object-cover w-full h-full pointer-events-none"
      />
    </Card>
  );
};
