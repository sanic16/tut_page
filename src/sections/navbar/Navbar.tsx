"use client";
import Image from "next/image";

import logo from "@/../public/images/logo.svg";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

import "./navbar.css";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [bgOnScroll, setBgOnScroll] = useState(false);

  useEffect(() => {
    const changeBackgroundOnScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > 0) {
          setBgOnScroll(true);
        } else {
          setBgOnScroll(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackgroundOnScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBackgroundOnScroll);
      }
    };
  }, []);

  console.log(bgOnScroll);

  return (
    <nav className={`navbar ${bgOnScroll && "navbar--scroll"}`}>
      <div className="navbar-flex container">
        <Image src={logo} alt="logo" />
        <div className="main-menu-items">
          <ul className="main-menu-list">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="#chapters">Tutorías</Link>
            </li>
            <li>
              <Link href="#summary">Resumen</Link>
            </li>
            <li>
              <Link href="#takeaways">Notas</Link>
            </li>
            <li>
              <Link href="#author">Autor</Link>
            </li>
            <li>
              <Link href="contacto">Contacto</Link>
            </li>
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
