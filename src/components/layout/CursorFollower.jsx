import React, { useState, useEffect } from 'react';

export default function CursorFollower() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isDesktopDevice = window.matchMedia('(min-width: 1024px)').matches;
    setIsDesktop(isDesktopDevice);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isDesktopDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
        }}
      />
      <div
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-50 opacity-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.05s ease-out',
        }}
      />
    </>
  );
}
