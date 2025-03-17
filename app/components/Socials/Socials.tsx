import React from "react";
import Image from "next/image";

export default function Social() {
  const icons = [
    {
      href: "https://dexscreener.com/",
      src: "/DexscreenerLogo.svg",
      alt: "Dexscreener Logo",
      width: 48,
      height: 48,
    },
    {
      href: "https://telegram.org/",
      src: "/TelegramLogo.png",
      alt: "Telegram Logo",
      width: 48,
      height: 48,
    },
    {
      href: "https://twitter.com/",
      src: "/XLogo.png",
      alt: "Twitter Logo",
      width: 48,
      height: 48,
    },
    {
      href: "https://example.com/",
      src: "/PillLogo.png",
      alt: "Pill Logo",
      width: 48,
      height: 48,
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {icons.map(({ href, src, alt, width, height }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded p-1 overflow-hidden group transition-all transform hover:scale-105"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-12 h-12"
          />
          {/* Shine effect on hover */}
          <span
            className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r 
                       from-transparent via-[rgba(255,255,255,0.4)] to-transparent opacity-0 
                       group-hover:opacity-100 group-hover:animate-shine"
          />
        </a>
      ))}
    </div>
  );
}
