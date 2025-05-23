
import React from 'react';
import { Link } from 'react-router-dom';
import HeroGallery from './HeroGallery';

const Hero = () => {
  return (
    <section className="hero-section flex items-center justify-center text-white">
      <div className="container mx-auto text-center py-20 px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Celebrate Your Roots <span className="text-gold">in Style</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Elegant African attire that blends cultural heritage with modern design for the sophisticated woman
        </p>
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in mb-8" style={{ animationDelay: "0.9s" }}>
          <Link to="/shop" className="btn-primary">
            Explore Designs
          </Link>
          <Link to="/training" className="btn-secondary">
            Start Training
          </Link>
        </div>
        
        {/* Hero Gallery */}
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <HeroGallery />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
};

export default Hero;
