/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
// Importing images from the correct paths
import dalaImage from "../../assets/Images/dala.png";
import cogImage from "../../assets/Images/cog.png";
import getLinkedImage from "../../assets/Images/getLinked.png";
import alphaImage from "../../assets/Images/alpha.png";
import movieImage from "../../assets/Images/movie.png";
import nccfImage from "../../assets/Images/nccf.png";
import diceImage from "../../assets/Images/dice.png";
import jokesImage from "../../assets/Images/jokes.png";
import todoImage from "../../assets/Images/todo.png";

// Project data with imported images
const projects = [
  {
    name: "Dale Wears Ecommerce Website",
    description:
      "An innovative ecommerce platform designed for clothing and accessories, offering a seamless shopping experience. Users can explore a diverse range of products and enjoy a user-friendly interface to enhance their online shopping journey.",
    demoLink: "https://dalewears.onrender.com",
    image: dalaImage, // Use the imported image
  },
  {
    name: "Foresite Engineering ",
    description:
      "A professional platform tailored for the engineering sector, offering solutions for project management and collaboration. This site connects users with essential resources and services to streamline their engineering projects.",
    demoLink: "https://qmoilandgas.com",
    image: cogImage,
  },
  {
    name: "GetLinked Technologies",
    description:
      "An engaging application focused on task management, providing users with tools to keep track of their tasks effectively. Its simple interface ensures that users can prioritize and manage their responsibilities with ease.",
    demoLink: "",
    image: getLinkedImage,
  },
  {
    name: "Tech Alpha Quiz ",
    description:
      "A dynamic and interactive quiz platform designed to challenge and enhance your tech knowledge. With a focus on cutting-edge topics and fun gameplay, it's perfect for tech enthusiasts looking to test their skills and learn something new.",
    demoLink: "https://quiz-game-app-6qbj.onrender.com",
    image: alphaImage,
  },
  {
    name: "Movie Search App ",
    description:
      "A platform for movie enthusiasts to search and explore movies. It offers a sleek design and user-friendly interface to find information about films effortlessly.",
    demoLink: "https://deluxe-panda-13911d.netlify.app",
    image: movieImage,
  },
  {
    name: "NCCF Etinan ",
    description:
      "A platform that connects members of the National Christian Corpers Fellowship (NCCF), providing a central hub for updates, events, and resources.",
    demoLink: "https://nccf-uuvk.onrender.com",
    image: nccfImage,
  },
  {
    name: "Dice Game",
    description:
      "A fun and interactive game where players roll virtual dice to compete. With simple mechanics and engaging visuals, it's the perfect way to enjoy a quick and exciting challenge with friends or on your own.",
    demoLink: "https://dice-game-app.onrender.com",
    image: diceImage,
  },
  {
    name: "Jokes and Word App",
    description:
      "A simple app that allows users to get random jokes at the click of a button. It also includes a word search feature that provides phonetics, meanings, and examples of words.",
    demoLink: "https://joke-app-btkm.onrender.com",
    image: jokesImage,
  },
  {
    name: "To-Do List App",
    description:
      "A straightforward application that helps users efficiently manage tasks and to-dos. With a clean design and intuitive functionality, this app enables users to stay organized and prioritize their daily activities effortlessly.",
    demoLink: "https://todo-list-app-i5ik.onrender.com",
    image: todoImage,
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
