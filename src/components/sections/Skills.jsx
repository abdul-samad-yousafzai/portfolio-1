import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA, SKILL_CATEGORIES } from '../../data/portfolio';
import { Code, Database, Palette, Zap, Grid, Network, Box, Cloud, GitBranch, Square } from 'lucide-react';

const iconMap = {
  code: Code,
  database: Database,
  palette: Palette,
  zap: Zap,
  grid: Grid,
  network: Network,
  box: Box,
  cloud: Cloud,
  gitbranch: GitBranch,
  square: Square,
};

export default function Skills() {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(200, 255, 0, .05) 25%, rgba(200, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(200, 255, 0, .05) 75%, rgba(200, 255, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(200, 255, 0, .05) 25%, rgba(200, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(200, 255, 0, .05) 75%, rgba(200, 255, 0, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">03 — Skills</span>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Technical Arsenal</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A curated collection of technologies and tools I've mastered over years of building digital products.
          </p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                activeCategory === category
                  ? 'bg-accent text-neutral-dark'
                  : 'bg-gray-900 text-gray-400 hover:text-accent border border-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="category-indicator"
                  className="absolute inset-0 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="group p-6 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-accent transition-all cursor-pointer"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 0 20px rgba(200, 255, 0, 0.2)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-200 group-hover:text-accent transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">{skill.category}</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-accent bg-opacity-10 text-accent flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-accent opacity-80"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>

                  {/* Proficiency Text */}
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xs text-gray-400">Proficiency</span>
                    <span className="text-xs font-semibold text-accent">{skill.proficiency}%</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 pt-12 border-t border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Technologies', value: PORTFOLIO_DATA.skills.length },
            { label: 'Categories', value: SKILL_CATEGORIES.length - 1 },
            { label: 'Years Experience', value: '6+' },
            { label: 'Avg Proficiency', value: '88%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-serif font-bold text-accent mb-2">{stat.value}</div>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
