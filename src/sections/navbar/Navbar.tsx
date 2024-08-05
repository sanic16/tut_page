import Image from "next/image";

import logo from "@/../public/images/logo.svg";
import Link from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

import "./navbar.css";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-flex container">
        <Image src={logo} alt="logo" />
        <div className="main-menu-items">
          <ul className="main-menu-list">
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
