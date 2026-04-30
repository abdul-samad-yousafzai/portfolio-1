import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA, PROJECT_CATEGORIES } from '../../data/portfolio';
import { ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  const { ref, inView } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((project) => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">04 — Projects</span>
        </motion.div>

        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Featured Work</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            A selection of projects that showcase my approach to web development and design.
          </p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {PROJECT_CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-neutral-dark'
                  : 'bg-gray-900 text-gray-400 hover:text-accent border border-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className={`group relative rounded-2xl overflow-hidden border border-gray-800 hover:border-accent transition-all ${
                  index === 0 && activeCategory === 'All' ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Background Image Placeholder */}
                <div className="relative h-64 md:h-96 bg-gradient-to-br from-accent to-accent opacity-10 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent via-transparent to-accent opacity-20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark via-neutral-dark/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-neutral-light mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm md:text-base mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags?.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-accent bg-opacity-20 text-accent text-xs font-mono border border-accent border-opacity-30"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags?.length > 3 && (
                          <span className="px-3 py-1 text-gray-400 text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-accent font-mono uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* CTA Links */}
                    <div className="flex gap-3 pt-4">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-neutral-dark font-semibold hover:shadow-glow transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-neutral-dark rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {filteredProjects.length < PORTFOLIO_DATA.projects.length && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setActiveCategory('All')}
              className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-neutral-dark transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
