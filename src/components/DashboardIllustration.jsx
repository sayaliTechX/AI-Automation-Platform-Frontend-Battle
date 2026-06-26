import React from 'react';

export const DashboardIllustration = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl glassmorphism border border-mint/10 overflow-hidden shadow-2xl group animate-float">
      {/* Top Bar with window controls */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-mint/10 bg-oceanic/50">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-saffron/80"></div>
          <div className="w-3 h-3 rounded-full bg-forsythia/80"></div>
          <div className="w-3 h-3 rounded-full bg-mint/50"></div>
        </div>
        <div className="text-xs font-mono text-mint/40 tracking-wider">aetherflow.io/dashboard</div>
        <div className="w-8"></div>
      </div>

      {/* Grid Pattern inside dashboard */}
      <div className="absolute inset-0 top-11 grid-bg-overlay opacity-30 pointer-events-none"></div>

      {/* Dashboard Body */}
      <div className="p-5 grid grid-cols-3 gap-4 h-[calc(100%-45px)] relative z-10 font-sans">
        
        {/* Left Sidebar Mock */}
        <div className="col-span-1 border-r border-mint/5 pr-4 flex flex-col gap-3.5">
          <div className="h-6 w-20 rounded bg-mint/10 mb-2"></div>
          <div className="h-8 rounded-lg bg-nocturnal/40 border border-mint/10 p-2 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-forsythia/80"></div>
            <div className="h-2 w-16 rounded bg-arctic/30"></div>
          </div>
          <div className="h-8 rounded-lg bg-oceanic/30 p-2 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-mint/20"></div>
            <div className="h-2 w-12 rounded bg-arctic/20"></div>
          </div>
          <div className="h-8 rounded-lg bg-oceanic/30 p-2 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-mint/20"></div>
            <div className="h-2 w-14 rounded bg-arctic/20"></div>
          </div>
          <div className="mt-auto h-12 rounded-lg bg-nocturnal/20 border border-mint/5 p-2 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center font-mono text-[9px] text-saffron">AI</div>
            <div className="flex flex-col gap-1">
              <div className="h-2.5 w-12 rounded bg-arctic/40"></div>
              <div className="h-1.5 w-8 rounded bg-arctic/20"></div>
            </div>
          </div>
        </div>

        {/* Right Dashboard Contents */}
        <div className="col-span-2 flex flex-col gap-4 overflow-hidden">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-nocturnal/30 border border-mint/5 flex flex-col gap-1.5">
              <div className="text-[10px] uppercase font-mono tracking-wider text-mint/40">Efficiency Node</div>
              <div className="text-xl font-mono font-bold text-forsythia">99.98%</div>
              <div className="w-full h-1.5 rounded-full bg-oceanic">
                <div className="h-full w-[99.9%] rounded-full bg-gradient-to-r from-forsythia to-saffron"></div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-nocturnal/30 border border-mint/5 flex flex-col gap-1.5">
              <div className="text-[10px] uppercase font-mono tracking-wider text-mint/40">Data Ingestion</div>
              <div className="text-xl font-mono font-bold text-mint">42.8 GB/s</div>
              <div className="w-full h-1.5 rounded-full bg-oceanic">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-mint to-nocturnal"></div>
              </div>
            </div>
          </div>

          {/* Large Chart Container */}
          <div className="flex-1 p-4 rounded-xl bg-nocturnal/20 border border-mint/5 relative flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-center z-10">
              <div className="text-xs font-mono text-arctic/80">Active Neural Pipelines</div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-forsythia animate-ping"></div>
                <div className="w-2.5 h-2.5 rounded bg-forsythia/30"></div>
              </div>
            </div>
            
            {/* SVG Visual Neural Chart and Nodes */}
            <div className="absolute inset-0 top-8 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full opacity-60" viewBox="0 0 300 120" fill="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFC801" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#172B36" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                {/* Horizontal reference lines */}
                <line x1="20" y1="20" x2="280" y2="20" stroke="rgba(241, 246, 252, 0.05)" strokeDasharray="4 4" />
                <line x1="20" y1="60" x2="280" y2="60" stroke="rgba(241, 246, 252, 0.05)" strokeDasharray="4 4" />
                <line x1="20" y1="100" x2="280" y2="100" stroke="rgba(241, 246, 252, 0.05)" strokeDasharray="4 4" />
                
                {/* Glowing area */}
                <path d="M20 100 Q 60 40, 100 80 T 180 30 T 250 90 T 280 10 L 280 110 L 20 110 Z" fill="url(#chartGrad)" />
                
                {/* Chart line */}
                <path d="M20 100 Q 60 40, 100 80 T 180 30 T 250 90 T 280 10" stroke="#FFC801" strokeWidth="2.5" strokeLinecap="round" />
                
                {/* Pulsing Nodes */}
                <circle cx="100" cy="80" r="5" fill="#FFC801" />
                <circle cx="100" cy="80" r="10" stroke="#FFC801" strokeWidth="1.5" className="animate-ping origin-center" style={{ transformOrigin: '100px 80px' }} />
                
                <circle cx="180" cy="30" r="5" fill="#FF9932" />
                <circle cx="180" cy="30" r="10" stroke="#FF9932" strokeWidth="1.5" className="animate-ping origin-center" style={{ transformOrigin: '180px 30px' }} />
                
                <circle cx="280" cy="10" r="5" fill="#D9E8E2" />
              </svg>
            </div>
            
            {/* Legend */}
            <div className="flex justify-between text-[9px] font-mono text-mint/30 z-10 mt-auto">
              <span>00:00</span>
              <span>08:00</span>
              <span>16:00</span>
              <span>24:00</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Accent Radial Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-forsythia/5 blur-3xl pointer-events-none"></div>
    </div>
  );
};
export default DashboardIllustration;
