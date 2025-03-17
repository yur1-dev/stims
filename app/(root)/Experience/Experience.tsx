"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation variant similar to Hero.tsx
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // We’re using four items (omitting “Get the life” for exactly 4 divs)
  const monkeyData = [
    { id: 1, phrase: "Get the business", image: "/monkey1.png" },
    { id: 2, phrase: "Get the money", image: "/monkey2.png" },
    { id: 3, phrase: "Get the shape", image: "/monkey3.png" },
    { id: 4, phrase: "Get the girl", image: "/monkey4.png" },
  ];

  return (
    <div className="w-full px-4 py-8 bg-black">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeUp}
        className="max-w-[900px] mx-auto"
      >
        <h1
          className={`${pressStart.className} text-4xl text-center text-white mb-8`}
        >
          STIMS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {monkeyData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center justify-center p-6 border-2 border-white rounded-xl glow-border"
            >
              <div className="w-24 h-24 mb-4">
                <Image
                  src={item.image}
                  alt={item.phrase}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <p
                className={`${pressStart.className} text-lg text-white text-center`}
              >
                {item.phrase}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Glowing border styles */}
      <style jsx>{`
        .glow-border {
          box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.7);
          transition: box-shadow 0.3s ease;
        }
        .glow-border:hover {
          box-shadow: 0 0 20px 4px rgba(255, 255, 255, 1);
        }
      `}</style>
    </div>
  );
};

export default Experience;
