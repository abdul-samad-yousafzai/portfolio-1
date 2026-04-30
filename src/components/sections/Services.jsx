import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { Code, Palette, Grid, Zap, ArrowRight } from 'lucide-react';

const iconMap = {
  code: Code,
  palette: Palette,
  grid: Grid,
  zap: Zap,
};

export default function Services() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -mr-48 transform -translate-y-1/2" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">05 — Services</span>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">What I Offer</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            End-to-end services to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PORTFOLIO_DATA.services.map((service) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-2xl bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-accent transition-all overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Number Background */}
                <div className="absolute -top-8 -right-8 text-9xl font-serif font-bold text-accent opacity-5 group-hover:opacity-10 transition-opacity">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-accent bg-opacity-10 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-neutral-light mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-accent bg-opacity-10 text-accent text-xs font-mono border border-accent border-opacity-20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Ready to get started?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-neutral-dark font-semibold rounded-lg hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
