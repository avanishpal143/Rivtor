import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiSearch, FiLayers, FiCode, FiSend, FiTrendingUp } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand business objectives, operational challenges, and technical requirements.",
      icon: <FiSearch size={22} />,
      color: "bg-blue-50 text-primary border-blue-100"
    },
    {
      num: "02",
      title: "Design",
      desc: "Create scalable architecture tailored specifically to your organization's goals.",
      icon: <FiLayers size={22} />,
      color: "bg-purple-50 text-secondary border-purple-100"
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop secure, maintainable software using modern engineering best practices.",
      icon: <FiCode size={22} />,
      color: "bg-indigo-50 text-primary border-indigo-100"
    },
    {
      num: "04",
      title: "Deploy",
      desc: "Launch with confidence using optimized cloud infrastructure and deployment strategies.",
      icon: <FiSend size={22} />,
      color: "bg-teal-50 text-success-brand border-teal-100"
    },
    {
      num: "05",
      title: "Optimize",
      desc: "Continuously monitor, improve, and evolve systems as your business grows.",
      icon: <FiTrendingUp size={22} />,
      color: "bg-orange-50 text-orange-500 border-orange-100"
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!sectionRef.current || !containerRef.current) return;

      const totalHorizontalWidth = containerRef.current.scrollWidth - window.innerWidth;

      // Pinned Horizontal Scroll Trigger
      gsap.to(containerRef.current, {
        x: () => -totalHorizontalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 0.8,
          start: "top top",
          end: () => `+=${totalHorizontalWidth + 400}`,
          invalidateOnRefresh: true,
        }
      });

      // Animated Progress Line on Scroll
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current,
          { width: "0%" },
          {
            width: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => `+=${totalHorizontalWidth + 400}`,
              scrub: true,
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-bg-brand border-b border-border-brand overflow-hidden">
      
      {/* Scrollable Horizontal Panel Wrapper */}
      <div 
        ref={containerRef} 
        className="flex items-center min-h-screen py-12 flex-nowrap w-fit relative"
        style={{ willChange: 'transform' }}
      >
        
        {/* Editorial Heading Panel */}
        <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center px-12 lg:px-24 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-brand leading-none tracking-tight max-w-xl">
            A Structured, High-Precision Process
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed max-w-md">
            We don't believe in guesswork. Every engagement follows a systematic engineering loop to guarantee predictable delivery and operations.
          </p>
          <div className="inline-flex items-center gap-2 text-xs text-muted-brand pt-4">
            <span>Scroll vertically to see the process flow</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>

        {/* Dynamic Timeline Line in Background */}
        <div className="absolute left-[80vw] right-24 top-1/2 -translate-y-1/2 h-1 bg-border-brand/40 w-[300vw] z-0">
          <div 
            ref={progressLineRef} 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_12px_#2e5bff]" 
          />
        </div>

        {/* Step Panels */}
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="w-[80vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 px-8 sm:px-12 relative z-10 flex flex-col justify-center"
          >
            {/* Step Card */}
            <div className="bg-white border border-border-brand/80 rounded-[32px] p-8 sm:p-10 shadow-[0_6px_30px_rgba(232,237,247,0.35)] space-y-6 hover:border-secondary transition-colors duration-500 relative group overflow-hidden">
              
              {/* Ripple Hover Gradient */}
              <span className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Row: Icon and Step Number */}
              <div className="flex justify-between items-center relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${step.color}`}>
                  {step.icon}
                </div>
                <span className="text-5xl font-black text-border-brand/80 tracking-tighter font-mono">
                  {step.num}
                </span>
              </div>

              {/* Step Info */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-text-brand">{step.title}</h3>
                <p className="text-sm sm:text-base text-body-brand leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-border-brand/40 text-[10px] font-mono text-muted-brand relative z-10">
                STAGE_{step.num}_VALIDATED
              </div>
            </div>
          </div>
        ))}

        {/* Blank Ending Buffer */}
        <div className="w-[20vw] flex-shrink-0" />
      </div>
    </div>
  );
};
