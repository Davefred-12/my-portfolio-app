// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const scrollToSection = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const section = document.querySelector(target);
    
    if (section) {
      setOpen(false);
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  return (
    <>
      <button 
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      <nav className={`menu ${open ? 'open' : ''}`}>
        <button 
          className="close-button" 
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        
        <div className="menu-content">
          <a href="#hero" onClick={scrollToSection} className="menu-link">
            <span className="menu-number">01</span>
            <span className="menu-text">Home</span>
          </a>
          <a href="#services" onClick={scrollToSection} className="menu-link">
            <span className="menu-number">02</span>
            <span className="menu-text">Services</span>
          </a>
          <a href="#skills" onClick={scrollToSection} className="menu-link">
            <span className="menu-number">03</span>
            <span className="menu-text">Skills</span>
          </a>
          <a href="#projects" onClick={scrollToSection} className="menu-link">
            <span className="menu-number">04</span>
            <span className="menu-text">Projects</span>
          </a>
          <a href="#contact" onClick={scrollToSection} className="menu-link">
            <span className="menu-number">05</span>
            <span className="menu-text">Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;