import React from "react";

export default function Social() {
  const icons = [
    {
      href: "https://dexscreener.com/",
      src: "/DexscreenerLogo.svg",
      alt: "Dexscreener Logo",
    },
    {
      href: "https://telegram.org/",
      src: "/TelegramLogo.png",
      alt: "Telegram Logo",
    },
    {
      href: "https://twitter.com/",
      src: "/XLogo.png",
      alt: "Twitter Logo",
    },
    {
      href: "https://example.com/",
      src: "/PillLogo.png",
      alt: "Pill Logo",
    },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {icons.map(({ href, src, alt }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative rounded p-1 overflow-hidden group transition-all transform hover:scale-105"
        >
          <img src={src} alt={alt} className="w-12 h-12" />
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
