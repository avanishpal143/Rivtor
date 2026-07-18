import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';

export const Comparison: React.FC = () => {
  const comparisonData = [
    {
      feature: "Project Philosophy",
      traditional: "Project-focused (transactional contract delivery)",
      rivtor: "Business-focused (aligns with strategic growth metrics)",
      highlight: false
    },
    {
      feature: "Engineering Style",
      traditional: "Generic development (templates & standard packages)",
      rivtor: "Tailored engineering (bespoke software architectures)",
      highlight: true
    },
    {
      feature: "Operational Focus",
      traditional: "Short-term delivery (code & leave)",
      rivtor: "Long-term scalability (built to evolve with business)",
      highlight: false
    },
    {
      feature: "Relationship Model",
      traditional: "Reactive support (tickets & bug-fixes)",
      rivtor: "Strategic partnership (CTO-level advisors)",
      highlight: true
    },
    {
      feature: "Core Technology Strategy",
      traditional: "Legacy-first thinking (stick to old stacks)",
      rivtor: "Cloud-first engineering (serverless & auto-scaling)",
      highlight: false
    },
    {
      feature: "Lifecycle Maintenance",
      traditional: "Limited optimization (rare audits)",
      rivtor: "Continuous improvement (query tuning & cost reviews)",
      highlight: true
    }
  ];

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-alt border-b border-border-brand overflow-hidden"
      id="comparison"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Traditional Vendors vs. Rivtor AB
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            See how our tailored, business-driven engineering model differs from traditional software vendor execution.
          </p>
        </div>

        {/* Premium Glass Table */}
        <div className="w-full max-w-4xl mx-auto backdrop-blur-xl bg-white/70 border border-border-brand/80 rounded-[32px] overflow-hidden shadow-[0_12px_45px_rgba(232,237,247,0.4)]">
          
          {/* Header Row */}
          <div className="grid grid-cols-3 border-b border-border-brand bg-bg-brand/50 p-6 text-sm font-bold text-text-brand uppercase tracking-wider font-mono">
            <div>Feature</div>
            <div className="text-muted-brand">Traditional Vendors</div>
            <div className="text-primary relative">
              Rivtor AB
              <span className="absolute -top-1 -right-2 w-2 h-2 rounded-full bg-success-brand animate-ping" />
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-border-brand/60">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-3 p-6 text-xs sm:text-sm items-center transition-all duration-300 relative group"
                whileHover={{ backgroundColor: "rgba(46, 91, 255, 0.02)" }}
              >
                {/* Feature Name */}
                <div className="font-extrabold text-text-brand pr-4">
                  {row.feature}
                </div>

                {/* Traditional Column */}
                <div className="text-body-brand flex items-start gap-2 pr-4 font-normal">
                  <FiX className="text-red-400 mt-1 flex-shrink-0" size={16} />
                  <span>{row.traditional}</span>
                </div>

                {/* Rivtor AB Column (Highlighted) */}
                <div className="font-semibold text-text-brand flex items-start gap-2 pl-4 border-l border-border-brand/60 bg-gradient-to-r from-soft-blue/20 to-transparent py-2 rounded-r-xl">
                  <FiCheck className="text-success-brand mt-1 flex-shrink-0 font-bold" size={18} />
                  <span>{row.rivtor}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Swedish quality sign */}
        <div className="mt-8 text-center text-xs text-muted-brand font-mono">
          ✔ Rivtor engineering is backed by modern CI/CD compliance and clean Sweden operational standard.
        </div>

      </div>
    </section>
  );
};
