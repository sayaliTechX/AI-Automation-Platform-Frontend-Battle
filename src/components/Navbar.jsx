import React, { useState, useEffect } from 'react';
import { LogoIcon, MenuIcon, CloseIcon } from './Icons';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glassmorphism border-b border-mint/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 font-mono text-xl font-bold text-arctic tracking-wider group focus-visible:ring-2 focus-visible:ring-forsythia focus-visible:outline-none"
          aria-label="AetherFlow Homepage"
        >
          <LogoIcon className="group-hover:scale-105 transition-transform duration-200" />
          <span>Aether<span className="text-forsythia">Flow</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          <a href="#" className="text-mint/80 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded px-1.5 py-0.5">Home</a>
          <a href="#features" className="text-mint/80 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded px-1.5 py-0.5">Features</a>
          <a href="#pricing" className="text-mint/80 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded px-1.5 py-0.5">Pricing</a>
          <a href="#testimonials" className="text-mint/80 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded px-1.5 py-0.5">Testimonials</a>
          <a href="#contact" className="text-mint/80 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded px-1.5 py-0.5">Contact</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            type="button"
            className="text-sm font-medium text-mint/80 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded px-3 py-1.5"
            aria-label="Sign In"
          >
            Login
          </button>
          <a 
            href="#pricing"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-forsythia text-oceanic hover:bg-saffron transition-colors duration-hover shadow-md font-mono focus-visible:ring-2 focus-visible:ring-forsythia"
            aria-label="Get Started with AetherFlow"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-mint hover:bg-nocturnal/40 hover:text-arctic transition-all duration-200 focus-visible:ring-2 focus-visible:ring-forsythia"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Drawer (with sliding effect) */}
      <div
        id="mobile-navigation"
        className={`md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-oceanic/95 backdrop-blur-lg border-t border-mint/5 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 font-sans text-lg font-medium text-center">
          <a 
            href="#" 
            onClick={closeMenu} 
            className="text-mint/90 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded-md py-2"
          >
            Home
          </a>
          <a 
            href="#features" 
            onClick={closeMenu} 
            className="text-mint/90 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded-md py-2"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={closeMenu} 
            className="text-mint/90 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded-md py-2"
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            onClick={closeMenu} 
            className="text-mint/90 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded-md py-2"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu} 
            className="text-mint/90 hover:text-arctic transition-colors duration-hover focus-visible:ring-2 focus-visible:ring-forsythia rounded-md py-2"
          >
            Contact
          </a>

          <hr className="border-mint/10 my-2" />

          <button 
            type="button" 
            onClick={closeMenu} 
            className="text-mint/90 hover:text-arctic py-2 transition-colors focus-visible:ring-2 focus-visible:ring-forsythia"
            aria-label="Sign In"
          >
            Login
          </button>
          <a 
            href="#pricing" 
            onClick={closeMenu} 
            className="w-full py-3 text-center text-base font-semibold rounded-lg bg-forsythia text-oceanic hover:bg-saffron transition-all duration-200 shadow-md font-mono focus-visible:ring-2 focus-visible:ring-forsythia"
            aria-label="Get Started"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
