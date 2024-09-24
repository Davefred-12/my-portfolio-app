// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
