import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Count-up helper component
const Counter: React.FC<{ end: number; duration?: number; suffix?: string; decimals?: number }> = ({ 
  end, 
  duration = 2000, 
  suffix = "", 
  decimals = 0 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentCount = easeProgress * end;
            
            countRef.current = currentCount;
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="font-mono tracking-tighter">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const BusinessValue: React.FC = () => {
  const values = [
    {
      title: "Reliable",
      stat: 99.99,
      decimals: 2,
      suffix: "%",
      desc: "High availability clusters engineered for zero-downtime operations and seamless failovers.",
      color: "from-blue-500/10 to-transparent",
      accent: "text-primary"
    },
    {
      title: "Scalable",
      stat: 4,
      decimals: 0,
      suffix: "x",
      desc: "Horizontal autoscaling setups that accommodate transaction spikes under sudden peak traffic.",
      color: "from-purple-500/10 to-transparent",
      accent: "text-secondary"
    },
    {
      title: "Secure",
      stat: 100,
      decimals: 0,
      suffix: "%",
      desc: "End-to-end data encryption, IAM roles, and cloud security architecture compliance audits.",
      color: "from-emerald-500/10 to-transparent",
      accent: "text-success-brand"
    },
    {
      title: "Cloud Optimized",
      stat: 45,
      decimals: 0,
      suffix: "% Cost Save",
      desc: "Lifecycle scaling policies to terminate idle instances and reduce hosting runtime overhead.",
      color: "from-cyan-500/10 to-transparent",
      accent: "text-primary"
    },
    {
      title: "Performance",
      stat: 300,
      decimals: 0,
      suffix: "%",
      desc: "Sub-millisecond query caches, API response tuning, and accelerated asset delivery.",
      color: "from-indigo-500/10 to-transparent",
      accent: "text-secondary"
    },
    {
      title: "Maintainable",
      stat: 0,
      decimals: 0,
      suffix: " Legacy Debt",
      desc: "Strict domain boundaries and modular code structures that allow faster feature deployments.",
      color: "from-orange-500/10 to-transparent",
      accent: "text-orange-500"
    }
  ];

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-brand border-b border-border-brand overflow-hidden"
      id="value"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Technology That Solves Problems
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            Every technical decision aligns with measurable business metrics. We engineer systems that continue delivering value long after deployment.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className={`bg-white border border-border-brand/80 rounded-[28px] p-8 shadow-[0_6px_30px_rgba(232,237,247,0.3)] overflow-hidden relative group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 45px rgba(232, 237, 247, 0.7)"
              }}
            >
              {/* Corner Glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${val.color} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="space-y-6">
                <span className="text-xs font-semibold text-muted-brand uppercase tracking-wider block">
                  {val.title}
                </span>

                {/* Big Stat */}
                <div className={`text-4xl sm:text-5xl font-black ${val.accent} tracking-tight`}>
                  <Counter end={val.stat} decimals={val.decimals} suffix={val.suffix} />
                </div>

                <p className="text-xs sm:text-sm text-body-brand leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>

              {/* Bottom Decorative Element */}
              <div className="mt-8 pt-6 border-t border-border-brand/40 flex justify-between items-center text-[9px] font-mono text-muted-brand">
                <span>RIVTOR_METRIC_0{i+1}</span>
                <span className="text-success-brand">● CALIBRATED</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
