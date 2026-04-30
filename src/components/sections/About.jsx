import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import CountUp from './CountUp';

export default function About() {
  const { ref, inView } = useScrollAnimation();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -mr-48" />

      <div className="container relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">02 — About</span>
        </motion.div>

        {/* Main Content Grid */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content - 7 columns */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Pull Quote */}
            <motion.blockquote
              variants={itemVariants}
              className="mb-12 border-l-4 border-accent pl-6"
            >
              <p className="text-2xl md:text-3xl font-serif font-light text-accent italic">
                "{PORTFOLIO_DATA.pullQuote}"
              </p>
            </motion.blockquote>

            {/* Bio Text */}
            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              <p className="text-gray-300 text-lg leading-relaxed">
                I combine strategic thinking with creative execution. My journey spans across full-stack development, 
                <span className="text-accent font-semibold"> design systems</span>, and product strategy. Every project 
                I work on gets the same level of care: thoughtful architecture, pixel-perfect interfaces, and 
                performance-first implementation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether building a <span className="text-accent font-semibold">SaaS platform</span> or designing a 
                component library, I obsess over details that make products feel effortless to use.
              </p>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              {['React', 'TypeScript', 'Node.js', 'Design Systems', 'UI/UX', 'Performance'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-accent bg-opacity-10 text-accent text-sm font-medium border border-accent border-opacity-20"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 5 columns */}
          <motion.div
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {PORTFOLIO_DATA.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-accent transition-colors"
                  whileHover={{ y: -4 }}
                >
                  <motion.div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                    {inView ? (
                      <CountUp
                        value={parseInt(stat.value)}
                        suffix={stat.value.includes('+') ? '+' : stat.value.includes('/') ? stat.value.split('/')[1] : ''}
                      />
                    ) : (
                      '0'
                    )}
                  </motion.div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="my-8 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"
            />

            {/* Fun Fact */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-lg bg-accent bg-opacity-5 border border-accent border-opacity-20"
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-accent font-semibold">Fun fact:</span> I can review a design mockup and 
                implement it pixel-perfect in code. My design background makes me obsessive about details others miss.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
