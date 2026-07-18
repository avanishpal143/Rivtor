import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiCalendar, FiArrowRight } from 'react-icons/fi';
import { MagneticButton } from '../components/MagneticButton';

export const FinalCTA: React.FC = () => {
  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-alt border-b border-border-brand overflow-hidden"
      id="contact"
    >
      {/* Background Glowing Ambient Orbs */}
      <motion.div 
        animate={{ y: [-15, 15, -15], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/10 to-transparent blur-3xl pointer-events-none" 
      />
      <motion.div 
        animate={{ y: [15, -15, 15], rotate: [360, 0, 360] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-transparent blur-3xl pointer-events-none" 
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Expensive looking Glass Container Card */}
        <div className="w-full max-w-5xl mx-auto backdrop-blur-2xl bg-white/70 border border-white/60 rounded-[40px] p-8 sm:p-16 lg:p-20 shadow-[0_20px_60px_rgba(232,237,247,0.7)] relative overflow-hidden flex flex-col items-center text-center space-y-10 group">
          
          {/* Subtle line sweep */}
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 ease-out pointer-events-none" />

          {/* Heading */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-primary font-bold text-xs tracking-wider uppercase font-mono block">
              // LET'S BUILD THE FUTURE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-text-brand leading-[1.08] tracking-tight">
              Ready to Build the Next Generation of Digital Solutions?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-body-brand leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you're planning a new software platform, modernizing enterprise infrastructure, or scaling an existing digital product, Rivtor AB provides the engineering expertise to help you move forward with confidence.
            </p>
          </div>

          {/* Interactive Call Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full justify-center">
            <MagneticButton 
              variant="primary" 
              onClick={() => window.open('mailto:Konwar@domain')}
            >
              <FiCalendar />
              <span>Schedule Consultation</span>
              <FiArrowRight />
            </MagneticButton>
            
            <MagneticButton 
              variant="secondary"
              onClick={() => window.open('mailto:Konwar@domain')}
            >
              <span>Talk to Our Engineering Team</span>
            </MagneticButton>
          </div>

          {/* Direct Address/Email Contact Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-border-brand/50 w-full max-w-md text-xs sm:text-sm font-semibold text-text-brand font-mono">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-bg-brand border border-border-brand flex items-center justify-center text-primary">
                <FiMail size={16} />
              </div>
              <span className="text-muted-brand font-normal">DIRECT EMAIL</span>
              <a href="mailto:Konwar@domain" className="hover:text-primary transition-colors">
                Konwar@domain
              </a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-bg-brand border border-border-brand flex items-center justify-center text-primary">
                <FiMapPin size={16} />
              </div>
              <span className="text-muted-brand font-normal">OFFICE LOCATION</span>
              <span className="text-text-brand">Sweden</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
