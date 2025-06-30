"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Socials from "@/app/components/Socials/Socials";
import { motion, AnimatePresence } from "framer-motion";
import { Inknut_Antiqua } from "next/font/google";
import { useRouter } from "next/navigation";

const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const SKIPPED_KEY = "hasSeenIntro";

const Hero: React.FC = () => {
  const router = useRouter();
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const contractAddress = ""; // ← put your contract address here

  const shortAddress =
    contractAddress.length > 0
      ? `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`
      : "";

  // On mount: check localStorage to skip intro if already seen
  useEffect(() => {
    const hasSeen = localStorage.getItem(SKIPPED_KEY);
    if (hasSeen) {
      setLoading(false);
      setIsHeroVisible(true);
    } else {
      const t = setTimeout(() => {
        setLoading(false);
        setIsHeroVisible(true);
        localStorage.setItem(SKIPPED_KEY, "true");
      }, 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
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

  const handleEnterApp = () => {
    router.push("/app");
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white">
        {/* Replace this with your intro video component if you have one */}
        Loading…
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

                <Button
                  onClick={handleEnterApp}
                  className="w-full md:w-auto bg-white text-black font-bold hover:bg-gray-200"
                >
                  ENTER APP
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
            <div
              className="absolute inset-0 bg-black/70"
              onClick={closeModal}
            />
            <motion.div
              className="relative bg-gray-900 text-white rounded-2xl p-6 max-w-lg mx-auto shadow-xl"
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
                  variant="outline"
                  className="text-black border-white hover:bg-white transition"
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
