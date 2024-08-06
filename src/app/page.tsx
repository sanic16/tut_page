import Chapters from "@/sections/chapters/Chapters";
import Details from "@/sections/details/Details";
import Hero from "@/sections/hero/Hero";
import Information from "@/sections/information/Information";
import Learn from "@/sections/learn/Learn";
import Navbar from "@/sections/navbar/Navbar";
import Summary from "@/sections/summary/Summary";
import Takeaway from "@/sections/takeaway/Takeaway";
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
      <Summary />
      <Information />
      <Takeaway />
      <Details />
    </>
  );
}
