import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-oceanic text-arctic selection:bg-mint/30 overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Bento-to-Accordion Section */}
        <Features />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Call to Action Section */}
        <CTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
