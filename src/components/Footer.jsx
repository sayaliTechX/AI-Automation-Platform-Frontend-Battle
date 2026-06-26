import React from 'react';
import { LogoIcon, GithubIcon, TwitterIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oceanic border-t border-mint/10 pt-16 pb-12" aria-label="AetherFlow Site Directory">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
        {/* Brand Block */}
        <div className="md:col-span-2 flex flex-col items-start gap-4">
          <a href="#" className="flex items-center gap-2.5 font-mono text-xl font-bold text-arctic tracking-wider group focus-visible:ring-2 focus-visible:ring-forsythia" aria-label="AetherFlow Homepage">
            <LogoIcon className="group-hover:scale-105 transition-transform duration-200" />
            <span>Aether<span className="text-forsythia">Flow</span></span>
          </a>
          <p className="font-sans text-sm text-mint/60 max-w-sm leading-relaxed mt-2">
            The premium stateful automation engine built for modern database pipelines, API routing, and AI-driven data mapping.
          </p>
        </div>

        {/* Links Column 1 - Product */}
        <div className="flex flex-col gap-4 font-sans">
          <h4 className="font-mono text-xs uppercase tracking-widest text-mint/45 font-bold">
            Product
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm" aria-label="Product Links">
            <li>
              <a href="#features" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                Pricing Plans
              </a>
            </li>
            <li>
              <a href="#" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                Developer API
              </a>
            </li>
            <li>
              <a href="#" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded flex items-center gap-2">
                <span>Platform Status</span>
                <span className="w-1.5 h-1.5 rounded-full bg-mint animate-ping"></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Links Column 2 - Legal */}
        <div className="flex flex-col gap-4 font-sans">
          <h4 className="font-mono text-xs uppercase tracking-widest text-mint/45 font-bold">
            Legal & Security
          </h4>
          <ul className="flex flex-col gap-2.5 text-sm" aria-label="Legal Disclosures">
            <li>
              <a href="#" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                SOC2 Certification
              </a>
            </li>
            <li>
              <a href="#" className="text-mint/75 hover:text-forsythia transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded">
                GDPR Compliance
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Links & Copyright Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 border-t border-mint/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Social Link List */}
        <div className="flex items-center gap-4.5" aria-label="AetherFlow Social Media Channels">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-nocturnal/30 text-mint/70 hover:text-forsythia hover:bg-nocturnal/60 transition-all duration-hover focus-visible:ring-2 focus-visible:ring-forsythia"
            aria-label="AetherFlow GitHub Profile"
          >
            <GithubIcon />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-nocturnal/30 text-mint/70 hover:text-forsythia hover:bg-nocturnal/60 transition-all duration-hover focus-visible:ring-2 focus-visible:ring-forsythia"
            aria-label="AetherFlow Twitter Profile"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-nocturnal/30 text-mint/70 hover:text-forsythia hover:bg-nocturnal/60 transition-all duration-hover focus-visible:ring-2 focus-visible:ring-forsythia"
            aria-label="AetherFlow LinkedIn Page"
          >
            <LinkedinIcon />
          </a>
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-mint/45 text-center sm:text-right">
          &copy; {currentYear} AetherFlow Technologies, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
