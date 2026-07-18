import React from 'react';
import { GlassCard } from '../components/GlassCard';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Erik Johansson",
      role: "CTO | Stockholm",
      text: "Rivtor AB completely transformed our software architecture. Performance improved dramatically while our infrastructure became far easier to manage.",
      initials: "EJ"
    },
    {
      name: "Sofia Lindberg",
      role: "Operations Director | Gothenburg",
      text: "Their engineering team understood both business and technology. Every recommendation had measurable value.",
      initials: "SL"
    },
    {
      name: "Daniel Persson",
      role: "Founder | Malmö",
      text: "Professional, proactive, and technically exceptional from planning through deployment.",
      initials: "DP"
    },
    {
      name: "Anna Svensson",
      role: "Technology Manager | Uppsala",
      text: "Working with Rivtor AB gave us confidence that our systems could scale alongside our business.",
      initials: "AS"
    },
    {
      name: "Marcus Nilsson",
      role: "Product Director | Sweden",
      text: "Excellent communication, modern engineering practices, and a long-term mindset made them an invaluable technology partner.",
      initials: "MN"
    }
  ];

  // Double the list for seamless looping marquee
  const marqueeList = [...reviews, ...reviews];

  return (
    <section 
      className="relative py-24 sm:py-36 bg-bg-alt border-b border-border-brand overflow-hidden"
      id="testimonials"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-24 space-y-4">
          <span className="text-primary font-semibold text-xs tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-brand tracking-tight">
            Trusted by Sweden's Leading Engineers
          </h2>
          <p className="text-base sm:text-lg text-body-brand leading-relaxed">
            Here is what engineering leaders and directors say about collaborating with Rivtor AB.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="w-full overflow-hidden relative flex py-4">
        {/* Left & Right Glass Fading Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-bg-alt to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-bg-alt to-transparent z-20 pointer-events-none" />

        <div className="flex gap-6 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap min-w-max">
          {marqueeList.map((rev, i) => (
            <div key={i} className="w-[320px] sm:w-[400px] inline-block whitespace-normal">
              <GlassCard className="h-full flex flex-col justify-between p-6 sm:p-8" hoverEffect>
                <p className="text-xs sm:text-sm text-body-brand leading-relaxed font-normal mb-6 italic">
                  "{rev.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border-brand/40">
                  {/* Avatar Initial */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 flex items-center justify-center font-bold text-xs text-primary">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-text-brand">{rev.name}</h4>
                    <span className="text-[10px] text-muted-brand font-mono uppercase">{rev.role}</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Marquee styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
