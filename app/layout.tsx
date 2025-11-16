import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLEX Delivery - Marketplace",
  description: "FLEX Delivery Marketplace Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


