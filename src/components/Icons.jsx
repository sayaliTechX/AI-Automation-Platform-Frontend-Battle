import React from 'react';

// Custom SVG wrappers using the exact paths extracted from the provided files

// 1. Cog / 8-tooth (AI Automation Agent) - from cog-8-tooth.svg
export const CogIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93c.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204c.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78c-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107c-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93c-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204c-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78c.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107c.397-.165.71-.505.78-.929l.15-.894Z" />
    <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
  </svg>
);

// 2. Chart Pie (Real-time Analytics) - from chart-pie.svg
export const ChartPieIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
    <path d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
  </svg>
);

// 3. Cube Solid (SOC2 Secured Isolation) - from cube-16-solid.svg
export const CubeIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 fill-current ${className || ''}`}
    viewBox="0 0 16 16"
  >
    <path d="M8.372 1.349a.75.75 0 0 0-.744 0l-4.81 2.748L8 7.131l5.182-3.034zM14 5.357L8.75 8.43v6.005l4.872-2.784A.75.75 0 0 0 14 11zm-6.75 9.078V8.43L2 5.357V11c0 .27.144.518.378.651z" />
  </svg>
);

// 4. Arrow Trending Up (Visual Workflow Builder) - from arrow-trending-up.svg
export const ArrowTrendingUpIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

// 5. Link (Instant API Gateway) - from link.svg
export const LinkIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
  </svg>
);

// 6. Arrow Path (Universal Cloud Sync) - from arrow-path.svg
export const ArrowPathIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

// 7. Chevron Down - from chevron-down.svg
export const ChevronDownIcon = ({ className }) => (
  <svg 
    className={`w-4 h-4 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="m19.5 8.25l-7.5 7.5l-7.5-7.5" />
  </svg>
);

// 8. Close / X Mark - from x-mark.svg
export const CloseIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// 9. Search - from search.svg
export const SearchIcon = ({ className }) => (
  <svg 
    className={`w-5 h-5 fill-current ${className || ''}`}
    viewBox="0 0 20 20"
  >
    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33l-1.42 1.42l-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
  </svg>
);

// Standard navigation / menu helper icons
export const MenuIcon = ({ className }) => (
  <svg 
    className={`w-6 h-6 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CheckIcon = ({ className }) => (
  <svg 
    className={`w-5 h-5 text-forsythia stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const ArrowRightIcon = ({ className }) => (
  <svg 
    className={`w-4 h-4 stroke-current fill-none ml-1 inline ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// 10. Globe icon for selector
export const GlobeIcon = ({ className }) => (
  <svg 
    className={`w-4 h-4 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// AetherFlow Custom Logo
export const LogoIcon = ({ className }) => (
  <svg 
    className={`w-8 h-8 fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="url(#logo-grad-1)" strokeWidth="2.5" />
    <path d="M2 17l10 5 10-5" stroke="url(#logo-grad-2)" strokeWidth="2" />
    <path d="M2 12l10 5 10-5" stroke="url(#logo-grad-3)" strokeWidth="1.5" />
    <defs>
      <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFC801" />
        <stop offset="100%" stopColor="#FF9932" />
      </linearGradient>
      <linearGradient id="logo-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF9932" />
        <stop offset="100%" stopColor="#114C5A" />
      </linearGradient>
      <linearGradient id="logo-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#114C5A" />
        <stop offset="100%" stopColor="#D9E8E2" />
      </linearGradient>
    </defs>
  </svg>
);

// Social Icons
export const GithubIcon = ({ className }) => (
  <svg 
    className={`w-5 h-5 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const TwitterIcon = ({ className }) => (
  <svg 
    className={`w-5 h-5 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export const LinkedinIcon = ({ className }) => (
  <svg 
    className={`w-5 h-5 stroke-current fill-none ${className || ''}`}
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
  </svg>
);
