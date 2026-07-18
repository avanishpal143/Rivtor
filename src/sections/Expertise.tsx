import React from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiCloud, FiLayers, FiCompass, FiLink, FiActivity } from 'react-icons/fi';
import { GlassCard } from '../components/GlassCard';

export const Expertise: React.FC = () => {
  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-alt border-b border-border-brand overflow-hidden"
      id="expertise"
    >
      <div className="container mx-auto px-6 lg:px-12 space-y-32">
        
        {/* Section Header */}
        <div className="max-w-xl space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase">
            Our Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Handcrafted Engineering Solutions
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            We deliver technical excellence across critical layers of enterprise engineering, from bespoke development to cloud migration.
          </p>
        </div>

        {/* Expertise Panels (Completely Handcrafted, Alternating & Asymmetrical) */}
        
        {/* 1. Enterprise Software Development (Left Content, Right Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
              <FiCpu size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-brand tracking-tight">
              Enterprise Software Development
            </h3>
            <p className="text-base text-body-brand leading-relaxed">
              Build custom applications designed around your business objectives, workflows, and future scalability. We design software architectures that solve real operational challenges without legacy debt.
            </p>
            <ul className="space-y-2 text-sm text-body-brand font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Custom Core Business Engines
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                High-Transaction Application Security
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Future-Ready Domain-Driven Design (DDD)
              </li>
            </ul>
          </motion.div>
          <div className="lg:col-span-6 flex justify-center">
            <GlassCard className="w-full max-w-[480px] aspect-video flex flex-col justify-between" hoverEffect>
              <div className="flex items-center justify-between border-b border-border-brand/40 pb-4">
                <span className="text-xs font-mono text-muted-brand font-semibold">// system.core.process</span>
                <span className="text-[10px] bg-success-brand/10 text-success-brand px-2 py-0.5 rounded font-mono">active</span>
              </div>
              <div className="space-y-3 my-6">
                <div className="h-2.5 bg-border-brand/60 rounded-full w-[80%] animate-pulse" />
                <div className="h-2.5 bg-border-brand/60 rounded-full w-[95%]" />
                <div className="h-2.5 bg-border-brand/60 rounded-full w-[60%]" />
              </div>
              <div className="flex gap-2">
                <span className="h-6 w-16 bg-primary/10 rounded border border-primary/20" />
                <span className="h-6 w-24 bg-secondary/10 rounded border border-secondary/20" />
              </div>
            </GlassCard>
          </div>
        </div>

        {/* 2. Cloud Engineering (Right Content, Left Glowing Sphere Canvas) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-square rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 flex items-center justify-center border border-border-brand/50 shadow-inner">
              {/* Radial server simulation */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-primary/30 flex items-center justify-center"
              >
                <span className="absolute top-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#2e5bff]" />
                <span className="absolute bottom-0 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_#8b5cf6]" />
              </motion.div>
              <div className="w-[45%] h-[45%] rounded-full bg-white border border-border-brand shadow flex flex-col items-center justify-center p-4">
                <FiCloud size={32} className="text-primary mb-1" />
                <span className="text-[10px] font-mono text-muted-brand">AWS / AZURE</span>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20">
              <FiCloud size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-brand tracking-tight">
              Cloud Engineering
            </h3>
            <p className="text-base text-body-brand leading-relaxed">
              Create secure, high-performance cloud environments optimized for reliability, availability, and cost efficiency. We construct cloud-native solutions designed to absorb traffic spikes automatically.
            </p>
            <ul className="space-y-2 text-sm text-body-brand font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Multi-Region Infrastructure-as-Code (IaC)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Serverless Architecture Deployments
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Zero-Trust Access Control & Compliance
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 3. Digital Architecture (Asymmetric Block Composition) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent-brand flex items-center justify-center border border-accent/20">
              <FiLayers size={24} className="text-secondary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-brand tracking-tight">
              Digital Architecture
            </h3>
            <p className="text-base text-body-brand leading-relaxed">
              Develop modern software architectures that support enterprise-grade performance while remaining flexible for future expansion. We focus on decouple structures to streamline team engineering cycles.
            </p>
            <ul className="space-y-2 text-sm text-body-brand font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Decoupled Microservice Clusters
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Event-Driven Architecture (EDA)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Eventual Consistency / CQRS Design
              </li>
            </ul>
          </motion.div>
          <div className="lg:col-span-6 flex justify-center">
            {/* Interactive blueprint visual stack */}
            <div className="relative w-full max-w-[420px] aspect-[4/3] border border-border-brand bg-white rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-3 border-l-4 border-primary bg-primary/5 rounded-r shadow-xs text-xs font-mono flex justify-between"
                >
                  <span>Gateway Routing</span>
                  <span className="text-muted-brand">HTTP/2 API</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-3 border-l-4 border-secondary bg-secondary/5 rounded-r shadow-xs text-xs font-mono flex justify-between"
                >
                  <span>Message Queue</span>
                  <span className="text-muted-brand">Kafka Broker</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="p-3 border-l-4 border-accent bg-accent/5 rounded-r shadow-xs text-xs font-mono flex justify-between"
                >
                  <span>Microservice Cluster</span>
                  <span className="text-muted-brand">K8s Deployment</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Technology Consulting (Alternating layout: split, text right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <GlassCard className="w-full max-w-[400px] border border-border-brand/50 shadow-md p-8 relative overflow-hidden" hoverEffect>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <h4 className="text-lg font-bold text-text-brand mb-4">Strategic Advisory</h4>
              <p className="text-xs text-body-brand leading-relaxed mb-6">
                Evaluating legacy systems, sizing server environments, estimating engineering runrates, and planning step-by-step modernization maps.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border-brand/40">
                <span className="w-8 h-8 rounded-full bg-soft-blue flex items-center justify-center text-primary font-mono text-xs font-bold">HQ</span>
                <div>
                  <div className="text-xs font-bold text-text-brand">Sweden Advisory</div>
                  <div className="text-[10px] text-muted-brand">Enterprise Team</div>
                </div>
              </div>
            </GlassCard>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
              <FiCompass size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-brand tracking-tight">
              Technology Consulting
            </h3>
            <p className="text-base text-body-brand leading-relaxed">
              Receive expert guidance for technical planning, infrastructure decisions, modernization strategies, and engineering leadership. We bridge business targets and software execution paths.
            </p>
            <ul className="space-y-2 text-sm text-body-brand font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Technical Roadmap Planning
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Fractional CTO Services & Support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Legacy Software Audit & Assessment
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 5. System Integration (Left Content, Right Animated SVG) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center border border-secondary/20">
              <FiLink size={24} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-brand tracking-tight">
              System Integration
            </h3>
            <p className="text-base text-body-brand leading-relaxed">
              Connect business applications, APIs, databases, and cloud services into one seamless technology ecosystem. Eliminate isolated databases and synchronize business operations.
            </p>
            <ul className="space-y-2 text-sm text-body-brand font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Enterprise API Pipeline Design
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Real-time Event Synchronization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Legacy Interface Modernization
              </li>
            </ul>
          </motion.div>
          <div className="lg:col-span-6 flex justify-center">
            {/* Visual SVG flow graph */}
            <div className="relative w-full max-w-[420px] aspect-video border border-border-brand bg-white rounded-3xl p-6 shadow-sm overflow-hidden flex flex-col justify-center items-center">
              <div className="flex gap-4 items-center">
                <span className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-xs font-mono font-bold text-primary">ERP</span>
                
                <div className="w-16 h-1 bg-border-brand relative overflow-hidden">
                  <motion.div 
                    animate={{ left: ["-100%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-0 w-6 h-full bg-gradient-to-r from-transparent via-primary to-transparent" 
                  />
                </div>

                <span className="w-12 h-12 rounded-xl bg-secondary/5 border border-secondary/20 flex items-center justify-center text-xs font-mono font-bold text-secondary">RIVTOR</span>
                
                <div className="w-16 h-1 bg-border-brand relative overflow-hidden">
                  <motion.div 
                    animate={{ left: ["-100%", "100%"] }} 
                    transition={{ repeat: Infinity, duration: 2, delay: 1, ease: "linear" }}
                    className="absolute top-0 w-6 h-full bg-gradient-to-r from-transparent via-secondary to-transparent" 
                  />
                </div>

                <span className="w-10 h-10 rounded-xl bg-accent/5 border border-accent/20 flex items-center justify-center text-xs font-mono font-bold text-secondary">CLOUD</span>
              </div>
              <span className="text-[10px] font-mono text-muted-brand mt-6">Automated API Payload Sync Active</span>
            </div>
          </div>
        </div>

        {/* 6. Infrastructure Optimization (Right Content, Left Grid Statistics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
              <div className="bg-white border border-border-brand p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] font-mono text-muted-brand">CPU UTILIZATION</span>
                <div className="text-xl font-bold text-text-brand mt-1">-35%</div>
                <div className="text-[9px] text-success-brand mt-1">▲ Optimized workload</div>
              </div>
              <div className="bg-white border border-border-brand p-5 rounded-2xl shadow-xs">
                <span className="text-[10px] font-mono text-muted-brand">RELEASE VELOCITY</span>
                <div className="text-xl font-bold text-text-brand mt-1">+240%</div>
                <div className="text-[9px] text-success-brand mt-1">▲ Automated Pipelines</div>
              </div>
              <div className="bg-white border border-border-brand p-5 rounded-2xl shadow-xs col-span-2">
                <span className="text-[10px] font-mono text-muted-brand">MONTHLY INFRASTRUCTURE RUNRATE</span>
                <div className="text-xl font-bold text-text-brand mt-1">42% Cost Savings</div>
                <div className="h-1.5 w-full bg-border-brand rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-[42%] bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 order-1 lg:order-2 space-y-6"
          >
            <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent-brand flex items-center justify-center border border-accent/20">
              <FiActivity size={24} className="text-secondary" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-brand tracking-tight">
              Infrastructure Optimization
            </h3>
            <p className="text-base text-body-brand leading-relaxed">
              Improve performance, security, and operational efficiency across your digital environment. We audit, evaluate, and scale virtual server runrates to maximize software output while minimizing hosting costs.
            </p>
            <ul className="space-y-2 text-sm text-body-brand font-medium">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Cost Allocation Auditing & Analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Serverless Resource Lifecycle Polling
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Database Query Tuning & Caching
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
