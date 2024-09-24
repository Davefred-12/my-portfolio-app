// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll'; // For smooth scrolling

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="background-text">Full Stack Web Developer</div>
      </div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>ADELEYE ADEWALE</h1>
          <p className="subtitle">WEB DEVELOPER<br></br>
UI DESIGNER</p>
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={500}>
              <button className="hero-button">See My Latest Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="hero-button">Contact Me</button>
            </Link>
          </div>
        </div>
        <img src="/src/assets/images/pc.jpg" alt="Pamilerin" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
