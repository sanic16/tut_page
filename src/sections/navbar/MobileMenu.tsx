"use client";
import Link from "next/link";
import { FaBars, FaFacebook, FaTwitter } from "react-icons/fa6";
import "./mobileMenu.css";
import { useState } from "react";

const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);
  return (
    <div className="mobile-menu">
      {/* Hamburguer button */}
      <div
        className="mobile-menu-toggle"
        onClick={toggleMobileMenu}
        role="button"
        aria-expanded={showMobileMenu}
        aria-controls="mobile-menu-items"
        aria-label="Open mobile menu"
        tabIndex={0}
      >
        <FaBars style={{ fontSize: "2rem" }} />
      </div>

      {/* Mobile Menu Items */}
      <div
        className={`mobile-menu-items ${showMobileMenu && "active"}`}
        id="mobile-menu-items"
      >
        <ul className="mobile-menu-list">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#chapters">Chapters</Link>
          </li>
          <li>
            <Link href="#summary">Summary</Link>
          </li>
          <li>
            <Link href="#takeaways">Takeaways</Link>
          </li>
          <li>
            <Link href="#author">Author</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Follow Us on Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Follow Us On Twitter"
            >
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
