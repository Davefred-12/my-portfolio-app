/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
 const h2LeftRef = useRef(null); // Ref for the first h2 (left slide)
  const h2RightRef = useRef(null); // Ref for the second h2 (right slide)

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the container
      threshold: 0.1, // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('left')) {
            entry.target.classList.add('left-slide');
          } else if (entry.target.classList.contains('right')) {
            entry.target.classList.add('right-slide');
          }
        }
      });
    }, observerOptions);

    if (h2LeftRef.current) {
      observer.observe(h2LeftRef.current);
    }

    if (h2RightRef.current) {
      observer.observe(h2RightRef.current);
    }

    return () => {
      if (h2LeftRef.current) {
        observer.unobserve(h2LeftRef.current);
      }
      if (h2RightRef.current) {
        observer.unobserve(h2RightRef.current);
      }
    };
  }, []);
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='services' className="services">
      <h2 ref={h2LeftRef} className="left">Our Services</h2>
      <div className="service-intro">
        <h2 ref={h2RightRef} className="right">I specialize in delivering end-to-end web solutions</h2>
        <p>
          that help your business thrive online. Whether its building a responsive front-end or
          ensuring a scalable backend, I have got you covered.
        </p>
        <button className="explore-btn" onClick={scrollToProjects}>
          EXPLORE MY WORK
        </button>
      </div>

  
      <div className="service-list-box">
        <div className="service-list">
          <div className="service-item">
            <h3>Frontend Development</h3>
            <br></br> <br></br>
            <p>Creating responsive, user-friendly interfaces that enhance user experience. I utilize modern technologies like React, HTML, and CSS to build visually appealing and intuitive designs that work seamlessly across devices.</p>
          </div>
          <div className="service-item">
            <h3>Backend Development</h3>
            <br></br> <br></br> <br></br>
            <p>Building robust and scalable server-side applications using Node.js and Express. I focus on creating efficient APIs and handling data management, ensuring your application runs smoothly and securely.</p>
          </div>
          <div className="service-item">
            <h3>API Integration</h3>
            <br></br> <br></br> <br></br> 
            <p>Enhancing your web applications by integrating third-party services and APIs. This service streamlines functionality and allows for seamless communication between different platforms, expanding your app’s capabilities.</p>
          </div>
          <div className="service-item">
            <h3>Fullstack Development</h3>
            <br></br> <br></br>
            <p>Bringing together frontend and backend expertise to deliver comprehensive web solutions. I manage the entire development process, ensuring that all components work harmoniously to create a cohesive and functional application.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
