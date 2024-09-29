/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projects = [
  {
    name: "Dale Wears Ecommerce Website",
    description: "An innovative ecommerce platform designed for clothing and accessories.",
    demoLink: "https://dalewears.onrender.com",
    image: '/images/dala.png', // Direct URL from public folder
  },
  {
    name: "Foresite Engineering",
    description: "A professional platform tailored for the engineering sector.",
    demoLink: "https://qmoilandgas.com",
    image: '/images/cog.png',
  },
  {
    name: "GetLinked Technologies",
    description: "An engaging application focused on task management.",
    demoLink: "",
    image: '/images/getLinked.png',
  },
  {
    name: "Tech Alpha Quiz",
    description: "A dynamic and interactive quiz platform.",
    demoLink: "https://quiz-game-app-6qbj.onrender.com",
    image: '/images/alpha.png',
  },
  {
    name: "Movie Search App",
    description: "A platform for movie enthusiasts to search and explore movies.",
    demoLink: "https://deluxe-panda-13911d.netlify.app",
    image: '/images/movie.png',
  },
  {
    name: "NCCF Etinan",
    description: "A platform that connects members of the National Christian Corpers Fellowship.",
    demoLink: "https://nccf-uuvk.onrender.com",
    image: '/images/nccf.png',
  },
  {
    name: "Dice Game",
    description: "A fun and interactive game where players roll virtual dice.",
    demoLink: "https://dice-game-app.onrender.com",
    image: '/images/dice.png',
  },
  {
    name: "Jokes and Word App",
    description: "A simple app that allows users to get random jokes and word definitions.",
    demoLink: "https://joke-app-btkm.onrender.com",
    image: '/images/jokes.png',
  },
  {
    name: "To-Do List App",
    description: "A straightforward application that helps users efficiently manage tasks.",
    demoLink: "https://todo-list-app-i5ik.onrender.com",
    image: '/images/todo.png',
  },
];

const Projects = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="projects">
      {/* Add the 'animate' class when the heading is in view */}
      <h2
        ref={headingRef}
        className={`projects-heading ${headingInView ? "animate" : ""}`}
      >
        What I have Done
      </h2>
      <div className="projects-grid">
        {projects.map((project) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div
              ref={ref}
              key={project.name}
              className={`project-item ${inView ? "animate" : ""}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-button"
                >
                  See Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
