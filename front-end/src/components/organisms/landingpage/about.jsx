import React from "react";
import { Imageabout } from "../../molecules/landingpage/image-about";
import { Aboutlist } from "../../molecules/landingpage/about-list";
import { Judul } from "../../molecules/landingpage/judul";

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center pb-6">
          <Judul>
            <span className="relative inline-block text-xs font-bold">
              About Us
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </Judul>
        </div>

        <div className="relative min-h-[300px] md:min-h-[400px]">
          <div className="absolute top-14 left-0 w-full md:w-3/4 lg:w-2/3 transform hover:scale-105 transition-transform duration-500  md:top-0">
            <Imageabout
              width="w-full"
              height="h-full"
              className="rounded-xl shadow-xl"
            />
          </div>

          <div className="flex justify-center md:justify-end pt-8 md:pt-16">
            <div className="relative z-10 w-full md:w-1/2 lg:w-1/3">
              <Aboutlist
                cardWidth="w-full md:w-40 lg:w-48"
                cardHeight="h-20 md:h-24"
                textSize="text-sm md:text-base"
                className="space-y-4"
                cardClassName="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-100"
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="absolute right-0 top-1/3 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute left-0 bottom-1/4 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
