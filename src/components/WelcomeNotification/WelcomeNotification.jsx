/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './WelcomeNotification.css';

const WelcomeNotification = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const hasVisited = localStorage.getItem('hasVisited');
  const isReturning = hasVisited === 'true';

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);

    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  return (
    <div className={`welcome-notification ${isVisible ? 'visible' : ''} ${isClosing ? 'closing' : ''}`}>
      <div className="notification-content">
        <div className="notification-icon">
          {isReturning ? '👋' : '✨'}
        </div>
        <div className="notification-text">
          <h4>{isReturning ? 'Welcome Back!' : 'Welcome to DaleTech!'}</h4>
          <p>{isReturning ? 'Great to see you again!' : 'Thanks for visiting my portfolio'}</p>
        </div>
        <button className="notification-close" onClick={handleClose}>
          ×
        </button>
      </div>
      <div className="notification-progress"></div>
    </div>
  );
};

export default WelcomeNotification;