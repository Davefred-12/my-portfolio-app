// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', image: '/src/assets/Images/html.png' },
  { name: 'CSS', image: '/src/assets/Images/css.jpg' },
  { name: 'JavaScript', image: '/src/assets/Images/js.png' },
  { name: 'React', image: '/src/assets/Images/react.png' },
  { name: 'Figma', image: '/src/assets/Images/pi.png' },
  { name: 'ExpressJs', image: '/src/assets/Images/express-js.png' },
  { name: 'Git/Gitub', image: '/src/assets/Images/ph.png' },
  { name: 'MongoDB', image: '/src/assets/Images/pj.png' },
  { name: 'PhotoShop', image: '/src/assets/Images/pl.jpg' },
  { name: 'NodeJs', image: '/src/assets/Images/pm.png' },
  { name: 'Problem Solving', image: '/src/assets/Images/pp.png' },
  { name: 'Team Work', image: '/src/assets/Images/po.jpg' },
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
