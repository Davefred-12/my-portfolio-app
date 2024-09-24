/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projects = [
  {
    name: "To-Do List App",
    description:
      "A straightforward application that helps users efficiently manage tasks and to-dos. With a clean design and intuitive functionality, this app enables users to stay organized and prioritize their daily activities effortlessly.",
    demoLink: "https://todo-list-app-i5ik.onrender.com",
    image: "/src/assets/Images/todo.png",
  },
  {
    name: "Dale Wears Ecommerce Website",
    description:
      "An innovative ecommerce platform designed for clothing and accessories, offering a seamless shopping experience. Users can explore a diverse range of products and enjoy a user-friendly interface to enhance their online shopping journey.",
    demoLink: "https://dalewears.onrender.com",
    image: "/src/assets/Images/dala.png",
  },
  {
    name: "Foresite Engineering ",
    description:
      "A professional platform tailored for the engineering sector, offering solutions for project management and collaboration. This site connects users with essential resources and services to streamline their engineering projects..",
    demoLink: "https://qmoilandgas.com",
    image: "/src/assets/Images/cog.png",
  },
  {
    name: "NCCF Etinan ",
    description:
      "A straightforward application that helps users efficiently manage tasks and to-dos. With a clean design and intuitive functionality, this app enables users to stay organized and prioritize their daily activities effortlessly.",
    demoLink: "https://nccf-uuvk.onrender.com",
    image: "/src/assets/Images/nccf.png",
  },
  {
    name: "Dice Game",
    description:
      "A fun and interactive game where players roll virtual dice to compete. With simple mechanics and engaging visuals, it's the perfect way to enjoy a quick and exciting challenge with friends or on your own.",
    demoLink: "https://dice-game-app.onrender.com",
    image: "/src/assets/Images/dice.png",
  },
  {
    name: "Movie Search App ",
    description:
      "A professional platform tailored for the engineering sector, offering solutions for project management and collaboration. This site connects users with essential resources and services to streamline their engineering projects..",
    demoLink: "https://deluxe-panda-13911d.netlify.app",
    image: "/src/assets/Images/movie.png",
  },
  {
    name: "Tech Alpha Quiz ",
    description:
      "A dynamic and interactive quiz platform designed to challenge and enhance your tech knowledge. With a focus on cutting-edge topics and fun gameplay, it's perfect for tech enthusiasts looking to test their skills and learn something new.",
    demoLink: "https://quiz-game-app-6qbj.onrender.com",
    image: "/src/assets/Images/alpha.png",
  },
  {
    name: "GetLinked Technologies",
    description:
      "An engaging application focused on task management, providing users with tools to keep track of their tasks effectively. Its simple interface ensures that users can prioritize and manage their responsibilities with ease.",
    demoLink: "",
    image: "/src/assets/Images/getLinked.png",
  },
  {
    name: "Jokes and Word App",
    description:
      "Users can get random jokes with the click of a button, bringing laughter to their day. Additionally, the app allows users to enter words phonetics, and examples, making it a fun and educational tool. With a sleek design and engaging features, this app enhances learning and entertainment simultaneously.",
    demoLink: "https://joke-app-btkm.onrender.com",
    image: "/src/assets/Images/jokes.png",
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
