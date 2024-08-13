"use client";

import React from "react";
import Vortex from "@/components/ui/Vortox";

export default function Hero() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[40rem] overflow-hidden mb-28 mq750:mt-[-10vh]">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Pioneering Innovation <br /> with Smart Technology Solutions
        </h2>
        {/* <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          This is chemical burn. It&apos;ll hurt more than you&apos;ve ever been
          burned and you&apos;ll have a scar.
        </p> */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="mailto: director@dct.org.in">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Get In Touch
            </button>
          </a>
          {/* <button className="px-4 py-2 text-white">Watch trailer</button> */}
        </div>
      </Vortex>
    </div>
  );
}
