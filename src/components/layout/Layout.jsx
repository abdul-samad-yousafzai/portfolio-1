import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import MobileMenu from './MobileMenu';
import CursorFollower from './CursorFollower';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-dark text-neutral-light">
      <CursorFollower />

      {/* Loading Screen */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-neutral-dark z-50 flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-serif font-bold text-accent">AS</h1>
            <p className="text-sm text-gray-400 mt-4 font-mono">Loading</p>
          </motion.div>
        </motion.div>
      )}

      <Navbar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="relative">{children}</main>

      <Footer />
      <BackToTop />
    </div>
  );
}
