// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Navbar.css";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <HamburgerMenu /> {/* Only one instance of HamburgerMenu */}
        <span className="name">DaleTech</span>
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/Davefred-12"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaGithub style={{ color: '#333' }} /> {/* GitHub Icon Color */}
        </a>
        <a href="mailto:adeleyepamilerin9@gmail.com">
        <FaEnvelope style={{ color: '#d44638' }} /> {/* Envelope (Email) Icon Color */}
        </a>
        <a
          href="https://www.linkedin.com/in/adewale-david-adeleye-108a61245
"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaLinkedin style={{ color: '#0077b5' }} /> {/* LinkedIn Icon Color */}
        </a>
        <a
          href="https://wa.me/08165619543"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaWhatsapp style={{ color: '#25d366' }} /> {/* WhatsApp Icon Color */}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
