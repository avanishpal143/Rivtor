import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'text';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Limit pull distance
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none overflow-hidden group";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-[0_4px_20px_rgba(46,91,255,0.25)] hover:shadow-[0_8px_30px_rgba(46,91,255,0.4)] border border-transparent",
    secondary: "bg-white text-text-brand border border-border-brand hover:border-accent shadow-[0_2px_10px_rgba(232,237,247,0.5)] hover:shadow-[0_8px_20px_rgba(232,237,247,0.8)]",
    text: "bg-transparent text-primary hover:text-secondary px-4 py-2"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {/* Button Ripple/Glow Effect */}
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-white/10 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-150 pointer-events-none" />
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 w-full h-full bg-soft-blue/20 scale-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-150 pointer-events-none" />
      )}
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
