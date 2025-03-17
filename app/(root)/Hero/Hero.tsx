"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Socials from "@/app/components/Socials/Socials";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Press_Start_2P } from "next/font/google";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Hero: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Full contract address (what will be copied)
  const smartContractAddress = "0x1234567890abcdef1234567890abcdef12345678";
  // Shortened for display
  const shortDisplayAddress = smartContractAddress.slice(0, 29) + "...";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsHeroVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(smartContractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      {/* Loading Spinner */}
      {loading && (
        <div
          id="loading-screen"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
          className="max-w-[900px] h-[80vh] mx-auto flex flex-col justify-center relative"
        >
          <div>
            <div className="h-full w-full flex flex-col-reverse text-center lg:text-start lg:flex-row justify-between">
              {/* LEFT SIDE (TEXT) */}
              <div className="flex flex-col justify-evenly gap-5 w-full lg:w-2/3">
                <h1
                  className={`
                    ${pressStart.className}
                    text-3xl sm:text-4xl lg:text-6xl
                    text-white
                    capitalize
                    [text-shadow:2px_2px_0_#000,-2px_2px_0_#000,2px_-2px_0_#000,-2px_-2px_0_#000]
                  `}
                >
                  STIMS IS LIFE
                </h1>

                {/* Smart Contract Address + Copy Button INSIDE dashed border */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    border-2 border-dashed border-white
                    rounded
                    px-2 py-1
                    whitespace-nowrap
                  "
                >
                  <p
                    className={`
                      ${pressStart.className}
                      text-sm
                      text-white
                    `}
                  >
                    {shortDisplayAddress}
                  </p>
                  <button
                    onClick={handleCopy}
                    className={`
                      ${pressStart.className}
                      relative
                      px-4 py-2
                      text-sm
                      text-white
                      bg-black
                      border-2 border-white
                      rounded-none
                      [box-shadow:2px_2px_0_#000]
                      hover:bg-white
                      hover:text-black
                      hover:[box-shadow:-2px_-2px_0_#000]
                      transition-all
                      duration-200
                      outline-none
                    `}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                {/* Social Icons */}
                <div className="lg:flex lg:justify-start lg:mt-4 mt-6">
                  <Socials />
                </div>

                {/* Hire Me Button */}
                {/* 
                Uncomment below if you want to use the Hire Me button.
                <div>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="rounded bg-secondary border-[1px] text-white"
                  >
                    <span className="text-sm font-semibold">Hire me</span>
                  </Button>
                </div>
                */}
              </div>

              {/* RIGHT SIDE (IMAGE) */}
              <div className="flex flex-col gap-4 items-center w-full lg:w-1/3 mt-6 lg:mt-0">
                <Image
                  src="/hero-image.png"
                  alt="hero-yuri"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-black bg-opacity-90 p-6 rounded-xl border border-gray-700 relative max-w-sm w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-300 hover:text-white text-xl"
                onClick={handleModalClose}
              >
                <FaTimes />
              </button>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-4"
              >
                <Image
                  src="/stims-logo.png"
                  alt="Stims Logo"
                  width={100}
                  height={100}
                />
              </motion.div>
              <h2
                className={`
                  ${pressStart.className}
                  text-2xl
                  text-white
                  mb-4
                  [text-shadow:2px_2px_0_#000,-2px_2px_0_#000,2px_-2px_0_#000,-2px_-2px_0_#000]
                `}
              >
                Looking to Hire? Let&apos;s Connect!
              </h2>
              <p className="text-gray-300 mb-4">
                Welcome to Stims! I&apos;m thrilled you&apos;re interested in
                working together. Let&apos;s chat on Telegram to discuss how we
                can bring your ideas to life.
              </p>
              <a
                href="https://t.me/yuri_roc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-secondary border-[1px] text-white">
                  Chat on Telegram
                </Button>
              </a>
              <div className="w-16 h-16 absolute bottom-2 right-2">
                <Image
                  src="/pixel-cat.gif"
                  alt="Pixel Cat Animation"
                  width={64}
                  height={64}
                  className="w-full h-full"
                  unoptimized
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
