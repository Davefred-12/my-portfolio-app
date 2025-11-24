/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import './Services.css';
import { FaCode, FaServer, FaPlug, FaLayerGroup, FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const servicesRef = useRef([]);

  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Transform your vision into stunning, interactive interfaces. I craft pixel-perfect, responsive designs using React, Next.js, and modern CSS frameworks that captivate users and drive engagement across all devices.",
      highlights: ["React & Next.js", "Responsive Design", "Performance Optimized"]
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Power your applications with rock-solid backend architecture. From RESTful APIs to real-time data processing, I build scalable server solutions using Node.js, Express, and MongoDB that handle growth effortlessly.",
      highlights: ["RESTful APIs", "Database Design", "Security First"]
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      description: "Unlock limitless possibilities by connecting your app to the world. Seamlessly integrate payment gateways, social platforms, analytics tools, and third-party services to supercharge your application's capabilities.",
      highlights: ["Third-party APIs", "Payment Systems", "Real-time Sync"]
    },
    {
      icon: <FaLayerGroup />,
      title: "Full Stack Solutions",
      description: "Get the complete package from concept to deployment. I handle everything—frontend magic, backend power, database architecture, and DevOps—delivering end-to-end solutions that just work, beautifully.",
      highlights: ["End-to-End Development", "Cloud Deployment", "Ongoing Support"]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = servicesRef.current.indexOf(entry.target);
          if (index !== -1 && !visibleItems.includes(index)) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 150);
          }
        }
      });
    }, observerOptions);

    servicesRef.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      servicesRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id='services' className="services" ref={sectionRef}>
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-tag">What I Do</span>
          <h2 className="services-title">Services That Drive Results</h2>
          <p className="services-subtitle">
            From concept to launch, I deliver complete web solutions that don't just look great—they perform exceptionally. 
            Let's build something amazing together.
          </p>
        </div>

        {/* Service Cards */}
        <div className="service-grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => servicesRef.current[index] = el}
              className={`service-card ${visibleItems.includes(index) ? 'visible' : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-highlights">
                {service.highlights.map((highlight, i) => (
                  <li key={i}>
                    <span className="highlight-dot"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Bring Your Project to Life?</h3>
            <p>Let's collaborate and create something extraordinary that exceeds your expectations.</p>
          </div>
          <button className="cta-button" onClick={scrollToProjects}>
            <span>View My Work</span>
            <FaArrowRight className="cta-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;