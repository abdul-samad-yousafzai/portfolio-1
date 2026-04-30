import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useScrollAnimation';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useLocalStorage('theme-dark', true);
  const [isSystemTheme, setIsSystemTheme] = useLocalStorage('theme-system', false);

  useEffect(() => {
    if (isSystemTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => setIsDark(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [isSystemTheme, setIsDark]);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setIsSystemTheme(false);
  };

  const setSystemTheme = (useSystem) => {
    setIsSystemTheme(useSystem);
    if (useSystem) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  };

  const value = {
    isDark,
    toggleTheme,
    setSystemTheme,
    isSystemTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
