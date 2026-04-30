import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const { ref, inView } = useScrollAnimation();
  const [activeExperience, setActiveExperience] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -ml-48 -mt-48" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">06 — Experience</span>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">My Journey</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            one years of crafting digital experiences, leading teams, and shipping products.
          </p>
        </div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group"
            >
              <div className="flex gap-6 md:gap-12">
                {/* Timeline Line and Dot */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-accent bg-neutral-dark cursor-pointer hover:scale-150 transition-all"
                    whileHover={{ scale: 1.5, boxShadow: '0 0 20px rgba(200, 255, 0, 0.6)' }}
                    onClick={() => setActiveExperience(index)}
                  />
                  {index < PORTFOLIO_DATA.experience.length - 1 && (
                    <motion.div
                      className="w-1 h-20 bg-gradient-to-b from-accent to-gray-700"
                      initial={{ scaleY: 0 }}
                      animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                      style={{ originY: 0 }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  className={`pb-8 flex-1 p-6 rounded-xl border transition-all ${
                    activeExperience === index
                      ? 'border-accent bg-accent bg-opacity-10'
                      : 'border-gray-800 bg-gray-900 bg-opacity-30 hover:border-gray-700'
                  }`}
                  whileHover={{ x: 8 }}
                  onClick={() => setActiveExperience(index)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-neutral-light mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-3 font-mono uppercase tracking-wider">
                    {exp.period}
                  </p>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <motion.ul
                    className="space-y-2"
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      activeExperience === index
                        ? { opacity: 1, height: 'auto' }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </motion.ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
