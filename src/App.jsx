import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider } from './context/NavigationContext';
import Layout from './components/layout/Layout';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Services = lazy(() => import('./components/sections/Services'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Contact = lazy(() => import('./components/sections/Contact'));

function Home() {
  return (
    <main>
      <Suspense fallback={<div />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div />}>
        <About />
      </Suspense>
      <Suspense fallback={<div />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div />}>
        <Services />
      </Suspense>
      <Suspense fallback={<div />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div />}>
        <Contact />
      </Suspense>
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </NavigationProvider>
    </ThemeProvider>
  );
}