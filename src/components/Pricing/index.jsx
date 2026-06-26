import React, { useState } from 'react';
import pricingData from '../../data/pricing';
import PricingCard from './PricingCard';
import { GlobeIcon } from '../Icons';

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [currency, setCurrency] = useState('USD'); // 'USD' | 'INR' | 'EUR'

  const handleBillingToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <section 
      id="pricing" 
      className="py-24 relative overflow-hidden bg-oceanic grid-bg-overlay"
      aria-label="Pricing Plans"
    >
      {/* Glow Overlays */}
      <div className="absolute top-[20%] left-[20%] w-[380px] h-[380px] rounded-full bg-nocturnal/20 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[15%] w-[420px] h-[420px] rounded-full bg-saffron/5 blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-forsythia font-bold mb-3">
            Pricing Structures
          </h2>
          <p className="font-mono text-3xl sm:text-4xl font-bold text-arctic tracking-tight mb-4">
            Predictable rates. Zero surprises.
          </p>
          <p className="font-sans text-base text-mint/80">
            Start automating queries on our free tier, and scale up as your volume increases. Dynamic routing is always active across all plans.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Monthly / Annual Toggle Switch */}
          <div className="bg-nocturnal/40 p-1.5 rounded-xl border border-mint/10 flex items-center shadow-md">
            <button
              type="button"
              onClick={() => handleBillingToggle('monthly')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all duration-hover ${
                billingCycle === 'monthly'
                  ? 'bg-forsythia text-oceanic shadow-sm'
                  : 'text-mint/70 hover:text-arctic'
              }`}
              aria-label="Toggle Monthly Billing"
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => handleBillingToggle('annual')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold font-mono tracking-wider transition-all duration-hover flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-forsythia text-oceanic shadow-sm'
                  : 'text-mint/70 hover:text-arctic'
              }`}
              aria-label="Toggle Annual Billing with 20 percent discount"
            >
              <span>Annual</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                billingCycle === 'annual' ? 'bg-oceanic/20 text-oceanic' : 'bg-forsythia/10 text-forsythia'
              }`}>
                -20%
              </span>
            </button>
          </div>

          {/* Currency Dropdown Selector */}
          <div className="relative flex items-center gap-2 bg-nocturnal/40 border border-mint/10 rounded-xl px-3.5 py-2.5 shadow-md">
            <GlobeIcon className="text-mint/60 w-4.5 h-4.5" />
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="bg-transparent text-sm font-semibold font-mono text-mint/90 hover:text-arctic focus:outline-none pr-6 cursor-pointer appearance-none"
              aria-label="Select Currency Billing Option"
            >
              {pricingData.currencies.map((curr) => (
                <option key={curr.code} value={curr.code} className="bg-oceanic text-arctic">
                  {curr.code} ({curr.symbol})
                </option>
              ))}
            </select>
            {/* Custom select arrow pointer */}
            <div className="absolute right-3.5 pointer-events-none text-mint/50">
              <svg className="w-3 h-3 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="3">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {Object.keys(pricingData.plans).map((planKey) => {
            const plan = pricingData.plans[planKey];
            return (
              <PricingCard
                key={plan.id}
                planId={plan.id}
                name={plan.name}
                description={plan.description}
                features={plan.features}
                cta={plan.cta}
                popular={plan.popular}
                billingCycle={billingCycle}
                currency={currency}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
