import React from 'react';
import testimonialsData from '../data/testimonials';

export const Testimonials = () => {
  return (
    <section 
      id="testimonials" 
      className="py-24 relative overflow-hidden bg-oceanic"
      aria-label="Client Testimonials"
    >
      {/* Background decorations */}
      <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-nocturnal/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-saffron/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs uppercase tracking-widest text-forsythia font-bold mb-3">
            Social Proof
          </h2>
          <p className="font-mono text-3xl sm:text-4xl font-bold text-arctic tracking-tight mb-4">
            Validated by technical teams
          </p>
          <p className="font-sans text-base text-mint/80">
            Read stories from principal engineers and co-founders who scaled data ingest pipelines using our autonomous runners.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-nocturnal/15 border border-mint/10 hover:border-mint/35 hover:-translate-y-1.5 hover:bg-nocturnal/25 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Quote Description */}
              <p className="font-sans text-sm text-mint/85 leading-relaxed italic mb-8 relative">
                "{item.review}"
              </p>

              {/* Identity Footer */}
              <div className="flex items-center gap-3 border-t border-mint/5 pt-4">
                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-forsythia to-saffron flex items-center justify-center font-mono text-sm font-bold text-oceanic shadow-inner">
                  {item.avatar}
                </div>
                {/* Text Identity */}
                <div className="flex flex-col">
                  <span className="font-sans text-sm font-semibold text-arctic leading-snug">
                    {item.name}
                  </span>
                  <span className="font-mono text-[10px] text-mint/50 uppercase tracking-wider leading-none mt-1">
                    {item.role}, <span className="text-forsythia">{item.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
