/* eslint-disable no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projects = [
  {
    name: "Bellefull Foods",
    description:
      "Bellefull Foods is a cutting-edge eCommerce platform that focuses on providing an exceptional food delivery experience. Offering a variety of local and international cuisines, it enables customers to easily browse, order, and track their meals. The platform ensures a seamless user experience with its user-friendly interface and secure payment options.",
    demoLink: "https://food-delivery-app-client-fl4g.onrender.com",
    image: "/images/bellefull.png", // Direct URL from public folder
  },
  {
    name: "React Youtube Clone",
    description:
      "React YouTube Clone is a platform designed for movie enthusiasts to search, explore, and watch a variety of videos and movies. Built using React, this clone provides an intuitive interface for browsing video content by category, viewing video details, and watching trailers, all powered by YouTube's API for a real-time video experience.",
    demoLink: "https://youtube-clone-u9xn.onrender.com",
    image: "/images/youtube.png",
  },
  {
    name: "Dale Wears Ecommerce Website",
    description:
      "Dale Wears is a modern and innovative eCommerce platform dedicated to providing customers with a wide range of clothing and accessories. The website features an easy-to-navigate interface, allowing users to browse through various categories of products. It offers secure payment methods, personalized recommendations, and a smooth checkout process to ensure a seamless shopping experience. The platform also focuses on mobile responsiveness, making it accessible on all devices. Customers can explore new arrivals, sales, and exclusive deals while enjoying a rich visual experience.",
    demoLink: "https://dalewears.onrender.com",
    image: "/images/dala.png", // Direct URL from public folder
  },
  {
    name: "Foresite Engineering",
    description:
      "Foresite Engineering is a comprehensive platform tailored for professionals in the engineering sector. It offers a variety of tools and resources that help engineers manage projects, collaborate with teams, and stay updated on industry trends. The platform provides a space for networking and sharing technical knowledge. Features include project management tools, resource libraries, and a client dashboard for real-time updates on ongoing projects. Foresite Engineering aims to streamline operations, improve communication, and drive efficiency in the engineering industry.",
    demoLink: "https://qmoilandgas.com",
    image: "/images/cog.png",
  },
  {
    name: "GetLinked Technologies",
    description:
      "GetLinked Technologies is a task management application designed to help individuals and teams stay organized and productive. It offers a sleek, intuitive interface that allows users to create tasks, set deadlines, and prioritize their work. The platform also supports team collaboration, allowing members to track shared projects and communicate effectively. It features reminders, progress tracking, and visual task boards to keep users focused and on track. Whether you're working alone or with a team, GetLinked Technologies provides the tools needed to manage work and tasks efficiently.",
    demoLink: "",
    image: "/images/getLinked.png",
  },
  {
    name: "Tech Alpha Quiz",
    description:
      "Tech Alpha Quiz is an interactive and engaging quiz platform designed to challenge users' knowledge in various tech-related fields. The platform features a variety of quizzes covering topics like programming, web development, data science, and more. Each quiz is designed to test users’ skills, while providing immediate feedback and explanations for each question. Users can track their scores, see how they rank against others, and share their results on social media. Tech Alpha Quiz aims to make learning about technology fun and competitive, helping users improve their knowledge while enjoying the experience.",
    demoLink: "https://quiz-game-app-6qbj.onrender.com",
    image: "/images/alpha.png",
  },
  {
    name: "Movie Search App",
    description:
      "Movie Search App is a platform designed for movie lovers to explore and discover movies based on different genres, ratings, and release dates. With an easy-to-use search function, users can look up their favorite films, check detailed information, watch trailers, and read reviews from other users. The app provides access to a wide variety of movies, including trending films, new releases, and top-rated classics. It integrates APIs to ensure users have access to the most up-to-date information about movies. Movie Search App aims to be the go-to platform for film enthusiasts looking to explore their next watch.",
    demoLink: "https://deluxe-panda-13911d.netlify.app",
    image: "/images/movie.png",
  },
  {
    name: "NCCF Etinan",
    description:
      "NCCF Etinan is a digital platform created to connect and engage members of the National Christian Corpers Fellowship (NCCF). It provides members with a centralized space to access important information, event updates, and fellowship activities. The platform includes features such as member registration, event calendar, and an interactive discussion forum for sharing ideas and prayer requests. It also offers a directory for members to network and collaborate with one another. NCCF Etinan aims to foster a sense of community and spiritual growth within the fellowship.",
    demoLink: "https://nccf-uuvk.onrender.com",
    image: "/images/nccf.png",
  },
  {
    name: "Dice Game",
    description:
      "Dice Game is a fun and interactive online game where players roll virtual dice to generate random numbers and compete with others. The game offers multiple modes and customizable rules, allowing players to enjoy various versions of the dice-rolling experience. Users can track their scores, play against friends, and challenge themselves to achieve the highest roll. The game features real-time score updates, a simple yet engaging user interface, and a timer for each round. Dice Game is perfect for anyone looking to have a quick and entertaining break with friends or solo.",
    demoLink: "https://dice-game-app.onrender.com",
    image: "/images/dice.png",
  },
  {
    name: "Jokes and Word App",
    description:
      "Jokes and Word App is a simple yet entertaining platform that provides users with random jokes and word definitions. Users can refresh the app to receive new jokes, making it a great source of humor during breaks or when in need of a good laugh. Additionally, the app integrates a dictionary feature, allowing users to look up word definitions and expand their vocabulary. With its minimalistic design, the app is easy to use, and the content is updated regularly to ensure fresh jokes and definitions. Jokes and Word App is perfect for anyone looking to lighten their day with humor or expand their lexicon.",
    demoLink: "https://joke-app-btkm.onrender.com",
    image: "/images/jokes.png",
  },
  {
    name: "To-Do List App",
    description:
      "To-Do List App is a straightforward and user-friendly application that helps users organize their tasks and stay productive. It allows users to create, edit, and delete tasks, as well as set due dates and priorities for each task. The app includes features such as progress tracking, task categorization, and reminders to ensure users stay on top of their to-do list. With its clean interface and efficient design, the To-Do List App is perfect for anyone looking to improve their time management skills and maintain focus on their daily tasks.",
    demoLink: "https://todo-list-app-i5ik.onrender.com",
    image: "/images/todo.png",
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
