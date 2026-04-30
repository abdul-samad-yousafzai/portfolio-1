import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';

const menuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const linkVariants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export default function MobileMenu({ isOpen, onClose }) {
  const { scrollToSection } = useActiveSection();
  const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];

  const handleNavClick = (item) => {
    scrollToSection(item);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-neutral-dark z-30 md:hidden"
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="flex flex-col items-center justify-center h-full gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-3xl font-serif capitalize text-accent hover:text-gray-300 transition-colors"
                variants={linkVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
