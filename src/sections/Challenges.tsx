import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiAlertCircle, FiTrendingDown, FiDatabase } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Challenges: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPinRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Media query to only pin on desktop (screen width >= 1024px)
    let ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;
      
      if (isDesktop && containerRef.current && leftPinRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top+=100",
          end: "bottom bottom",
          pin: leftPinRef.current,
          pinSpacing: false,
        });
      }

      // Clip Reveal Animations for Panels
      const panels = [panel1Ref.current, panel2Ref.current, panel3Ref.current];
      panels.forEach((panel) => {
        if (!panel) return;
        gsap.fromTo(panel, 
          { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 50, opacity: 0 },
          { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
            y: 0, 
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom-=100",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-bg-alt py-24 sm:py-32 border-b border-border-brand overflow-visible"
      id="challenges"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
        
        {/* Left Side: Sticky Editorial Intro */}
        <div className="lg:col-span-5 flex flex-col justify-start h-fit">
          <div ref={leftPinRef} className="space-y-6 lg:max-w-md pt-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight leading-tight">
              The True Cost of Legacy Infrastructure
            </h2>
            <p className="text-base sm:text-lg text-body-brand leading-relaxed">
              Why traditional IT vendor practices and aging software environments drag down business agility, inflate maintenance budgets, and slow down digital expansion.
            </p>
            
            <div className="hidden lg:flex items-center gap-2 text-xs text-muted-brand pt-8 border-t border-border-brand/60">
              <span>Scroll to review structural friction points</span>
              <span className="animate-bounce font-bold">↓</span>
            </div>
          </div>
        </div>

        {/* Right Side: Storytelling Panels (Asymmetrical) */}
        <div className="lg:col-span-7 flex flex-col space-y-16 lg:space-y-24">
          
          {/* Panel 1 */}
          <div 
            ref={panel1Ref}
            className="bg-white border border-border-brand rounded-[24px] p-8 sm:p-12 shadow-[0_4px_30px_rgba(232,237,247,0.3)] transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(232,237,247,0.6)] flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center border border-red-100">
              <FiTrendingDown size={24} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-text-brand">
                Inflexible Monoliths & Overhead
              </h3>
              <p className="text-sm sm:text-base text-body-brand leading-relaxed">
                Aging architectures bind applications together, creating a fragile web of dependencies. Every minor code release triggers high risk of runtime failures, requiring manual oversight and draining precious engineering resources that should be spent on growth.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500/80 bg-red-50/50 px-3 py-1 rounded-full w-fit">
                <span>Result: Up to 60% of tech budget consumed by maintenance</span>
              </div>
            </div>
          </div>

          {/* Panel 2 (Asymmetric Shift: Margins and Dimensions) */}
          <div 
            ref={panel2Ref}
            className="bg-white border border-border-brand rounded-[24px] p-8 sm:p-12 shadow-[0_4px_30px_rgba(232,237,247,0.3)] transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(232,237,247,0.6)] flex flex-col md:flex-row gap-6 items-start lg:w-[95%] lg:self-end"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center border border-orange-100">
              <FiAlertCircle size={24} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-text-brand">
                Pipeline Friction & Release Lag
              </h3>
              <p className="text-sm sm:text-base text-body-brand leading-relaxed">
                Manual deployment scripts and inconsistent environments form critical barriers to speed. Without automated testing, compliance pipelines, and containerized deployments, getting a product feature from code to production takes weeks instead of minutes.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500/80 bg-orange-50/50 px-3 py-1 rounded-full w-fit">
                <span>Result: Delivery cycle slowdown and lost market opportunities</span>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div 
            ref={panel3Ref}
            className="bg-white border border-border-brand rounded-[24px] p-8 sm:p-12 shadow-[0_4px_30px_rgba(232,237,247,0.3)] transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(232,237,247,0.6)] flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center border border-amber-100">
              <FiDatabase size={24} />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-text-brand">
                Data Silos & Scaling Bottlenecks
              </h3>
              <p className="text-sm sm:text-base text-body-brand leading-relaxed">
                Legacy database structures lack automatic scaling, creating performance bottlenecks during high-traffic spikes. Fragmented APIs and disconnected databases restrict fluid information transfer, resulting in isolated silos and stale reporting metrics.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500/80 bg-amber-50/50 px-3 py-1 rounded-full w-fit">
                <span>Result: System downtimes and operational blind spots</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
