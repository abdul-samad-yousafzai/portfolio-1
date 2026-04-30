import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
  };

  return (
    <footer className="relative bg-neutral-dark border-t border-gray-800">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />

      <div className="container py-12 md:py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-serif font-bold text-accent mb-2">AS</h3>
            <p className="text-gray-400 text-sm">{PORTFOLIO_DATA.shortBio}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-accent text-sm transition-colors capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              {PORTFOLIO_DATA.social.map((social) => {
                const IconComponent = socialIcons[social.icon] || Mail;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-900 hover:bg-accent text-gray-400 hover:text-neutral-dark transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Abdul Samad. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs font-mono">
            Built with <span className="text-accent">♥</span> + React
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
