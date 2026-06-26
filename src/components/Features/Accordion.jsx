import React from 'react';
import { CogIcon, ChartPieIcon, CubeIcon, ArrowTrendingUpIcon, LinkIcon, ArrowPathIcon, ChevronDownIcon } from '../Icons';

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

export const Accordion = ({ features, activeIndex, setActiveIndex }) => {
  return (
    <div className="flex flex-col gap-4 font-sans">
      {features.map((feature, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div
            key={feature.id}
            className={`rounded-xl border transition-all duration-layout overflow-hidden ${
              isActive 
                ? 'bg-nocturnal/60 border-forsythia/35' 
                : 'bg-nocturnal/20 border-mint/10'
            }`}
          >
            {/* Header / Click Trigger */}
            <button
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              aria-expanded={isActive}
              aria-label={`Toggle ${feature.title}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-lg transition-colors duration-hover ${
                  isActive 
                    ? 'bg-forsythia text-oceanic shadow-sm' 
                    : 'bg-nocturnal/50 text-mint'
                }`}>
                  {renderFeatureIcon(feature.icon, "w-5 h-5")}
                </div>
                <span className="font-mono text-base font-bold text-arctic tracking-wide">
                  {feature.title}
                </span>
              </div>
              <ChevronDownIcon 
                className={`transform transition-transform duration-layout text-mint/60 ${
                  isActive ? 'rotate-180 text-forsythia' : ''
                }`}
              />
            </button>

            {/* Sliding Content Area using Grid Rows */}
            <div 
              className={`grid transition-all duration-layout ease-in-out ${
                isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-1 text-sm text-mint/70 leading-relaxed border-t border-mint/5 mt-1 bg-oceanic/20">
                  {feature.description}
                  
                  {isActive && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono font-semibold text-forsythia">
                      <span>Neural Node Online</span>
                      <span className="flex h-1.5 w-1.5 rounded-full bg-forsythia animate-ping"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
