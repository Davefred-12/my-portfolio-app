/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import NavBar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Companies from './components/Companies/Companies'; // NEW
import Testimonials from './components/Testimonials/Testimonials'; // NEW
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WelcomeNotification from './components/WelcomeNotification/WelcomeNotification';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setTimeout(() => setShowWelcome(true), 1000);
      localStorage.setItem('hasVisited', 'true');
    } else {
      setTimeout(() => setShowWelcome(true), 800);
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <NavBar />
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Companies />      {/* NEW - Auto-scrolling logos */}
        <Testimonials />   {/* NEW - Client testimonials */}
        <Contact />
        <Footer />
        {showWelcome && (
          <WelcomeNotification onClose={() => setShowWelcome(false)} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;

