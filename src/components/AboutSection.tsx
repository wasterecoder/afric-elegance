
import React from 'react';
import StudioMap from './StudioMap';

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/20" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/27311aca-3231-40c0-88e1-45a09b044d7e.png" 
              alt="Oluwaseun Adeleke - Founder of Afric Chic Elegance" 
              className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold p-4 rounded shadow-lg hidden md:block">
              <p className="font-playfair text-xl italic">"Fashion is our heritage reimagined."</p>
            </div>
          </div>
          
          <div>
            <h2 className="section-title">Our Story</h2>
            <p className="mb-6">
              Afric Chic Elegance was born from a deep love for African culture and a passion for fashion. Our founder, Oluwaseun Adeleke, with over 15 years of experience in the fashion industry, established the brand in Ajah, Lagos State, Nigeria with a mission to showcase the beauty and richness of African textiles and designs to the world.
            </p>
            <p className="mb-6">
              We believe that African fashion is not just clothing; it's a statement of identity, a celebration of heritage, and an expression of the continent's vibrant spirit. Every piece we create tells a story of tradition blended with contemporary elegance.
            </p>
            <p className="mb-8">
              Our team of skilled artisans and designers work meticulously to create garments that honor traditional techniques while embracing modern aesthetics. We source our fabrics ethically and support local communities across Africa.
            </p>
            <div className="flex space-x-4">
              <span className="inline-block h-1 w-24 bg-gold"></span>
              <span className="inline-block h-1 w-12 bg-emerald"></span>
              <span className="inline-block h-1 w-24 bg-burgundy"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Studio Map Section */}
      <StudioMap />
    </section>
  );
};

export default AboutSection;
