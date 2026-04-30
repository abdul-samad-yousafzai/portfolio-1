import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { Mail, Phone, MapPin, Send, Check, Loader } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useScrollAnimation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsLoading(false);
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -ml-48 -mt-48" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">08 — Contact</span>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a project in mind? I'd love to hear about it. Get in touch with me today.
          </p>
        </div>

        {/* Main Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
          >
            {[
              {
                icon: Mail,
                label: 'Email',
                value: PORTFOLIO_DATA.email,
                link: `mailto:${PORTFOLIO_DATA.email}`,
              },
              {
                icon: Phone,
                label: 'Phone',
                value: PORTFOLIO_DATA.phone,
                link: `tel:${PORTFOLIO_DATA.phone}`,
              },
              {
                icon: MapPin,
                label: 'Location',
                value: PORTFOLIO_DATA.location,
                link: '#',
              },
            ].map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-accent transition-all"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-accent bg-opacity-10 text-accent flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                    <p className="text-neutral-light font-semibold hover:text-accent transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-2 p-8 rounded-2xl glass-effect border border-gray-800"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:outline-none focus:border-accent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:outline-none focus:border-accent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  id="subject"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:outline-none focus:border-accent transition-colors ${
                    errors.subject ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Project Inquiry"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-accent text-neutral-dark font-semibold rounded-lg hover:shadow-glow disabled:opacity-70 transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Sent Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
