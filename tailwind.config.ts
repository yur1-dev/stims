import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "max-w-[900px]",
    "h-[80vh]",
    "bg-[rgb(13,13,13)]",
    "duration-[1000ms]", // Added for transition duration fix
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)", // Added missing secondary color
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        fadeInPage: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        shine: {
          "0%": {
            left: "-150%",
            backgroundPosition: "100% 50%",
            transform: "skewX(-30deg)",
            opacity: "0.8",
          },
          "100%": {
            left: "150%",
            backgroundPosition: "0% 50%",
            transform: "skewX(-30deg)",
            opacity: "1",
          },
        },
        gradientBlink: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      animation: {
        fadeInPage: "fadeInPage 1s ease-in-out forwards",
        shine: "shine 2s ease-out infinite",
        gradientBlink: "gradientBlink 6s ease infinite",
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
      transitionDuration: {
        // Added explicit duration configuration
        "1000": "1000ms",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"), // Added common plugin
  ],
} satisfies Config;
