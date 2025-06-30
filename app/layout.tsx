// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Your global styles

export const metadata: Metadata = {
  title: "Angel Bot",
  description: "AI Chat with Web3 Integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
