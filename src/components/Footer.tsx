import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-brand border-t border-border-brand/80 py-12 sm:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8">
        
        {/* Left Side: Brand Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 max-w-sm">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Rivtor Logo" className="h-7 w-auto" />
          </div>
          <p className="text-xs sm:text-sm text-body-brand leading-relaxed">
            © {new Date().getFullYear()} Rivtor AB. All Rights Reserved. <br />
            Engineering modern digital solutions for businesses ready to scale.
          </p>
        </div>

        {/* Right Side: Locations and Contact */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 font-mono text-xs text-muted-brand uppercase font-semibold">
          <div className="flex items-center gap-2">
            <FiMapPin className="text-primary" />
            <span>Sweden HQ</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-primary" />
            <a href="mailto:Konwar@domain" className="hover:text-primary transition-colors lowercase">
              Konwar@domain
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
};
