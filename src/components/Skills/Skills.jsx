// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './Skills.css';
import htmlImage from '/src/assets/Images/html.png';
import cssImage from '/src/assets/Images/css.jpg';
import jsImage from '/src/assets/Images/js.png';
import reactImage from '/src/assets/Images/react.png';
import figmaImage from '/src/assets/Images/pi.png';
import expressImage from '/src/assets/Images/express-js.png';
import gitImage from '/src/assets/Images/ph.png';
import mongoImage from '/src/assets/Images/pj.png';
import photoshopImage from '/src/assets/Images/pl.jpg';
import nodeImage from '/src/assets/Images/pm.png';
import problemSolvingImage from '/src/assets/Images/pp.png';
import teamworkImage from '/src/assets/Images/po.jpg';

const skills = [
  { name: 'HTML', image: htmlImage },
  { name: 'CSS', image: cssImage },
  { name: 'JavaScript', image: jsImage },
  { name: 'React', image: reactImage },
  { name: 'Figma', image: figmaImage },
  { name: 'ExpressJs', image: expressImage },
  { name: 'Git/Gitub', image: gitImage },
  { name: 'MongoDB', image: mongoImage },
  { name: 'PhotoShop', image: photoshopImage },
  { name: 'NodeJs', image: nodeImage },
  { name: 'Problem Solving', image: problemSolvingImage },
  { name: 'Team Work', image: teamworkImage },
  // add other skills here
];

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const section = skillsRef.current;
    const skillItems = section.querySelectorAll('.skill-item, h2');
    
    skillItems.forEach((item) => observer.observe(item));

    return () => {
      skillItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section ref={skillsRef} id="skills" className="skills">
      <h2>My Skillset</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <img src={skill.image} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
