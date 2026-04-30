import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolio';

const roleVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 + 0.5, duration: 0.6 },
  }),
  exit: { opacity: 0, y: -10 },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Creative Technologist'];
  const [firstName, lastName] = PORTFOLIO_DATA.name.split(' ');

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(200, 255, 0, .05) 25%, rgba(200, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(200, 255, 0, .05) 75%, rgba(200, 255, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200, 255, 0, .05) 25%, rgba(200, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(200, 255, 0, .05) 75%, rgba(200, 255, 0, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '100px 100px',
          }}
        />

        {/* Floating numbers */}
        <motion.div
          className="absolute top-32 left-10 text-8xl font-serif font-bold text-accent opacity-5"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          01
        </motion.div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Subtitle */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-accent" />
            <span className="text-sm font-mono text-accent uppercase tracking-wider">Welcome to my portfolio</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6"
          >
            <span className="block text-neutral-light">I'm {firstName}</span>
            <span className="block text-accent">{lastName}</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div variants={itemVariants} className="mb-8 h-16 md:h-20">
            <motion.p
              key={roleIndex}
              className="text-xl md:text-2xl text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              {roles[roleIndex]}
            </motion.p>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed"
          >
            {PORTFOLIO_DATA.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-accent text-neutral-dark font-semibold rounded-lg hover:shadow-glow transition-all"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(200, 255, 0, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-neutral-dark transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4"
          >
            {[
              { icon: Github, link: 'https://github.com' },
              { icon: Linkedin, link: 'https://linkedin.com' },
              { icon: Twitter, link: 'https://twitter.com' },
              { icon: Mail, link: `mailto:${PORTFOLIO_DATA.email}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900 text-accent hover:bg-accent hover:text-neutral-dark transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          className="relative hidden md:flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-80 h-80">
            {/* Orbiting rings */}
            <motion.div
              className="absolute inset-0 border-2 border-accent border-opacity-20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-12 border border-accent border-opacity-10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />

            {/* Profile Image Container */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-accent border-opacity-30">
              {/* Placeholder - replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-accent opacity-20 to-accent opacity-5 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Portrait Image</span>
              </div>
            </div>

            {/* Glowing accent */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent opacity-20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Scroll</span>
        <motion.div
          className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
