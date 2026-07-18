import React from 'react';
import { motion } from 'framer-motion';

export const Industries: React.FC = () => {
  const industries = [
    {
      name: "Enterprise Software",
      desc: "Architecting high-availability ERP integrations, message brokers, and complex security policies.",
      size: "lg:col-span-4",
      accent: "border-l-primary",
      pattern: "blueprint-grid",
      hoverAngle: -1.5
    },
    {
      name: "SaaS Platforms",
      desc: "Building multi-tenant infrastructure, elastic data storage layers, and clean developer APIs.",
      size: "lg:col-span-4",
      accent: "border-l-secondary",
      pattern: "blueprint-grid-fine",
      hoverAngle: 2
    },
    {
      name: "Healthcare Tech",
      desc: "Creating zero-trust medical software environments maintaining compliance and patient file encryption.",
      size: "lg:col-span-4",
      accent: "border-l-success-brand",
      pattern: "blueprint-grid",
      hoverAngle: -2
    },
    {
      name: "FinTech Systems",
      desc: "Implementing atomic ledger entries, payment broker APIs, and high-frequency routing cores.",
      size: "lg:col-span-6",
      accent: "border-l-accent",
      pattern: "blueprint-grid-fine",
      hoverAngle: 1.5
    },
    {
      name: "Manufacturing Log",
      desc: "Automating factory line synchronization pipelines, inventory API triggers, and cloud monitoring hubs.",
      size: "lg:col-span-6",
      accent: "border-l-primary",
      pattern: "blueprint-grid",
      hoverAngle: -1
    },
    {
      name: "Logistics & Supply",
      desc: "Tracking live telemetry endpoints, fleet vehicle coordinates, and route allocation engines.",
      size: "lg:col-span-4",
      accent: "border-l-secondary",
      pattern: "blueprint-grid",
      hoverAngle: 2.5
    },
    {
      name: "Digital Products",
      desc: "Translating customer product directions into highly optimized Next.js/React and mobile code bases.",
      size: "lg:col-span-8",
      accent: "border-l-accent",
      pattern: "blueprint-grid-fine",
      hoverAngle: -1.2
    }
  ];

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-alt border-b border-border-brand overflow-hidden"
      id="industries"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl mb-16 sm:mb-24 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Tailored Engineering for Complex Sectors
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            We don't build generic websites. We design, deploy, and scale critical operational software for industries demanding maximum security and performance.
          </p>
        </div>

        {/* Asymmetric Floating Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              className={`${ind.size} bg-white border border-border-brand/80 rounded-[24px] p-8 shadow-[0_4px_24px_rgba(232,237,247,0.3)] flex flex-col justify-between relative overflow-hidden group border-l-4 ${ind.accent}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ 
                y: -6, 
                rotate: ind.hoverAngle,
                boxShadow: "0 16px 35px rgba(232, 237, 247, 0.7)",
                borderColor: "rgba(139, 92, 246, 0.2)"
              }}
            >
              {/* Backgrid accent */}
              <div className={`absolute inset-0 ${ind.pattern} opacity-20 pointer-events-none`} />
              
              <div className="space-y-4 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold text-text-brand">{ind.name}</h3>
                <p className="text-xs sm:text-sm text-body-brand leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-6 mt-6 border-t border-border-brand/40 flex justify-between items-center text-[9px] font-mono text-muted-brand relative z-10">
                <span>SECTOR_ID: 0{i+1}</span>
                <span className="text-success-brand">● READY_TO_SCALE</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
