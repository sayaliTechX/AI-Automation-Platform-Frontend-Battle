import React from 'react';
import DashboardIllustration from './DashboardIllustration';
import { ArrowRightIcon } from './Icons';

export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden grid-bg-overlay"
      aria-label="Welcome Section"
    >
      {/* Animated Glowing Background Circles */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-nocturnal/30 blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-saffron/5 blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-forsythia/5 blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left animate-slide-up">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-mint/15 bg-nocturnal/20 backdrop-blur-md mb-6 hover:border-mint/30 transition-colors duration-200">
            <span className="flex h-2 w-2 rounded-full bg-forsythia animate-ping"></span>
            <span className="font-mono text-xs text-mint/90 tracking-wider">AetherFlow v2.0 Edge Agent Released</span>
          </div>

          {/* Heading */}
          <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl font-bold text-arctic tracking-tight leading-[1.1] mb-6">
            Power your future with <span className="bg-clip-text text-transparent bg-gradient-to-r from-forsythia via-saffron to-mint">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-base sm:text-lg text-mint/80 max-w-2xl mb-8 leading-relaxed">
            The next-generation enterprise-grade AI automation platform. Connect files, databases, and third-party APIs into hyper-fast, secure neural pipelines that auto-correct schema changes on the fly.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
            <a 
              href="#pricing"
              className="w-full sm:w-auto text-center px-6 py-3.5 text-base font-semibold rounded-lg bg-forsythia text-oceanic hover:bg-saffron transition-all duration-200 shadow-lg font-mono focus-visible:ring-2 focus-visible:ring-forsythia"
              aria-label="Start Free Trial today"
            >
              Start Free Trial
            </a>
            <button 
              type="button"
              className="w-full sm:w-auto text-center px-6 py-3.5 text-base font-semibold rounded-lg bg-nocturnal/30 text-arctic border border-mint/20 hover:border-mint/55 hover:bg-nocturnal/60 transition-all duration-200 backdrop-blur font-mono focus-visible:ring-2 focus-visible:ring-forsythia"
              aria-label="Book a Product Demo"
            >
              Book Demo <ArrowRightIcon />
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 w-full border-t border-mint/10 pt-8" aria-label="Key Performance Indicators">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-forsythia">99.9%</span>
              <span className="font-sans text-xs text-mint/60 uppercase tracking-wider">Runner Uptime</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-saffron">10M+</span>
              <span className="font-sans text-xs text-mint/60 uppercase tracking-wider">Tasks Done</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-mint">5000+</span>
              <span className="font-sans text-xs text-mint/60 uppercase tracking-wider">Enterprise Clients</span>
            </div>
          </div>
        </div>

        {/* Right: Dashboard Illustration */}
        <div className="lg:col-span-5 w-full flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="w-full max-w-lg lg:max-w-none">
            <DashboardIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
