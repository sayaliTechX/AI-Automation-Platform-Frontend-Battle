import React from 'react';

export const CTA = () => {
  return (
    <section 
      id="contact"
      className="py-20 bg-oceanic"
      aria-label="Call to Action Section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Gradient Outer Box */}
        <div className="animated-gradient-bg rounded-3xl p-10 md:p-16 border border-mint/15 shadow-2xl relative overflow-hidden text-center flex flex-col items-center justify-center">
          
          {/* Subtle decoration elements */}
          <div className="absolute inset-0 grid-bg-overlay opacity-20 pointer-events-none"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-forsythia/10 blur-[90px] pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-saffron/10 blur-[100px] pointer-events-none"></div>

          {/* Heading */}
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl font-extrabold text-arctic tracking-tight max-w-3xl mb-6 relative z-10 leading-tight">
            Transform Your Workflow with <span className="bg-clip-text text-transparent bg-gradient-to-r from-forsythia via-saffron to-mint">AI</span>
          </h2>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-mint/85 max-w-2xl mb-10 relative z-10 leading-relaxed">
            Join thousands of teams deploying millions of autonomous data ingestion tasks daily. Start trial pipelines immediately, or speak with our solutions engineers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative z-10">
            <a 
              href="#pricing"
              className="w-full sm:w-auto text-center px-8 py-4 text-base font-bold rounded-xl bg-forsythia text-oceanic hover:bg-saffron hover:-translate-y-0.5 transition-all duration-200 shadow-lg font-mono focus-visible:ring-2 focus-visible:ring-forsythia"
              aria-label="Get Started with AetherFlow"
            >
              Get Started
            </a>
            <button 
              type="button"
              className="w-full sm:w-auto text-center px-8 py-4 text-base font-bold rounded-xl bg-nocturnal/50 text-arctic border border-mint/20 hover:border-mint/55 hover:bg-nocturnal/80 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur font-mono focus-visible:ring-2 focus-visible:ring-forsythia"
              aria-label="Contact sales team"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
