import type { Metadata } from "next";
import { Blinker } from "next/font/google";
import "./globals.css";

const blinker = Blinker({
  weight: ["200", "300", "400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stims | Hyperactive Energy Hub",
  description:
    "Welcome to the Stims experience. Discover a high-energy digital realm where cutting-edge design meets boundless creativity. Unleash your productivity with a futuristic twist.",
  openGraph: {
    title: "Stims | Hyperactive Energy Hub",
    description:
      "Welcome to the Stims experience. Discover a high-energy digital realm where cutting-edge design meets boundless creativity. Unleash your productivity with a futuristic twist.",
    url: "https://stims.vercel.app",
    siteName: "Stims",
    images: [
      {
        url: "https://stims.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stims Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stims | Hyperactive Energy Hub",
    description:
      "Welcome to the Stims experience. Discover a high-energy digital realm where cutting-edge design meets boundless creativity. Unleash your productivity with a futuristic twist.",
    creator: "@stims",
    images: ["https://stims.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden loading">
      {/* 
          The Blinker font is applied globally on the body.
          Use pressStart2p.className on any element where you want to use the "Press Start 2P" font.
      */}
      <body className={`${blinker.className} antialiased loading`}>
        {children}
      </body>
    </html>
  );
}
