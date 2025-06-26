"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Socials from "@/app/components/Socials/Socials";
import { motion, AnimatePresence } from "framer-motion";
import { Inknut_Antiqua } from "next/font/google";

// Load the Inknut Antiqua font
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Hero: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Replace this with your actual contract address
  const contractAddress = "";

  // Shortened display version (first 6 + last 4 characters)
  const shortAddress =
    contractAddress.length > 0
      ? `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`
      : "";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsHeroVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy contract address:", err);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        {isHeroVisible && (
          <motion.section
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`relative w-full h-[80vh] flex flex-col items-center justify-center text-center text-white overflow-hidden ${inknutAntiqua.className}`}
          >
            <div className="relative z-10 flex flex-col items-center justify-center p-4 space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4">
                <h1 className="text-4xl md:text-6xl md:mr-96">ANGEL</h1>
                <h1 className="text-4xl md:text-6xl text-[#591419]">ENGINE</h1>
              </div>

              <div className="mt-6">
                <Socials />
              </div>

              <div className="flex items-center gap-4">
                <Button
                  onClick={openModal}
                  className="w-full md:w-auto border border-[#591419]"
                >
                  CONTRACT
                </Button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Contract Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70"
              onClick={closeModal}
            />
            {/* Modal content */}
            <motion.div
              className="relative bg-gray-900 text-white rounded-2xl p-6 max-w-lg mx-auto z-50 shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Contract Details</h2>

              <p className="mb-2">Contract Address:</p>
              <div className="flex items-center gap-2 mb-4">
                <p title={contractAddress} className="break-all">
                  {shortAddress}
                </p>
                <Button
                  className="text-black border border-white hover:bg-white transition"
                  variant="outline"
                  onClick={handleCopy}
                >
                  Copy
                </Button>
              </div>

              {isCopied && (
                <p className="text-green-400 text-sm mb-4">Copied!</p>
              )}

              <Button onClick={closeModal}>Close</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
