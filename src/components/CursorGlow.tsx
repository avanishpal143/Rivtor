import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      
      if (!isVisible) {
        setIsVisible(true);
        gsap.set(glowRef.current, { opacity: 1 });
      }

      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    // Initial state hidden
    if (glowRef.current) {
      gsap.set(glowRef.current, { opacity: 0 });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible]);

  return (
    <div 
      ref={glowRef} 
      className="cursor-glow" 
      style={{ display: 'block' }} 
    />
  );
};
