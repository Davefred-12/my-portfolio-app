/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import { FaExternalLinkAlt, FaCode, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    name: "TechAge Africa",
    description:
      "A full-stack learning management system (LMS) delivering tech education at scale. Features include course enrollment, video streaming, progress analytics, certificate generation, payment processing with Paystack, role-based access control, and cloud-based media management. Designed to empower African learners with market-relevant digital skills.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Paystack",
      "Cloudinary",
    ],
    demoLink: "https://techageafrica.com",
    image: "/images/tech.png",
  },
  {
    name: "Mo Apartments",
    description:
      "A sophisticated property management platform streamlining apartment rentals and bookings. Features real-time availability tracking, virtual tours, secure payment processing, and tenant management systems. Built with modern web technologies to deliver seamless user experiences for both property managers and renters.",
    tech: ["React", "Node.js", "MongoDB"],
    demoLink: "https://moapartment.com",
    image: "/images/mos.png",
  },
  {
    name: "Opajr Books",
    description:
      "An innovative digital bookstore revolutionizing how readers discover and purchase books online. Offers personalized recommendations, advanced search filters, author profiles, and seamless checkout. The platform combines elegant design with powerful functionality to create an immersive reading community experience.",
    tech: ["React", "Express", "Stripe API"],
    demoLink: "https://opajr.com",
    image: "/images/opa.png",
  },
  {
    name: "Debcas Healthcare",
    description:
      "A comprehensive healthcare management system connecting patients with quality medical services. Features appointment scheduling, telemedicine capabilities, electronic health records, and prescription management. Designed with accessibility and patient privacy at its core to improve healthcare delivery.",
    tech: ["React", "Node.js", "PostgreSQL"],
    demoLink: "https://debcashealthcare.co.uk",
    image: "/images/deb.png",
  },
  {
    name: "Chatterra",
    description:
      "A real-time messaging platform designed for fast, secure, and meaningful conversations. Chatterra supports one-on-one and group chats, message reactions, media sharing, and online presence indicators. Built with a focus on performance, scalability, and user-friendly interaction, it creates a seamless communication experience across devices.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    demoLink: "https://chatterra.onrender.com/",
    image: "/images/chat.png",
  },

  {
    name: "Uncle Ajala",
    description:
      "A vibrant travel and lifestyle platform showcasing cultural experiences and adventures. Combines stunning visual storytelling with practical travel guides, booking integrations, and community features. Built to inspire wanderlust while providing valuable resources for modern travelers.",
    tech: ["React", "MongoDB", "Express"],
    demoLink: "https://uncleajala.onrender.com/",
    image: "/images/uncle.png",
  },
  {
    name: "Bellefull Foods",
    description:
      "A next-generation food delivery platform transforming the dining experience. Features real-time order tracking, AI-powered meal recommendations, multi-restaurant browsing, and secure payment integration. Optimized for speed and reliability to ensure hot, fresh meals arrive exactly when expected.",
    tech: ["React", "Node.js", "Socket.io"],
    demoLink: "https://food-delivery-app-client-fl4g.onrender.com",
    image: "/images/bellefull.png",
  },
  {
    name: "React YouTube Clone",
    description:
      "A pixel-perfect recreation of YouTube's interface showcasing advanced React skills. Implements video search via YouTube API, responsive video player, category filtering, and trending content discovery. Demonstrates mastery of component architecture, state management, and API integration.",
    tech: ["React", "YouTube API", "Material-UI"],
    demoLink: "https://youtube-clone-u9xn.onrender.com",
    image: "/images/youtube.png",
  },
  {
    name: "TechAlpha Newsletter",
    description:
      "A dynamic tech news aggregator delivering curated insights from across the industry. Features personalized content feeds, bookmark functionality, newsletter subscriptions, and social sharing. Keeps tech professionals informed with the latest innovations, trends, and breakthrough discoveries.",
    tech: ["React", "Node.js", "News API"],
    demoLink: "https://techalpha-newsletter-front.onrender.com",
    image: "/images/news.png",
  },
  {
    name: "Dale Wears Ecommerce",
    description:
      "A sleek fashion eCommerce platform delivering premium shopping experiences. Features advanced product filtering, size recommendations, wishlist functionality, and secure checkout with multiple payment options. Built with performance optimization to handle high-traffic seasonal sales effortlessly.",
    tech: ["React", "Express", "Stripe"],
    demoLink: "https://dalewears.onrender.com",
    image: "/images/dala.png",
  },
  {
    name: "Tech Alpha Quiz",
    description:
      "An engaging gamified learning platform testing tech knowledge across multiple domains. Features timed challenges, leaderboards, progress tracking, and detailed explanations for each answer. Makes learning programming, web development, and computer science concepts fun and competitive.",
    tech: ["React", "Firebase", "Chart.js"],
    demoLink: "https://quiz-game-app-6qbj.onrender.com",
    image: "/images/alpha.png",
  },
  {
    name: "Jokes & Words App",
    description:
      "A delightful entertainment and learning app combining humor with vocabulary expansion. Fetches random jokes from multiple APIs while providing instant dictionary definitions. Perfect for quick breaks, language learners, and anyone seeking daily doses of laughter and knowledge.",
    tech: ["React", "Jokes API", "Dictionary API"],
    demoLink: "https://joke-app-btkm.onrender.com",
    image: "/images/jokes.png",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <span className="projects-tag">Portfolio</span>
          <h2
            ref={headingRef}
            className={`projects-title ${headingInView ? "animate" : ""}`}
          >
            Featured Projects
          </h2>
          <p className="projects-subtitle">
            A showcase of real-world applications I've crafted—each solving
            unique challenges with elegant code and thoughtful design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            const isEven = index % 2 === 0;

            return (
              <div
                ref={ref}
                key={project.name}
                className={`project-card ${inView ? "visible" : ""} ${
                  isEven ? "even" : "odd"
                }`}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="overlay-button"
                    >
                      <FaExternalLinkAlt />
                      <span>View Live Site</span>
                    </a>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-number">0{index + 1}</div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span>View Project</span>
                    <FaArrowRight className="link-arrow" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="projects-cta">
          <FaCode className="cta-icon" />
          <h3>Want to See More?</h3>
          <p>
            Check out my GitHub for additional projects and open-source
            contributions
          </p>
          <a
            href="https://github.com/Davefred-12"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            Visit GitHub Profile
            <FaExternalLinkAlt className="github-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
