import { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';

export const useActiveSection = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useActiveSection must be used within NavigationProvider');
  }
  return context;
};
