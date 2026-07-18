import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "What services does Rivtor AB provide?",
      a: "We specialize in enterprise software development, cloud engineering, digital architecture, technical consulting, and infrastructure modernization."
    },
    {
      q: "Can you work with our existing development team?",
      a: "Yes. We frequently collaborate with internal engineering teams, providing architecture guidance and technical leadership."
    },
    {
      q: "Do you build cloud-native applications?",
      a: "Absolutely. Cloud-first engineering is one of our core areas of expertise."
    },
    {
      q: "Can you modernize legacy software?",
      a: "Yes. We help businesses upgrade existing systems while minimizing operational disruption."
    },
    {
      q: "What industries do you serve?",
      a: "We support startups, enterprise organizations, SaaS companies, manufacturing, healthcare, logistics, finance, and many other sectors."
    },
    {
      q: "Do you provide ongoing support?",
      a: "Yes. We build long-term partnerships that include optimization, maintenance, and strategic technical consulting."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-brand border-b border-border-brand overflow-hidden"
      id="faq"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Common Inquiries
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            Quick answers about our collaboration model, cloud practices, and development services.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i}
                className="bg-white border border-border-brand/80 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(232,237,247,0.2)] transition-colors duration-300"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none select-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-text-brand group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-bg-alt flex items-center justify-center text-muted-brand transition-transform ${isOpen ? 'rotate-180 bg-soft-blue text-primary' : ''}`}>
                    {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </span>
                </button>

                {/* Animated Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="p-6 pt-0 border-t border-border-brand/40 text-xs sm:text-sm text-body-brand leading-relaxed font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
