// page.tsx
"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./(root)/Hero/Hero";
import Experience from "./(root)/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Cgradients from "./components/Cgradients/Cgradients";
import Loader from "@/components/Loader/Loader";
import VideoIntro from "./components/VideoIntro";
import Joinus from "./(root)/3dstation/Joinus";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem("hasVisited");

    if (!hasVisitedBefore) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
        document.documentElement.classList.add("loaded");
        document.body.classList.add("loaded");

        localStorage.setItem("hasVisited", "true");
      }, 1500);

      return () => {
        document.documentElement.classList.remove("loading");
        document.body.classList.remove("loading");
        document.documentElement.classList.remove("loaded");
        document.body.classList.remove("loaded");
        clearTimeout(timer);
      };
    } else {
      // If visited before, skip loader
      setIsLoading(false);
      document.documentElement.classList.remove("loading");
      document.body.classList.remove("loading");
      document.documentElement.classList.add("loaded");
      document.body.classList.add("loaded");
    }
  }, []);

  return (
    <main className="relative w-full min-h-screen">
      {/* Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Content with VideoIntro */}
      <div
        className={`w-full transition-all duration-500 ${
          isLoading
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        }`}
      >
        {/* Background Image Wrapper */}
        <div className="relative w-full min-h-[100vh] bg-[url('/bg-img.png')] bg-cover bg-center">
          <Navbar />
          <VideoIntro>
            <Hero />
          </VideoIntro>
        </div>

        {/* Rest of the content */}
        <Cgradients />
        <Experience />
        <Joinus />
        <Footer />
      </div>
    </main>
  );
}
