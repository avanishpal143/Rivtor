import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCalendar } from 'react-icons/fi';
import { MagneticButton } from './MagneticButton';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Expertise", id: "expertise" },
    { name: "Architecture", id: "architecture" },
    { name: "Process", id: "process" },
    { name: "Industries", id: "industries" },
    { name: "FAQ", id: "faq" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-border-brand/60 py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo Brand */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src="/logo.png" 
              alt="Rivtor AB Logo" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-xs font-semibold text-body-brand hover:text-primary transition-colors cursor-pointer select-none uppercase tracking-wider font-mono"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:block">
            <MagneticButton 
              variant="secondary"
              className="!px-6 !py-2.5 !text-xs font-bold uppercase tracking-wider font-mono"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <FiCalendar />
              <span>Discuss Project</span>
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-bg-alt border border-border-brand flex items-center justify-center text-text-brand hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] bg-white/95 backdrop-blur-lg z-40 lg:hidden flex flex-col p-6 space-y-6 border-t border-border-brand"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left py-3 border-b border-border-brand/40 text-base font-extrabold text-text-brand uppercase font-mono tracking-wider"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                scrollToSection('contact');
              }}
              className="w-full py-4 bg-primary text-white rounded-full font-bold flex items-center justify-center gap-2"
            >
              <FiCalendar />
              <span>Schedule Consultation</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
