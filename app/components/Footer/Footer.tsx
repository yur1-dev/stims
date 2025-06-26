"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="text-white py-10 px-6 bg-black">
      {/* Footer Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <h1 className="text-4xl font-bold tracking-wide">
          ANGEL <span className="text-[#591419]"> ENGINE</span>
        </h1>

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
            href="https://x.com/i/communities/1938274650569503000/"
            target="_blank"
            rel="noreferrer"
            className="opacity-60 hover:opacity-100 transition"
          >
            X
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 text-center text-sm opacity-50">
        © {new Date().getFullYear()} ANGEL ENGINE. All Rights Reserved.
      </div>
    </footer>
  );
};
<h1 className="text-4xl md:text-6xl text-[#591419]">ENGINE</h1>;
export default Footer;
