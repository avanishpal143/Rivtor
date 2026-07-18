import React from 'react';
import { motion } from 'framer-motion';

export const Architecture: React.FC = () => {
  // SVG drawing configuration
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.8,
      transition: { 
        duration: 2, 
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 1
      } 
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-brand border-b border-border-brand overflow-hidden blueprint-grid"
      id="architecture"
    >
      <div className="absolute inset-0 blueprint-grid-fine opacity-65 pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Enterprise Architecture Visualization
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            A blueprint representation of how we structure scalable, decoupled systems designed to handle million-scale workloads without system downtime.
          </p>
        </div>

        {/* Blueprint SVG Layout */}
        <div className="w-full max-w-5xl mx-auto bg-white/90 backdrop-blur-xl border border-border-brand/80 rounded-[32px] p-6 sm:p-12 shadow-[0_12px_50px_rgba(232,237,247,0.5)] overflow-x-auto">
          <div className="min-w-[800px] aspect-[16/9] relative">
            <svg 
              viewBox="0 0 1000 500" 
              className="w-full h-full font-sans select-none"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Lines behind SVG elements */}
              <defs>
                <pattern id="svg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(46, 91, 255, 0.03)" strokeWidth="1" />
                </pattern>
                <linearGradient id="primary-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2E5BFF" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <rect width="1000" height="500" fill="url(#svg-grid)" rx="16" />

              {/* Connecting Lines */}
              {/* Client -> Gateway */}
              <motion.path d="M 160 250 L 260 250" stroke="url(#primary-grad)" strokeWidth="2.5" strokeDasharray="6 4" variants={pathVariants} initial="hidden" animate="visible" />
              
              {/* Gateway -> Microservice 1 (Write) */}
              <motion.path d="M 380 230 L 440 150 L 520 150" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" variants={pathVariants} initial="hidden" animate="visible" />
              {/* Gateway -> Microservice 2 (Read) */}
              <motion.path d="M 380 250 L 520 250" stroke="#2E5BFF" strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible" />
              {/* Gateway -> Microservice 3 (Sync) */}
              <motion.path d="M 380 270 L 440 350 L 520 350" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" variants={pathVariants} initial="hidden" animate="visible" />

              {/* Microservices -> Message Queue */}
              <motion.path d="M 640 150 L 700 230 L 740 230" stroke="#8b5cf6" strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible" />
              <motion.path d="M 640 250 L 740 250" stroke="#2E5BFF" strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible" />
              <motion.path d="M 640 350 L 700 270 L 740 270" stroke="#8b5cf6" strokeWidth="2" variants={pathVariants} initial="hidden" animate="visible" />

              {/* Message Queue -> DB Repl Cluster */}
              <motion.path d="M 840 250 L 890 250" stroke="url(#primary-grad)" strokeWidth="2.5" variants={pathVariants} initial="hidden" animate="visible" />

              {/* LAYERS */}
              
              {/* LAYER 1: CLIENT REQUEST (x: 50, y: 200) */}
              <g>
                <rect x="40" y="190" width="120" height="120" rx="16" fill="white" stroke="#e8edf7" strokeWidth="2" />
                <text x="100" y="235" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="bold">Client Requests</text>
                <text x="100" y="255" textAnchor="middle" fill="#616b7c" fontSize="10">Web App / Mobile</text>
                <text x="100" y="275" textAnchor="middle" fill="#2E5BFF" fontSize="9" fontWeight="bold">HTTPS/WSS</text>
                <circle cx="100" cy="205" r="4" fill="#2E5BFF" />
              </g>

              {/* LAYER 2: API GATEWAY (x: 260, y: 200) */}
              <motion.g variants={pulseVariants} animate="pulse">
                <rect x="260" y="190" width="120" height="120" rx="16" fill="white" stroke="#2E5BFF" strokeWidth="2.5" />
                <text x="320" y="235" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="bold">Secure Gateway</text>
                <text x="320" y="255" textAnchor="middle" fill="#616b7c" fontSize="10">Auth & Throttle</text>
                <text x="320" y="275" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="bold">Nginx Reverse Proxy</text>
                <rect x="300" y="200" width="40" height="10" rx="4" fill="#2e5bff" opacity="0.1" />
              </motion.g>

              {/* LAYER 3: CORE MICROSERVICES (x: 520, y: 100, 200, 300) */}
              {/* MS 1 */}
              <g>
                <rect x="520" y="100" width="120" height="80" rx="12" fill="white" stroke="#e8edf7" strokeWidth="2" />
                <text x="580" y="135" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">Order Service</text>
                <text x="580" y="152" textAnchor="middle" fill="#616b7c" fontSize="9">Write API</text>
                <circle cx="535" cy="115" r="3" fill="#8B5CF6" />
              </g>

              {/* MS 2 */}
              <g>
                <rect x="520" y="210" width="120" height="80" rx="12" fill="white" stroke="#e8edf7" strokeWidth="2" />
                <text x="580" y="245" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">Inventory API</text>
                <text x="580" y="262" textAnchor="middle" fill="#616b7c" fontSize="9">Read Cache Optimized</text>
                <circle cx="535" cy="225" r="3" fill="#2E5BFF" />
              </g>

              {/* MS 3 */}
              <g>
                <rect x="520" y="320" width="120" height="80" rx="12" fill="white" stroke="#e8edf7" strokeWidth="2" />
                <text x="580" y="355" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">Analytics Engine</text>
                <text x="580" y="372" textAnchor="middle" fill="#616b7c" fontSize="9">Event Streaming</text>
                <circle cx="535" cy="335" r="3" fill="#8B5CF6" />
              </g>

              {/* LAYER 4: MESSAGE BROKER (x: 740, y: 200) */}
              <motion.g variants={pulseVariants} animate="pulse">
                <rect x="740" y="190" width="100" height="120" rx="16" fill="white" stroke="#8B5CF6" strokeWidth="2" />
                <text x="790" y="235" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">Message Queue</text>
                <text x="790" y="255" textAnchor="middle" fill="#616b7c" fontSize="10">Apache Kafka</text>
                <text x="790" y="275" textAnchor="middle" fill="#8B5CF6" fontSize="9" fontWeight="bold">Async Replication</text>
              </motion.g>

              {/* LAYER 5: DATABASES (x: 890, y: 200) */}
              <g>
                <rect x="890" y="190" width="90" height="120" rx="16" fill="white" stroke="#e8edf7" strokeWidth="2" />
                <text x="935" y="235" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">Data Lake</text>
                <text x="935" y="255" textAnchor="middle" fill="#616b7c" fontSize="10">Postgres Cluster</text>
                <text x="935" y="275" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="bold">Active-Active</text>
                <circle cx="935" cy="205" r="4" fill="#22C55E" />
              </g>
            </svg>
          </div>
        </div>

        {/* Informational Subtext */}
        <div className="mt-8 text-center text-xs text-muted-brand font-mono">
          ▲ Pulsing components signify active node monitoring channels. Dashed links show async event broker pipelines.
        </div>
      </div>
    </section>
  );
};
