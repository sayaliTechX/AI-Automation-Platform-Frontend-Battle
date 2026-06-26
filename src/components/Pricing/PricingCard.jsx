import React from 'react';
import PriceDisplay from './PriceDisplay';
import { CheckIcon } from '../Icons';

// Static Subcomponent wrapped in React.memo to prevent re-renders
const CardDetails = React.memo(({ name, description, features, cta, popular, children }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-mono text-xl font-bold text-arctic tracking-wide">
            {name}
          </h3>
          {popular && (
            <span className="font-mono text-[9px] font-bold bg-forsythia text-oceanic px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Popular Choice
            </span>
          )}
        </div>
        
        {/* Description */}
        <p className="text-sm text-mint/65 min-h-[48px] leading-relaxed mb-6 font-sans">
          {description}
        </p>
      </div>

      {/* Dynamic Price Display injected here */}
      <div className="mb-6">
        {children}
      </div>

      {/* Features List */}
      <div className="border-t border-mint/10 pt-6 flex-1 flex flex-col justify-between">
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-widest text-mint/40 font-bold mb-4">
            Included Pipelines
          </h4>
          <ul className="flex flex-col gap-3 font-sans" aria-label={`Features list for ${name}`}>
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-mint/80 leading-snug">
                <CheckIcon className="flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA Button */}
        <button
          type="button"
          className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold font-mono tracking-wide transition-all duration-hover focus-visible:ring-2 focus-visible:ring-forsythia ${
            popular
              ? 'bg-forsythia text-oceanic hover:bg-saffron shadow-lg'
              : 'bg-nocturnal/45 text-arctic border border-mint/20 hover:border-mint/55 hover:bg-nocturnal/75'
          }`}
          aria-label={`${cta} for plan ${name}`}
        >
          {cta}
        </button>
      </div>
    </div>
  );
});

// Primary Container
export const PricingCard = ({ planId, name, description, features, cta, popular, billingCycle, currency }) => {
  return (
    <div 
      className={`rounded-2xl p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
        popular 
          ? 'bg-nocturnal/35 border-2 border-forsythia/45' 
          : 'bg-nocturnal/15 border border-mint/10 hover:border-mint/25'
      }`}
      style={{
        boxShadow: popular ? '0 0 30px 4px rgba(255, 200, 1, 0.08)' : 'none'
      }}
    >
      {popular && (
        <div className="absolute inset-0 radial-saffron-glow pointer-events-none opacity-20"></div>
      )}
      
      <CardDetails
        name={name}
        description={description}
        features={features}
        cta={cta}
        popular={popular}
      >
        <PriceDisplay planId={planId} billingCycle={billingCycle} currency={currency} />
      </CardDetails>
    </div>
  );
};

export default PricingCard;
