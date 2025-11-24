// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">
              Dale<span className="logo-accent">Tech</span>
            </h3>
            <p className="footer-tagline">
              Building digital experiences that inspire and innovate
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="#hero">Home</a>
              <a href="#services">Services</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <a href="#contact">Contact</a>
              <a href="mailto:adeleyepamilerin9@gmail.com">Email</a>
              <a href="tel:+2348165619543">Phone</a>
            </div>

            <div className="footer-column">
              <h4>Follow Me</h4>
              <div className="footer-social">
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
                  href="https://www.linkedin.com/in/adewale-david-adeleye-108a61245"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:adeleyepamilerin9@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <FaEnvelope />
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
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} DaleTech. All rights reserved. Built with{' '}
            <FaHeart className="heart-icon" /> by Adewale Adeleye
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button 
          className="scroll-to-top" 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;