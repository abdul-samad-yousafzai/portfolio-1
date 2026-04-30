export const PORTFOLIO_DATA = {
  name: 'Abdul Samad',
  role: 'Full-Stack Developer & Designer',
  bio: 'I craft digital experiences that blend precision with creativity. With 1+ years building scalable web applications and leading design systems, I create products that feel intuitive, look stunning, and perform flawlessly.',
  
  shortBio: 'Crafting digital experiences that inspire.',
  
  tagline: 'Full-stack developer with a passion for design, always shipping products that matter.',
  
  email: 'abdulsamadyousafzi@gmail.com',
  phone: '+92 311 9111844',
  location: 'Peshawar Pakistan',
  
  pullQuote: 'Design is not just what it looks like and feels like. Design is how it works.',
  
  stats: [
    { label: 'Years of Experience', value: '1+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '30+' },
    { label: 'Avg Client Rating', value: '4.9/5' },
  ],
  
  skills: [
    // Frontend
    { name: 'React', category: 'Frontend', proficiency: 95, icon: 'code' },
    { name: 'TypeScript', category: 'Frontend', proficiency: 90, icon: 'code' },
    { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95, icon: 'palette' },
    { name: 'Vue.js', category: 'Frontend', proficiency: 85, icon: 'code' },
    { name: 'Next.js', category: 'Frontend', proficiency: 92, icon: 'code' },
    { name: 'Framer Motion', category: 'Frontend', proficiency: 88, icon: 'zap' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', proficiency: 90, icon: 'server' },
    { name: 'Express.js', category: 'Backend', proficiency: 88, icon: 'server' },
    { name: 'PostgreSQL', category: 'Backend', proficiency: 85, icon: 'database' },
    { name: 'MongoDB', category: 'Backend', proficiency: 82, icon: 'database' },
    { name: 'Python', category: 'Backend', proficiency: 80, icon: 'code' },
    { name: 'GraphQL', category: 'Backend', proficiency: 85, icon: 'network' },
    
    // DevOps & Tools
    { name: 'Git & GitHub', category: 'Tools', proficiency: 95, icon: 'gitbranch' },
    { name: 'Docker', category: 'Tools', proficiency: 80, icon: 'box' },
    { name: 'AWS', category: 'Tools', proficiency: 78, icon: 'cloud' },
    { name: 'CI/CD', category: 'Tools', proficiency: 85, icon: 'zap' },
    { name: 'Figma', category: 'Design', proficiency: 92, icon: 'square' },
    { name: 'UI/UX Design', category: 'Design', proficiency: 90, icon: 'square' },
  ],
  
  services: [
    {
      id: 1,
      number: '01',
      title: 'Web Development',
      description: 'Building performant, scalable web applications with modern frameworks and best practices.',
      icon: 'code',
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    },
    {
      id: 2,
      number: '02',
      title: 'UI/UX Design',
      description: 'Designing intuitive interfaces and experiences that users love, backed by research and testing.',
      icon: 'palette',
      tags: ['Figma', 'Wireframing', 'Prototyping', 'User Research'],
    },
    {
      id: 3,
      number: '03',
      title: 'Design Systems',
      description: 'Creating reusable component libraries and design tokens for consistent, scalable products.',
      icon: 'grid',
      tags: ['Component Libraries', 'Design Tokens', 'Documentation'],
    },
    {
      id: 4,
      number: '04',
      title: 'Web Performance',
      description: 'Optimizing applications for speed, accessibility, and SEO to ensure best-in-class user experience.',
      icon: 'zap',
      tags: ['Performance', 'Accessibility', 'SEO', 'Best Practices'],
    },
  ],
  
  projects: [
    {
      id: 1,
      title: 'SaaS Analytics Platform',
      description: 'A comprehensive analytics dashboard for e-commerce businesses with real-time data visualization.',
      longDescription: 'Built a full-stack SaaS platform helping 500+ e-commerce businesses track sales, customer behavior, and marketing performance. Designed custom data visualization components and implemented WebSocket-based real-time updates for live metrics.',
      image: '/images/project-1.jpg',
      category: 'Web Development',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSockets', 'D3.js'],
      link: 'https://analytics-demo.example.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile-First Design System',
      description: 'Comprehensive component library with 80+ components for a Fortune 500 company.',
      longDescription: 'Led design and development of a scalable design system used across 15+ internal products. Documented 80+ components with accessible HTML/CSS and React implementations.',
      image: '/images/project-2.jpg',
      category: 'Design',
      tags: ['Figma', 'React', 'CSS-in-JS', 'Accessibility', 'Documentation'],
      link: 'https://design-system-demo.example.com',
      featured: false,
    },
    {
      id: 3,
      title: 'AI Content Generator',
      description: 'Intelligent tool for creating SEO-optimized content using machine learning.',
      longDescription: 'Developed a web app that uses AI to generate marketing copy. Implemented advanced filtering, A/B testing features, and integrated with OpenAI API.',
      image: '/images/project-3.jpg',
      category: 'Web Development',
      tags: ['Next.js', 'OpenAI', 'Tailwind CSS', 'Stripe', 'Python'],
      link: 'https://content-gen-demo.example.com',
      featured: true,
    },
    {
      id: 4,
      title: 'Fitness App Dashboard',
      description: 'Workout tracking and progress visualization for personal trainers.',
      image: '/images/project-4.jpg',
      category: 'Web Development',
      tags: ['React', 'Firebase', 'Chart.js', 'Responsive'],
      featured: false,
    },
    {
      id: 5,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with inventory management and payment integration.',
      image: '/images/project-5.jpg',
      category: 'Web Development',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Admin Panel'],
      featured: false,
    },
    {
      id: 6,
      title: 'Real Estate Marketplace',
      description: 'Property listing platform with advanced search and virtual tours.',
      image: '/images/project-6.jpg',
      category: 'Web Development',
      tags: ['React', 'Google Maps', 'AWS S3', 'Node.js'],
      featured: false,
    },
  ],
  
  experience: [
    {
      id: 1,
      role: 'Senior Full-Stack Developer',
      company: 'TechVision Labs',
      period: '2022 - Present',
      description: 'Leading development of SaaS platform serving 1000+ enterprises. Architected microservices infrastructure and mentored junior developers.',
      responsibilities: [
        'Architected and deployed microservices infrastructure handling 10M+ requests/month',
        'Mentored 5 junior developers and established coding standards',
        'Reduced app bundle size by 40% through code optimization',
      ],
    },
    {
      id: 2,
      role: 'Full-Stack Developer',
      company: 'Digital Innovations Co',
      period: '2020 - 2022',
      description: 'Developed multiple web applications from concept to production. Collaborated with design team on UI/UX improvements.',
      responsibilities: [
        'Built 8+ client projects using React, Node.js, and PostgreSQL',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Created reusable component library with 50+ components',
      ],
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'WebCraft Studio',
      period: '2018 - 2020',
      description: 'Focused on building responsive, accessible user interfaces. Collaborated with UX designers and backend teams.',
      responsibilities: [
        'Developed responsive websites reaching 500K+ monthly users',
        'Improved Core Web Vitals score from 45 to 92',
        'Led accessibility audit and remediation effort',
      ],
    },
  ],
  
  testimonials: [
    {
      id: 1,
      quote: 'Abdul transformed our product vision into reality. His attention to detail and deep technical knowledge made all the difference. We shipped 3 months ahead of schedule.',
      author: 'Sarah Chen',
      title: 'Product Manager, TechCorp',
      company: 'TechCorp',
      avatar: '/images/avatar-1.jpg',
    },
    {
      id: 2,
      quote: 'Working with Abdul was a game-changer for our startup. He not only built an incredible platform but also mentored our junior team members. Highly recommended!',
      author: 'Marcus Johnson',
      title: 'CEO & Founder',
      company: 'StartupXYZ',
      avatar: '/images/avatar-2.jpg',
    },
    {
      id: 3,
      quote: 'The design system Abdul created unified our product ecosystem across 15+ teams. The documentation and support were exceptional.',
      author: 'Elena Rodriguez',
      title: 'Design Lead, InnovateCorp',
      company: 'InnovateCorp',
      avatar: '/images/avatar-3.jpg',
    },
    {
      id: 4,
      quote: 'Outstanding developer with great communication skills. Abdul explained complex technical concepts in ways the entire team could understand.',
      author: 'James Park',
      title: 'CTO, FutureData',
      company: 'FutureData',
      avatar: '/images/avatar-4.jpg',
    },
  ],
  
  social: [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    { name: 'Dribbble', url: 'https://dribbble.com', icon: 'dribbble' },
    { name: 'Email', url: 'mailto:abdulsamadyousafzi@gmail.com', icon: 'mail' },
  ],
  
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ],
  
  cta: {
    primary: 'Get In Touch',
    secondary: 'View My Work',
  },
  
  awards: [
    'Best Web Design 2023 - Digital Design Awards',
    'Top 100 Developers - Tech Excellence Summit',
    'Innovation Award - Web Development Conference 2022',
  ],
};

export const PROJECT_CATEGORIES = ['All', 'Web Development', 'Design', 'Mobile', 'AI/ML'];

export const SKILL_CATEGORIES = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];
