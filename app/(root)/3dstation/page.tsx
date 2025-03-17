"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

interface MotionGraphic {
  name: string;
  videoSrc: string;
  title: string;
  subTitle: string;
  description: string;
}

const motionGraphics: MotionGraphic[] = [
  {
    name: "Grid Animation",
    videoSrc: "/video/grid-animation.mp4",
    title: "GRID ANIMATION",
    subTitle: "UI/UX Design, Social Media Assets, Motion Graphics",
    description:
      "Discover next-level 3D experiences with immersive visuals and state-of-the-art animation—our 3D station transforms digital artistry into interactive wonderlands.",
  },
  {
    name: "Cube Falling",
    videoSrc: "/video/cube-falling.mp4",
    title: "CUBE FALLING",
    subTitle: "Branding, Web Design, Visual Storytelling",
    description:
      "Experience the captivating cascade of falling cubes. This motion graphic blends dynamic animation with creative design, delivering a fresh visual narrative.",
  },
  {
    name: "Line Animation",
    videoSrc: "/video/line-animation.mp4",
    title: "LINE ANIMATION",
    subTitle: "Digital Art, Creative Motion, Visual Dynamics",
    description:
      "Our Line Animation offers a smooth, flowing visual journey that perfectly marries creative design with fluid motion, ideal for modern digital storytelling.",
  },
  // {
  //   name: "Fluid Motion",
  //   videoSrc: "/video/line-animation.mp4",
  //   title: "FLUID MOTION",
  //   subTitle: "Innovative Motion, Fluid Animation, Creative Expression",
  //   description:
  //     "Experience dynamic motion graphics with Fluid Motion. This visual display showcases energetic movement and creative expression, elevating any visual project.",
  // },
  // {
  //   name: "Nebula Motion",
  //   videoSrc: "/video/line-animation.mp4",
  //   title: "NEBULA MOTION",
  //   subTitle: "Visual Effects, Cinematics, Digital Art",
  //   description:
  //     "Immerse yourself in Nebula Motion, a captivating journey through digital art where dynamic effects and innovative animation combine to create a mesmerizing experience.",
  // },
  // {
  //   name: "Aurora Motion",
  //   videoSrc: "/video/line-animation.mp4",
  //   title: "AURORA MOTION",
  //   subTitle: "Futuristic Animation, Experimental Design, Visual Art",
  //   description:
  //     "Aurora Motion redefines the limits of animation, blending experimental techniques with innovative visuals to transport you into a realm of artistic expression.",
  // },
];

export default function Page() {
  const [backgroundVideo, setBackgroundVideo] = useState<MotionGraphic | null>(
    null
  );
  const [fade, setFade] = useState(false);

  const handleVideoClick = (video: MotionGraphic) => {
    if (backgroundVideo) {
      setFade(true);
      setTimeout(() => {
        setBackgroundVideo(video);
        setFade(false);
      }, 500);
    } else {
      setBackgroundVideo(video);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      {backgroundVideo && (
        <video
          key={backgroundVideo.videoSrc}
          src={backgroundVideo.videoSrc}
          autoPlay
          loop
          muted
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 pointer-events-none"></div>

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Main Content - Bento Grid */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 auto-rows-[80px]">
          {motionGraphics.map((item, idx) => {
            let gridClasses = "";
            switch (idx) {
              case 0:
                gridClasses = "md:col-span-4 md:row-span-2";
                break;
              case 1:
                gridClasses = "md:col-span-2 md:row-span-2";
                break;
              case 2:
                gridClasses = "md:col-span-3 md:row-span-2";
                break;
              case 3:
                gridClasses = "md:col-span-3 md:row-span-2";
                break;
              case 4:
                gridClasses = "md:col-span-4 md:row-span-2";
                break;
              case 5:
                gridClasses = "md:col-span-2 md:row-span-2";
                break;
              default:
                gridClasses = "md:col-span-2 md:row-span-2";
            }

            return (
              <div
                key={item.name}
                onClick={() => handleVideoClick(item)}
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video?.play();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  video?.pause();
                  if (video) video.currentTime = 0;
                }}
                className={`relative group cursor-pointer border border-gray-700 rounded-xl overflow-hidden shadow-lg transform transition-all duration-500 ${gridClasses}`}
              >
                <video
                  src={item.videoSrc}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  preload="metadata"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black via-transparent to-transparent">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-gray-200">{item.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
