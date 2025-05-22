
import React from 'react';
import Hero from '@/components/Hero';
import DesignGallery from '@/components/DesignGallery';
import TrainingSection from '@/components/TrainingSection';
import AboutSection from '@/components/AboutSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Designs Section */}
      <DesignGallery />

      {/* Pattern Divider */}
      <div className="pattern-divider"></div>

      {/* Training Section */}
      <TrainingSection />

      {/* Pattern Divider */}
      <div className="pattern-divider"></div>

      {/* About Section */}
      <AboutSection />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
