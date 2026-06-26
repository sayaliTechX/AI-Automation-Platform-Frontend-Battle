import React from 'react';
import { CogIcon, ChartPieIcon, CubeIcon, ArrowTrendingUpIcon, LinkIcon, ArrowPathIcon } from '../Icons';

// Map feature icon keys to custom icon elements
const renderFeatureIcon = (iconName, className) => {
  switch (iconName) {
    case 'robot':
      return <CogIcon className={className} />;
    case 'chart':
      return <ChartPieIcon className={className} />;
    case 'shield':
      return <CubeIcon className={className} />;
    case 'workflow':
      return <ArrowTrendingUpIcon className={className} />;
    case 'api':
      return <LinkIcon className={className} />;
    case 'cloud':
      return <ArrowPathIcon className={className} />;
    default:
      return null;
  }
};

export const BentoGrid = ({ features, activeIndex, setActiveIndex }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
      {features.map((feature, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div
            key={feature.id}
            onClick={() => setActiveIndex(idx)}
            className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden bento-glow-hover flex flex-col justify-between ${
              feature.gridClass
            } ${
              isActive 
                ? 'bg-nocturnal/60 border border-forsythia/35' 
                : 'bg-nocturnal/20 border border-mint/10 hover:border-mint/25'
            }`}
            style={{
              boxShadow: isActive ? '0 0 25px 2px rgba(255, 200, 1, 0.12)' : 'none'
            }}
          >
            {/* Background highlight */}
            {isActive && (
              <div className="absolute inset-0 radial-saffron-glow pointer-events-none opacity-40"></div>
            )}
            
            {/* Header/Icon */}
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className={`p-3.5 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-forsythia text-oceanic shadow-md' 
                  : 'bg-nocturnal/50 text-mint'
              }`}>
                {renderFeatureIcon(feature.icon, "w-6 h-6")}
              </div>
              
              {isActive && (
                <span className="font-mono text-[10px] bg-forsythia/15 text-forsythia px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                  Active Control
                </span>
              )}
            </div>

            {/* Content */}
            <div className="mt-4 relative z-10">
              <h3 className="font-mono text-lg font-bold text-arctic mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-mint/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            {/* Glow line decoration */}
            <div className={`absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-300 ${
              isActive ? 'bg-gradient-to-r from-forsythia to-saffron' : 'bg-transparent'
            }`}></div>
          </div>
        );
      })}
    </div>
  );
};
export default BentoGrid;
