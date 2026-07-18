import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

export const SuccessStory: React.FC = () => {
  const results = [
    "Faster software delivery",
    "Improved system reliability",
    "Reduced operational complexity",
    "Better cloud utilization",
    "Enhanced security",
    "Scalable infrastructure",
    "Increased engineering efficiency",
    "Long-term technology sustainability"
  ];

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-brand border-b border-border-brand overflow-hidden"
      id="success-story"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Narrative & Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight leading-tight">
                Scaling A Rapidly Growing Enterprise
              </h2>
            </div>

            <p className="text-base sm:text-lg text-body-brand leading-relaxed font-normal">
              An expanding technology company struggled with aging infrastructure, inconsistent deployment pipelines, and increasing maintenance costs.
            </p>

            {/* Case Study Timeline */}
            <div className="space-y-6 relative border-l border-border-brand pl-6 ml-2 pt-2">
              <div className="relative">
                <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-red-400 border-4 border-white" />
                <h4 className="text-sm font-bold text-text-brand mb-1">The Challenge</h4>
                <p className="text-xs sm:text-sm text-body-brand leading-relaxed">
                  Monolithic legacy setups created massive release friction, high servers overhead, and frequent pipeline blockages during deployment.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-white animate-pulse" />
                <h4 className="text-sm font-bold text-text-brand mb-1">The Transformation</h4>
                <p className="text-xs sm:text-sm text-body-brand leading-relaxed">
                  Rivtor AB redesigned the company's technical architecture using modern cloud-first principles, deploying AWS multi-region autoscaling and auto CI/CD tests.
                </p>
              </div>
              <div className="relative">
                <span className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-success-brand border-4 border-white" />
                <h4 className="text-sm font-bold text-text-brand mb-1">The Outcome</h4>
                <p className="text-xs sm:text-sm text-body-brand leading-relaxed">
                  The client gained a scalable foundation supporting sustained business expansion, saving up to 40% in monthly computing bills.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Whiteboard Image & Results list */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Whiteboard planning image */}
            <div className="relative w-full aspect-video rounded-[24px] overflow-hidden border border-border-brand/80 shadow-md">
              <img 
                src="/architecture_planning.png" 
                alt="Rivtor Engineering Team whiteboard architecture session" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Results checklist */}
            <div className="bg-bg-alt border border-border-brand/80 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h4 className="text-base font-bold text-text-brand mb-4">Results Achieved</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {results.map((res, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-body-brand font-medium">
                    <FiCheckCircle className="text-success-brand flex-shrink-0" size={16} />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
