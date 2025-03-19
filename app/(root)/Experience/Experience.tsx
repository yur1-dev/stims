"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inknut_Antiqua } from "next/font/google";

// Load the Inknut Antiqua font
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const AngelRules: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Data for the angel steps
  const angelData = [
    {
      id: 1,
      step: "Mint The Planet",
      images: ["/angel-5.jpg", "/angel-5b.jpg"],
    },
    {
      id: 2,
      step: "Exterminate The Jeets",
      images: ["/angel-6.png", "/angel-6b.png"],
    },
    {
      id: 3,
      step: "All Species in a Hard Fork",
      images: ["/angel-7.png", "/angel-7b.png"],
    },
    {
      id: 4,
      step: "A Divine Airdrop",
      images: ["/angel-8.png", "/angel-8b.png"],
    },
    {
      id: 5,
      step: "Engine Validator",
      images: ["/angel-9.png", "/angel-9b.png"],
    },
    {
      id: 6,
      step: "Genesis Form",
      images: ["/angel-10.png", "/angel-10.png"],
    },
  ];

  // Layout configuration for the grid on larger screens
  const layout = [
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 2 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 2, rowSpan: 1 },
    { colSpan: 1, rowSpan: 1 },
    { colSpan: 3, rowSpan: 1 },
  ];

  return (
    // Changed from fixed width to responsive container
    <div
      id="experience"
      className="w-full max-w-[1200px] mx-auto px-4 overflow-x-hidden"
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeUp}
        className="w-full"
      >
        <h1
          className={`${inknutAntiqua.className} text-3xl sm:text-4xl text-center text-white py-8`}
        >
          HOW TO CATCH AN ANGEL
        </h1>

        {/* Responsive Grid Layout:
            - Defaults to a single column on mobile
            - On small screens and up, uses a 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">
          {angelData.map((item, index) => {
            // Use layout config for larger screens
            const { colSpan, rowSpan } = layout[index] || {
              colSpan: 1,
              rowSpan: 1,
            };
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
                className={`col-span-1 sm:col-span-${colSpan} sm:row-span-${rowSpan} flex flex-col`}
              >
                <div className="border-2 border-[#5C1618] rounded-xl glow-border overflow-hidden w-full h-full">
                  <div className="w-full relative h-64">
                    <Image
                      src={item.images[0]}
                      alt={item.step}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <p className="mt-2 text-white text-center">{item.step}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AngelRules;
