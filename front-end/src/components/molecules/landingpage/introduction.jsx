import React from "react";
import { Card } from "../../atoms/card";

export const Introduction = () => {
  return (
    <div className="p-4">
      <Card className="flex items-center justify-center rounded-3xl shadow-lg overflow-hidden w-full max-w-xl mx-auto bg-transparent">
        <video
          src="/public/assets/introduction.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover clip-path-complex"
        />
      </Card>

      <style jsx>{`
        .clip-path-complex {
          clip-path: path(
            "M0,0 L100%,0 L100%,85% C85%,90% 65%,70% 50%,80% C35%,90% 15%,110% 0,90% L0,85% Z"
          );
        }
      `}</style>
    </div>
  );
};
