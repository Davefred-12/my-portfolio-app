// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`menu ${open ? 'open' : ''}`}>
        <button className="close-button" onClick={() => setOpen(false)}>×</button>
        <a href="#hero" onClick={scrollToSection}>Home</a>
        <a href="#services" onClick={scrollToSection}>Services</a>
        <a href="#skills" onClick={scrollToSection}>Skills</a>
        <a href="#projects" onClick={scrollToSection}>Projects</a>
        <a href="#contact" onClick={scrollToSection}>Contact</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;

