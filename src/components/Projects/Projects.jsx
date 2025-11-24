/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projects = [
   {
    name: "Mo Apartments",
    description:
      "Bellefull Foods is a cutting-edge eCommerce platform that focuses on providing an exceptional food delivery experience. Offering a variety of local and international cuisines, it enables customers to easily browse, order, and track their meals. The platform ensures a seamless user experience with its user-friendly interface and secure payment options.",
    demoLink: "https://moapartment.com",
    image: "/images/mos.png",
  },
   {
    name: "Opajr Books",
    description:
      "Bellefull Foods is a cutting-edge eCommerce platform that focuses on providing an exceptional food delivery experience. Offering a variety of local and international cuisines, it enables customers to easily browse, order, and track their meals. The platform ensures a seamless user experience with its user-friendly interface and secure payment options.",
    demoLink: "https://opajr.com",
    image: "/images/opa.png",
  },
   {
    name: "Debcas Healthcare",
    description:
      "Bellefull Foods is a cutting-edge eCommerce platform that focuses on providing an exceptional food delivery experience. Offering a variety of local and international cuisines, it enables customers to easily browse, order, and track their meals. The platform ensures a seamless user experience with its user-friendly interface and secure payment options.",
    demoLink: "https://debcashealthcare.co.uk",
    image: "/images/deb.png",
  },
   {
    name: "Uncle Ajala",
    description:
      "Bellefull Foods is a cutting-edge eCommerce platform that focuses on providing an exceptional food delivery experience. Offering a variety of local and international cuisines, it enables customers to easily browse, order, and track their meals. The platform ensures a seamless user experience with its user-friendly interface and secure payment options.",
    demoLink: "https://https://uncleajala.onrender.com/",
    image: "/images/uncle.png",
  },
  {
    name: "Bellefull Foods",
    description:
      "Bellefull Foods is a cutting-edge eCommerce platform that focuses on providing an exceptional food delivery experience. Offering a variety of local and international cuisines, it enables customers to easily browse, order, and track their meals. The platform ensures a seamless user experience with its user-friendly interface and secure payment options.",
    demoLink: "https://food-delivery-app-client-fl4g.onrender.com",
    image: "/images/bellefull.png",
  },
  {
    name: "React Youtube Clone",
    description:
      "React YouTube Clone is a platform designed for movie enthusiasts to search, explore, and watch a variety of videos and movies. Built using React, this clone provides an intuitive interface for browsing video content by category, viewing video details, and watching trailers, all powered by YouTube's API for a real-time video experience.",
    demoLink: "https://youtube-clone-u9xn.onrender.com",
    image: "/images/youtube.png",
  },
  {
    name: "TechAlpha Newsletter",
    description:
      "A dynamic web application that delivers curated tech insights and trending content, designed to keep tech enthusiasts informed and engaged. The platform offers a sleek, user-friendly interface for exploring the latest technological developments, industry news, and innovative breakthroughs.",
    demoLink: "https://techalpha-newsletter-front.onrender.com",
    image: "/images/news.png",
  },
  {
    name: "Dale Wears Ecommerce Website",
    description:
      "Dale Wears is a modern and innovative eCommerce platform dedicated to providing customers with a wide range of clothing and accessories. The website features an easy-to-navigate interface, allowing users to browse through various categories of products. It offers secure payment methods, personalized recommendations, and a smooth checkout process to ensure a seamless shopping experience.",
    demoLink: "https://dalewears.onrender.com",
    image: "/images/dala.png",
  },


  {
    name: "Tech Alpha Quiz",
    description:
      "Tech Alpha Quiz is an interactive and engaging quiz platform designed to challenge users' knowledge in various tech-related fields. The platform features a variety of quizzes covering topics like programming, web development, data science, and more. Each quiz is designed to test users’ skills, while providing immediate feedback and explanations for each question. Tech Alpha Quiz aims to make learning about technology fun and competitive, helping users improve their knowledge while enjoying the experience.",
    demoLink: "https://quiz-game-app-6qbj.onrender.com",
    image: "/images/alpha.png",
  },
 
 
  {
    name: "Jokes and Word App",
    description:
      "Jokes and Word App is a simple yet entertaining platform that provides users with random jokes and word definitions. Users can refresh the app to receive new jokes, making it a great source of humor during breaks or when in need of a good laugh. Additionally, the app integrates a dictionary feature, allowing users to look up word definitions and expand their vocabulary. Jokes and Word App is perfect for anyone looking to lighten their day with humor or expand their lexicon.",
    demoLink: "https://joke-app-btkm.onrender.com",
    image: "/images/jokes.png",
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
