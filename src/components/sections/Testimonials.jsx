import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { PORTFOLIO_DATA } from '../../data/portfolio';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const { ref, inView } = useScrollAnimation();

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -mr-48 -mb-48" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl -ml-48 transform -translate-y-1/2" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="text-sm font-mono text-accent uppercase tracking-wider">07 — Testimonials</span>
        </motion.div>

        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-4">Words From Clients</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            What amazing people I've had the privilege to work with have to say.
          </p>
        </div>

        {/* Carousel */}
        <motion.div
          ref={ref}
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="py-12"
          >
            {PORTFOLIO_DATA.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="group h-full p-8 rounded-2xl bg-gray-900 bg-opacity-50 border border-gray-800 hover:border-accent transition-all cursor-pointer glass-effect"
                  whileHover={{ y: -8, rotateZ: -1 }}
                  initial={{ rotateZ: 2, opacity: 0 }}
                  whileInView={{ rotateZ: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {/* Opening Quote */}
                  <div className="mb-6 flex items-center gap-2">
                    <Quote className="w-8 h-8 text-accent opacity-30" />
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic font-light">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 mb-6" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent opacity-20 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-semibold text-accent">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-light">{testimonial.author}</h4>
                      <p className="text-xs text-gray-400">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <motion.button
            className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 p-3 rounded-lg bg-accent text-neutral-dark hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 p-3 rounded-lg bg-accent text-neutral-dark hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Pagination */}
          <div className="swiper-pagination relative mt-8 flex justify-center gap-2" />
        </motion.div>
      </div>

      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 8px;
          height: 8px;
          background-color: rgba(200, 255, 0, 0.3) !important;
          border-radius: 50%;
        }
        :global(.swiper-pagination-bullet-active) {
          background-color: rgb(200, 255, 0) !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}
