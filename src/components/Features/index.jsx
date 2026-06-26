import React, { useState } from 'react';
import BentoGrid from './BentoGrid';
import Accordion from './Accordion';
import featuresData from '../../data/features';

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden bg-oceanic"
      aria-label="Features Section"
    >
      {/* Background Radial Glow Decoration */}
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-nocturnal/20 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] rounded-full bg-saffron/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-forsythia font-bold mb-3">
            Core Abstractions
          </h2>
          <p className="font-mono text-3xl sm:text-4xl font-bold text-arctic tracking-tight mb-4">
            Architected for Autonomous scale
          </p>
          <p className="font-sans text-base text-mint/80">
            AetherFlow coordinates multiple edge modules in parallel, driving unstructured databases to fully verified schemas without latency penalties.
          </p>
        </div>

        {/* Desktop Bento Grid layout (hidden on mobile) */}
        <div className="hidden md:block">
          <BentoGrid 
            features={featuresData} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
          />
        </div>

        {/* Mobile Accordion layout (hidden on desktop) */}
        <div className="block md:hidden">
          <Accordion 
            features={featuresData} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
