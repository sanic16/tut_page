import Hero from "@/sections/hero/Hero";
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
    </>
  );
}
