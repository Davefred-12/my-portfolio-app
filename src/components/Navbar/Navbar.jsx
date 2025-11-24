// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <HamburgerMenu />
        <span className="name">
          Dale<span className="name-accent">Tech</span>
        </span>
      </div>
      
      <div className="navbar-right">
        <div className="social-icons">
          <a
            href="https://github.com/Davefred-12"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="mailto:adeleyepamilerin9@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/adewale-david-adeleye-108a61245"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/08165619543"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <div className="theme-toggle-icon">
            {isDark ? <FaSun /> : <FaMoon />}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;