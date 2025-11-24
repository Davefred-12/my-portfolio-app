// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

// Skills data
const skills = [
  { name: 'HTML', image: '/images/html.png', category: 'Frontend' },
  { name: 'CSS', image: '/images/css.jpg', category: 'Frontend' },
  { name: 'JavaScript', image: '/images/js.png', category: 'Frontend' },
  { name: 'React', image: '/images/react.png', category: 'Frontend' },
  { name: 'React Native', image: '/images/react.png', category: 'Mobile' },
  { name: 'Node.js', image: '/images/pm.png', category: 'Backend' },
  { name: 'Express.js', image: '/images/express-js.png', category: 'Backend' },
  { name: 'MongoDB', image: '/images/pj.png', category: 'Database' },
  { name: 'Git/Github', image: '/images/ph.png', category: 'Tools' },
  { name: 'Figma', image: '/images/pi.png', category: 'Design' },
  { name: 'Photoshop', image: '/images/pl.jpg', category: 'Design' },
  { name: 'Problem Solving', image: '/images/pp.png', category: 'Soft Skills' },
  { name: 'Teamwork', image: '/images/po.jpg', category: 'Soft Skills' },
];

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const skillsRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = itemRefs.current.indexOf(entry.target);
          if (index !== -1 && !visibleItems.includes(index)) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, index]);
            }, index * 50); // Staggered animation
          }
        }
      });
    }, observerOptions);

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section ref={skillsRef} id="skills" className="skills">
      <div className="skills-container">
        {/* Header */}
        <div className="skills-header">
          <span className="skills-tag">Tech Stack</span>
          <h2 className="skills-title">Tools & Technologies I Master</h2>
          <p className="skills-subtitle">
            A comprehensive toolkit of modern technologies and frameworks that power my development process
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={el => itemRefs.current[index] = el}
              className={`skill-card ${visibleItems.includes(index) ? 'visible' : ''}`}
            >
              <div className="skill-image-wrapper">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                <div className="skill-overlay"></div>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;