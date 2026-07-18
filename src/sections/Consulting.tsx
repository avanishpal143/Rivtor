import React from 'react';
import { motion } from 'framer-motion';

export const Consulting: React.FC = () => {
  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-brand border-b border-border-brand overflow-hidden"
      id="consulting"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Editorial Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight leading-tight">
                Bridging Corporate Objectives and Engineering Execution
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-body-brand leading-relaxed">
              We provide strategic engineering leadership to align technical paths with commercial targets. From auditing existing software dependencies to mapping out decade-scale infrastructure modernization maps, we help executive teams move forward with zero structural hesitation.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-mono font-bold text-sm">01</span>
                <div>
                  <h4 className="text-base font-bold text-text-brand mb-1">Infrastructure Auditing</h4>
                  <p className="text-sm text-body-brand leading-relaxed">Review resource lifecycle constraints, host security structures, and database query runrates.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="w-8 h-8 rounded-full bg-secondary/10 text-secondary flex items-center justify-center font-mono font-bold text-sm">02</span>
                <div>
                  <h4 className="text-base font-bold text-text-brand mb-1">Fractional CTO Advisory</h4>
                  <p className="text-sm text-body-brand leading-relaxed">Embed experienced architecture guidance into your leadership group to guide hiring and technology stack selections.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Executive Imagery with Glass Overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex justify-center relative"
          >
            {/* Background glowing gradients */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-[500px] aspect-square rounded-[32px] overflow-hidden border border-border-brand/80 shadow-[0_12px_40px_rgba(232,237,247,0.5)] group">
              <img 
                src="/executive_consulting.png" 
                alt="Rivtor Technology Consulting Advisory Meeting" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              
              {/* Floating Glass Label Overlay */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/70 border border-white/40 p-5 rounded-2xl shadow-lg">
                <span className="text-[10px] font-mono font-bold text-primary block tracking-wider uppercase mb-1">
                  Sweden Advisory Group
                </span>
                <p className="text-xs text-text-brand font-semibold leading-relaxed">
                  "Every engineering roadmap we structure focuses on long-term scalability and business viability."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
