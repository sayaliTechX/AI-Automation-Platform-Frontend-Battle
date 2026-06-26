import React from 'react';
import pricingData from '../../data/pricing';

const CURRENCY_SYMBOLS = {
  INR: '₹',
  USD: '$',
  EUR: '€'
};

export const PriceDisplay = React.memo(({ planId, billingCycle, currency }) => {
  const plan = pricingData.plans[planId];
  const baseMonthlyPrice = plan.monthly[currency];
  
  let displayedPrice = baseMonthlyPrice;
  let annualSaving = 0;

  if (billingCycle === 'annual') {
    // 20% discount on monthly subscription
    displayedPrice = Math.round(baseMonthlyPrice * 0.8);
    annualSaving = Math.round((baseMonthlyPrice - displayedPrice) * 12);
  }

  const symbol = CURRENCY_SYMBOLS[currency] || '$';

  return (
    <div className="flex flex-col gap-1 font-mono">
      <div className="flex items-baseline gap-1.5">
        <span className="text-5xl font-extrabold text-arctic tracking-tight">
          {symbol}{displayedPrice.toLocaleString()}
        </span>
        <span className="text-sm text-mint/55 font-sans font-medium">
          / mo
        </span>
      </div>
      
      {billingCycle === 'annual' ? (
        <div className="text-[11px] text-forsythia font-sans font-semibold tracking-wide">
          Billed annually ({symbol}{(displayedPrice * 12).toLocaleString()}/yr)
        </div>
      ) : (
        <div className="text-[11px] text-mint/35 font-sans font-medium tracking-wide">
          Billed month-to-month
        </div>
      )}
    </div>
  );
});

export default PriceDisplay;
