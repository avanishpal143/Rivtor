import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { 
        y: -6, 
        boxShadow: "0 20px 40px rgba(232, 237, 247, 0.8)",
        borderColor: "rgba(139, 92, 246, 0.3)" 
      } : undefined}
      className={`
        relative backdrop-blur-xl bg-white/80 border border-border-brand/60 
        rounded-[24px] shadow-[0_4px_24px_rgba(232,237,247,0.4)] overflow-hidden p-8 
        transition-all duration-500 ease-out group ${className}
      `}
    >
      {/* Glow Sweep Effect on Hover */}
      {hoverEffect && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />
      )}
      
      {/* Accent Corner Glow */}
      <span className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
