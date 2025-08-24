// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Your global styles

export const metadata: Metadata = {
  title: "Angel Engine - AI Chat with Web3 Integration",
  description:
    "Experience the future of AI communication with Angel Engine. Advanced AI chat powered by cutting-edge technology and Web3 integration.",
  keywords:
    "AI, artificial intelligence, chat, Web3, blockchain, angel engine, bot, AI assistant",
  authors: [{ name: "Angel Engine Team" }],
  creator: "Angel Engine",
  publisher: "Angel Engine",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.angelengine.xyz/",
    title: "Angel Engine - AI Chat with Web3 Integration",
    description:
      "Experience the future of AI communication with Angel Engine. Advanced AI chat powered by cutting-edge technology and Web3 integration.",
    siteName: "Angel Engine",
    images: [
      {
        url: "/preview.png", // or /preview.jpg depending on your file extension
        width: 1200,
        height: 630,
        alt: "Angel Engine - AI Chat Interface",
        type: "image/png", // Change to image/jpeg if your file is .jpg
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Angel Engine - AI Chat with Web3 Integration",
    description:
      "Experience the future of AI communication with Angel Engine. Advanced AI chat powered by cutting-edge technology and Web3 integration.",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["/preview.png"], // or /preview.jpg
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification tags (add these if you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // App-specific metadata
  applicationName: "Angel Engine",
  referrer: "origin-when-cross-origin",
  category: "technology",

  // Mobile app metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Angel Engine",
  },

  // Favicon and icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Manifest file
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags that can't be set via Metadata API */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="canonical" href="https://www.angelengine.xyz/" />
      </head>
      <body>{children}</body>
    </html>
  );
}
