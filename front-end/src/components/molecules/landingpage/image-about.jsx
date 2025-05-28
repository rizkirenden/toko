import React from "react";
import { Card } from "../../atoms/card";

export const Imageabout = () => {
  return (
    <Card className="w-auto h-fit p-2 flex items-center justify-center">
      <img src="/assets/about.png" alt="About" className="object-cover" />
    </Card>
  );
};
