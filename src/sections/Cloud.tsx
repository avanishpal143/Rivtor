import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCloudLightning, FiTerminal, FiPlay, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { GlassCard } from '../components/GlassCard';

export const Cloud: React.FC = () => {
  const [deployStep, setDeployStep] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isDeploying, setIsDeploying] = useState<boolean>(false);

  const deploymentLogs = [
    "[INFO] Initializing CI/CD deployment pipeline...",
    "[BUILD] Code verification checks: 0 vulnerabilities found.",
    "[BUILD] Bundling Javascript artifacts (Webpack/Vite 8)...",
    "[CONTAINER] Creating Docker base layers: node:24-alpine...",
    "[CONTAINER] Exporting image layer cache successfully.",
    "[REGISTRY] Authenticating secure gateway to cloud registry...",
    "[REGISTRY] Pushing image tag: rivtor-core-api:prod-latest...",
    "[CLOUD] Initiating rolling update for AWS ECS cluster...",
    "[CLOUD] Provisioning active virtual nodes in multi-region SE...",
    "[HEALTH] Verifying route load balancer traffic distribution...",
    "[SUCCESS] Deployment complete: 100% healthy. System ONLINE."
  ];

  const triggerDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployStep(0);
    setLogs([]);
  };

  useEffect(() => {
    if (!isDeploying) return;

    if (deployStep < deploymentLogs.length) {
      const delay = deployStep === 0 ? 500 : deployStep === 10 ? 1200 : 700;
      const timer = setTimeout(() => {
        setLogs(prev => [...prev, deploymentLogs[deployStep]]);
        setDeployStep(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsDeploying(false);
    }
  }, [isDeploying, deployStep]);

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-alt border-b border-border-brand overflow-hidden"
      id="cloud-engineering"
    >
      {/* Background Sphere */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* Left Column: Cloud engineering copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
            <FiCloudLightning size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight leading-tight">
            Automated Cloud-Native Infrastructure
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            We build high-availability systems with Infrastructure-as-Code (IaC), zero-downtime rolling updates, and continuous integration pipelines. Our cloud designs minimize host cost and ensure peak service reliability.
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-sm font-extrabold text-text-brand mb-1">Multi-Cloud Setup</h4>
              <p className="text-xs text-muted-brand">Redundancy across AWS, GCP, and Azure frameworks.</p>
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-text-brand mb-1">Cost Management</h4>
              <p className="text-xs text-muted-brand">Algorithmic scaling checks to reduce wasted runtime power.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Live Interactive Simulator */}
        <div className="lg:col-span-6">
          <GlassCard className="w-full max-w-[500px]" hoverEffect={false}>
            
            {/* Simulator Header */}
            <div className="flex justify-between items-center border-b border-border-brand/40 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <FiTerminal className="text-primary" />
                <span className="text-xs font-mono font-bold text-text-brand">Infrastructure Console</span>
              </div>
              <button
                onClick={triggerDeploy}
                disabled={isDeploying}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isDeploying 
                    ? "bg-border-brand text-muted-brand cursor-not-allowed" 
                    : "bg-primary text-white hover:bg-secondary cursor-pointer"
                }`}
              >
                {isDeploying ? <FiLoader className="animate-spin" /> : <FiPlay />}
                <span>{isDeploying ? "Deploying..." : "Trigger Deploy"}</span>
              </button>
            </div>

            {/* Simulated Server Rack Lights */}
            <div className="flex gap-2 mb-4 justify-start">
              {[1, 2, 3, 4].map((node) => (
                <div key={node} className="flex items-center gap-1 bg-bg-alt px-2 py-1 rounded border border-border-brand">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    isDeploying && deployStep > 6 
                      ? "bg-secondary animate-pulse" 
                      : deployStep === deploymentLogs.length 
                        ? "bg-success-brand" 
                        : "bg-primary"
                  }`} />
                  <span className="text-[9px] font-mono font-semibold text-muted-brand text-center">Node-{node}</span>
                </div>
              ))}
            </div>

            {/* Interactive Terminal Output */}
            <div className="bg-[#0f141c] text-green-400 font-mono text-[10px] sm:text-xs rounded-xl p-4 min-h-[220px] max-h-[240px] overflow-y-auto space-y-1.5 shadow-inner">
              {logs.length === 0 && (
                <span className="text-slate-400 block animate-pulse">
                  // Ready for trigger simulation deployment click...
                </span>
              )}
              <AnimatePresence>
                {logs.map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      log.startsWith("[SUCCESS]") 
                        ? "text-emerald-400 font-bold" 
                        : log.startsWith("[BUILD]") 
                          ? "text-blue-400" 
                          : "text-slate-300"
                    }
                  >
                    {log}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Deployment Success Indicator */}
            {deployStep === deploymentLogs.length && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 p-3 bg-success-brand/10 border border-success-brand/20 rounded-xl text-success-brand"
              >
                <FiCheckCircle className="flex-shrink-0" />
                <span className="text-xs font-semibold">Service: production-ecs-endpoint is healthy.</span>
              </motion.div>
            )}
          </GlassCard>
        </div>

      </div>
    </section>
  );
};
