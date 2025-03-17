"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-6 bg-black">
      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-wide">STIMS</h1>

        {/* Navigation */}
        {/* <nav className="flex flex-wrap justify-center gap-6 text-lg">
          <a href="" className="opacity-60 hover:opacity-100 transition">
            What is Stims?
          </a>
          <a href="" className="opacity-60 hover:opacity-100 transition">
            Tokenomics
          </a>
          <a
            href="/roadmap"
            className="opacity-60 hover:opacity-100 transition"
          >
            Roadmap
          </a>
        </nav> */}

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://t.me/stimscoin"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
          >
            Telegram
          </a>
          <a
            href="https://github.com/stims-dev"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
          >
            Dexscreener
          </a>
          <a
            href="https://twitter.com/stimscrypto"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
          >
            Twitter
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} STIMS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
