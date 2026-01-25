/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import { FaArrowDown, FaCode, FaLaptopCode, FaPalette } from 'react-icons/fa';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Problem Solver',
    'Creative Thinker'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Rotate through roles
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="background-text">Full Stack Web Developer</div>
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-gradient-orb orb-3"></div>
      </div>

      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        {/* Hero Text Section */}
        <div className="hero-text">
          <div className="hero-badge">
            <FaCode className="badge-icon" />
            <span>Available for Projects</span>
          </div>

          <h1 className="hero-greeting">
            Hi, I'm <span className="hero-name">Adeleye Adewale</span>
          </h1>

          <div className="hero-role-container">
            <p className="hero-role-prefix">I'm a</p>
            <div className="hero-rotating-role">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`role-text ${index === currentRole ? 'active' : ''}`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
<h1 className="hero-name">Software Developer</h1>  
        <p className="hero-description">
            Crafting elegant digital experiences through clean code and innovative design. 
            Specialized in building responsive web applications that blend functionality with aesthetics.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <FaLaptopCode className="stat-icon" />
              <div>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="stat-item">
              <FaPalette className="stat-icon" />
              <div>
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500}>
              <button className="hero-button primary">
                View My Work
                <span className="button-arrow">→</span>
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="hero-button secondary">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero-image-container">
          <div className="image-decoration decoration-1"></div>
          <div className="image-decoration decoration-2"></div>
          <img 
            src="/images/Ade.PNG" 
            alt="Adewale Adeleye - Full Stack Developer" 
            className="hero-image" 
          />
          <div className="floating-card card-1">
            <span className="card-icon">💻</span>
            <span>Clean Code</span>
          </div>
          <div className="floating-card card-2">
            <span className="card-icon">🎨</span>
            <span>UI Design</span>
          </div>
          <div className="floating-card card-3">
            <span className="card-icon">⚡</span>
            <span>Fast Performance</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link to="services" smooth={true} duration={500}>
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <FaArrowDown className="scroll-arrow" />
        </div>
      </Link>
    </section>
  );
};

export default Hero;