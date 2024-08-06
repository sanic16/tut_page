import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/sections/navbar/Navbar";
import Footer from "@/sections/footer/Footer";
import Social from "@/sections/social/Social";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Social />
        <Footer />
      </body>
    </html>
  );
}
