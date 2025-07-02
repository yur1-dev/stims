"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Adjust import to your setup
import { motion } from "framer-motion";
import { Inknut_Antiqua } from "next/font/google";

// Use any font you like (here reusing Inknut Antiqua for demo)
const pressStart = Inknut_Antiqua({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : prevOverflow;
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isMobileMenuOpen]);

  // Smooth-scroll to the section with id "experience"
  const handleExperienceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      // If not on the homepage, you might redirect to the homepage with a hash
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="w-full px-4">
      <div className="max-w-[1200px] mx-auto py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo-img.png"
              alt="Nav Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white text-xs">
          <NavItem href="/" onClick={() => setIsMobileMenuOpen(false)}>
            INTRO
          </NavItem>
          {/* Use smooth scrolling link to the section */}
          <NavItem href="/#experience" onClick={handleExperienceClick}>
            HOW TO?
          </NavItem>
          <NavItem
            href="/#the-president"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            THE PRESIDENT
          </NavItem>

          {/* Example button on desktop */}
          <div className="hidden md:block">
            <Button className="rounded" variant="secondary">
              <Link className="text-sm font-semibold" href="/projects">
                THE GALLERY
              </Link>
            </Button>
          </div>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{
          y: isMobileMenuOpen ? "0%" : "-100%",
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-center items-center"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Navigation Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 text-center text-xl font-semibold"
        >
          <NavItem href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Intro
          </NavItem>
          <NavItem href="/#experience" onClick={handleExperienceClick}>
            How To?
          </NavItem>
        </motion.ul>

        {/* Example button for Mobile */}
        <div className="mt-8">
          <Button className="rounded" variant="secondary">
            <Link className="text-sm font-semibold" href="/projects">
              ENTER WORLD
            </Link>
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};

// Reusable NavItem component
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, onClick }) => (
  <li>
    <Link
      href={href}
      onClick={onClick}
      style={{
        textShadow:
          "1px 1px 0px black, -1px -1px 0px black, -1px 1px 0px black, 1px -1px 0px black",
      }}
      className={`${pressStart.className} cursor-pointer hover:text-gray-300 transition-colors`}
    >
      {children}
    </Link>
  </li>
);

export default Navbar;
