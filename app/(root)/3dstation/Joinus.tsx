"use client";

import React from "react";
import Image from "next/image";
import { Inknut_Antiqua } from "next/font/google";

// Load the Inknut Antiqua font
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Joinus = () => {
  return (
    // Added id for smooth scrolling target and responsive padding
    <section
      id="the-president"
      className="min-h-screen flex flex-col items-center justify-center px-4"
    >
      <h1
        className={`${inknutAntiqua.className} text-3xl sm:text-4xl text-center text-white py-8`}
      >
        THE PRESIDENT
      </h1>
      {/* Outer container with pink glow and responsive padding */}
      <div className="relative w-full max-w-2xl mx-auto bg-black px-4 sm:px-8 py-8 sm:py-12 border-2 border-[#5C1618] rounded-xl glow-border">
        {/* Anime-style image with responsive sizing */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
          <Image
            src="/president.png" // <-- Replace with your own image in /public
            alt="Avatar"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Text content with responsive font size */}
        <p className="text-white text-center leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
          Good evening, ladies and gentlemen. Listen to me: I stand before you
          today as a man, a husband, a father, and as your president, but most
          importantly as a citizen of this country. I will not sugarcoat our
          current situation. We are on the cusp of war, and our enemy is not
          from this Earth. This is not a test, nor is it a joke it is the grim
          reality we face. Our very species is in danger, and our cities may
          fall. Even as I speak, our adversaries are preparing their nuclear
          arsenal. The sky itself may seem to collapse around us.
        </p>
      </div>
    </section>
  );
};

export default Joinus;
