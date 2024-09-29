// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import './Skills.css';
// Skills data
const skills = [
  { name: 'HTML', image: '/images/html.png' },
  { name: 'CSS', image: '/images/css.jpg' },
  { name: 'JavaScript', image: '/images/js.png' },
  { name: 'React', image: '/images/react.png' },
  { name: 'Figma', image: '/images/pi.png' },
  { name: 'ExpressJs', image: '/images/express-js.png' },
  { name: 'Git/Github', image: '/images/ph.png' },
  { name: 'MongoDB', image: '/images/pj.png' },
  { name: 'PhotoShop', image: '/images/pl.jpg' },
  { name: 'NodeJs', image: '/images/pm.png' },
  { name: 'Problem Solving', image: '/images/pp.png' },
  { name: 'Team Work', image: '/images/po.jpg' },
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
