import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-brand border-b border-border-brand overflow-hidden"
      id="about"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        


        {/* Large Editorial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-brand leading-[1.1] tracking-tight">
            Technology should accelerate business—not slow it down.
          </h2>
        </motion.div>

        {/* Asymmetrical 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Mission Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-base sm:text-lg text-body-brand leading-relaxed font-normal"
          >
            <p>
              <strong className="text-text-brand font-semibold">Rivtor AB</strong> is a specialized engineering and software consulting company helping organizations design, build, and optimize modern digital ecosystems. We combine strategic thinking with practical engineering expertise to create scalable solutions that support long-term business growth.
            </p>
            <p>
              Whether you're modernizing legacy infrastructure, launching a cloud-native platform, or expanding enterprise operations, our team focuses on building reliable technology foundations that evolve with your business.
            </p>
          </motion.div>

          {/* Right Column: Layered Floating SVG Blueprint */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-[32px] border border-border-brand/80 bg-bg-alt blueprint-grid p-8 shadow-[0_8px_30px_rgba(232,237,247,0.4)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 blueprint-grid-fine opacity-60" />
              
              {/* Dynamic blueprint components floating */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="w-[85%] h-[85%] border border-primary/20 rounded-2xl bg-white/90 backdrop-blur-md p-6 shadow-md flex flex-col justify-between"
              >
                {/* Header elements representing UI panel */}
                <div className="flex justify-between items-center border-b border-border-brand pb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-accent/30" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-brand">rivtor.architecture.v2</span>
                </div>
                
                {/* Layered Blocks */}
                <div className="space-y-3 my-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="h-10 border border-primary/30 bg-primary/5 rounded-lg flex items-center justify-between px-3 text-xs font-semibold text-primary"
                  >
                    <span>Cloud Gateway / APIs</span>
                    <span className="text-[9px] font-mono font-normal">HTTP/2</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="h-10 border border-secondary/30 bg-secondary/5 rounded-lg flex items-center justify-between px-3 text-xs font-semibold text-secondary"
                  >
                    <span>Containerized Core</span>
                    <span className="text-[9px] font-mono font-normal">Docker/K8s</span>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="h-10 border border-accent/30 bg-accent/5 rounded-lg flex items-center justify-between px-3 text-xs font-semibold text-accent"
                  >
                    <span>Data Replication Layer</span>
                    <span className="text-[9px] font-mono font-normal">Relational / Redis</span>
                  </motion.div>
                </div>

                <div className="flex justify-between items-center text-[10px] text-muted-brand font-mono pt-3 border-t border-border-brand">
                  <span>SECURE GATEWAY</span>
                  <span className="text-success-brand font-bold">100% OPERATIONAL</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
