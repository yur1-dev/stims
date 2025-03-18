import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

// Load the Inknut Antiqua font
const inknutAntiqua = Inknut_Antiqua({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title:
    "Angel Engine | Angel Engine is a forward-thinking platform that unites creative minds, innovators, and tech enthusiasts.",
  description:
    "Angel Engine is a forward-thinking platform that unites creative minds, innovators, and tech enthusiasts. It offers a space to share ideas, explore groundbreaking projects, and collaborate on shaping a dynamic digital future. Whether you're looking for inspiration, resources, or a community of like-minded individuals, the initiative is dedicated to empowering creative expression and practical innovation.",
  openGraph: {
    title: "Angel Engine",
    description:
      "Angel Engine is a forward-thinking platform that unites creative minds, innovators, and tech enthusiasts. It offers a space to share ideas, explore groundbreaking projects, and collaborate on shaping a dynamic digital future. Whether you're looking for inspiration, resources, or a community of like-minded individuals, the initiative is dedicated to empowering creative expression and practical innovation.",
    images: ["/images/hero-cover.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Engine",
    description:
      "Angel Engine is a forward-thinking platform that unites creative minds, innovators, and tech enthusiasts. It offers a space to share ideas, explore groundbreaking projects, and collaborate on shaping a dynamic digital future. Whether you're looking for inspiration, resources, or a community of like-minded individuals, the initiative is dedicated to empowering creative expression and practical innovation.",
    images: ["/images/hero-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inknutAntiqua.className} 
          antialiased 
          min-h-screen 
          bg-gradient-to-b from-black via-[#1A1A2E] to-black 
          text-white 
          flex flex-col
        `}
      >
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
