// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './Skills.css';
import htmlImage from '@assets/Images/html.png';
import cssImage from '@assets/Images/css.jpg';
import jsImage from '@assets/Images/js.png';
import reactImage from '@assets/Images/react.png';
import figmaImage from '@assets/Images/pi.png';
import expressImage from '@assets/Images/express-js.png';
import gitImage from '@assets/Images/ph.png';
import mongoImage from '@assets/Images/pj.png';
import photoshopImage from '@assets/Images/pl.jpg';
import nodeImage from '@assets/Images/pm.png';
import problemSolvingImage from '@assets/Images/pp.png';
import teamworkImage from '@assets/Images/po.jpg';

// Skills data
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
