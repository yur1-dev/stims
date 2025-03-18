"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState([false, false, false, false]);

  const projectData = [
    {
      name: "The Divine",
      link: "https://www.tiktok.com/@angelengine.archives/video/7464200859233094934?lang=en",
    },
    {
      name: "The President",
      link: "https://www.tiktok.com/@angelengine.archives/video/7464679584710003990?lang=en",
    },
    {
      name: "The Hero",
      link: "https://www.tiktok.com/@angelengine.archives/video/7465687977222507798?lang=en",
    },
    {
      name: "The Engine",
      link: "https://www.tiktok.com/@angelengine.archives/video/7471461923813379350?lang=en",
    },
  ];

  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadTimer);
  }, []);

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!isLoading && (
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute sm:relative w-full z-20">
            <Navbar />
          </div>

          <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 w-full h-screen sm:h-full justify-evenly sm:justify-center items-center absolute top-0 left-0 sm:z-0">
            {projectData.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex-shrink-0 h-[25vh] sm:h-full w-full sm:w-1/4 cursor-pointer overflow-hidden transform ${
                  imageLoaded[index] ? "translate-y-0" : "translate-y-[-100%]"
                } transition-all duration-[1000ms] ease-in-out`}
                style={{
                  transitionDuration: `${1000 + index * 300}ms`,
                }}
              >
                <Image
                  src={`/angel-${index + 1}.jpg`}
                  alt={`Monkey project ${project.name}`}
                  fill
                  onLoadingComplete={() => handleImageLoad(index)}
                  className={`object-cover transition-all duration-500 ease-in-out ${
                    index === 0
                      ? "opacity-50 group-hover:opacity-100 grayscale-0"
                      : "sm:grayscale sm:group-hover:grayscale-0"
                  } group-hover:scale-105`}
                />
                <div className="absolute bottom-0 left-0 w-1/2 sm:w-full bg-black/80 transform sm:translate-y-full sm:group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  <div className="p-4 sm:p-6 text-left sm:text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
