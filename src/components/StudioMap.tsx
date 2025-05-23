
import React from 'react';
import { MapPin } from 'lucide-react';

const StudioMap = () => {
  const openGoogleMaps = () => {
    const address = "No 18, Idowu Estate, Ajah, Lagos State, Nigeria";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Visit Our Studio</h2>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
            Come experience our beautiful designs in person at our studio in Ajah, Lagos State
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-burgundy mb-6">Studio Location</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={24} className="mr-3 mt-1 text-gold flex-shrink-0" />
                <div>
                  <p className="font-semibold text-burgundy">Address:</p>
                  <p className="text-muted-foreground">No 18, Idowu Estate<br />Ajah, Lagos State, Nigeria</p>
                </div>
              </div>
              <div className="mt-6">
                <button 
                  onClick={openGoogleMaps}
                  className="btn-primary inline-flex items-center"
                >
                  <MapPin size={18} className="mr-2" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className="w-full h-96 bg-muted rounded-lg flex items-center justify-center cursor-pointer hover:bg-muted/80 transition-colors"
              onClick={openGoogleMaps}
            >
              <div className="text-center">
                <MapPin size={48} className="mx-auto text-gold mb-4" />
                <p className="text-burgundy font-semibold mb-2">Afric Chic Elegance Studio</p>
                <p className="text-sm text-muted-foreground">Click to open in Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioMap;
