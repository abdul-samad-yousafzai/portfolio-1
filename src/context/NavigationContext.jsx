import React, { createContext, useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const debouncedScroll = () => {
      handleScroll();
    };

    window.addEventListener('scroll', debouncedScroll);
    return () => window.removeEventListener('scroll', debouncedScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const value = {
    activeSection,
    setActiveSection,
    scrollY,
    scrollToSection,
  };

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};
