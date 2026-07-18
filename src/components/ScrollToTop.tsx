import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md bg-white/70 border border-border-brand/80 text-primary shadow-[0_8px_30px_rgba(46,91,255,0.15)] hover:shadow-[0_12px_40px_rgba(46,91,255,0.3)] hover:border-primary/40 hover:text-secondary transition-all duration-300 cursor-pointer group focus:outline-none"
          aria-label="Scroll to top"
        >
          {/* Subtle moving up icon on hover */}
          <motion.div
            className="flex items-center justify-center"
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <FiArrowUp size={20} className="stroke-[2.5]" />
          </motion.div>
          
          {/* Subtle outer glow element */}
          <span className="absolute inset-0 rounded-full border border-primary/20 scale-100 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
