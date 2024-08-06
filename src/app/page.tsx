import Chapters from "@/sections/chapters/Chapters";
import Hero from "@/sections/hero/Hero";
import Learn from "@/sections/learn/Learn";
import Navbar from "@/sections/navbar/Navbar";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bienvenido a tutorías ",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Learn />
      <Chapters />
    </>
  );
}
