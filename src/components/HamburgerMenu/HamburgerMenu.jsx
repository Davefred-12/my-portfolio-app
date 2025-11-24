/* eslint-disable no-unused-vars */
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

  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    
    if (section) {
      setOpen(false);
      // Close menu first, then scroll
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
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="menu-link">
            <span className="menu-number">01</span>
            <span className="menu-text">Home</span>
          </a>
          <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="menu-link">
            <span className="menu-number">02</span>
            <span className="menu-text">Services</span>
          </a>
          <a href="#skills" onClick={(e) => scrollToSection(e, '#skills')} className="menu-link">
            <span className="menu-number">03</span>
            <span className="menu-text">Skills</span>
          </a>
          <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="menu-link">
            <span className="menu-number">04</span>
            <span className="menu-text">Projects</span>
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="menu-link">
            <span className="menu-number">05</span>
            <span className="menu-text">Contact</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default HamburgerMenu;