
import React, { useState, useEffect } from 'react';

const HeroGallery = () => {
  const images = [
    '/lovable-uploads/1343cd95-c434-4bb4-991d-6778eea18fe5.png',
    '/lovable-uploads/27311aca-3231-40c0-88e1-45a09b044d7e.png',
    '/lovable-uploads/4e05a984-044e-4d04-98a4-ba7be7112e5b.png',
    '/lovable-uploads/6b01eb59-750c-44e0-b928-7cb80e8d14b5.png',
    '/lovable-uploads/6ba901c5-5517-48ed-af7d-2527f4c0214c.png',
    '/lovable-uploads/9914de1d-6f7e-4c69-b436-6c7691a91de9.png',
    '/lovable-uploads/9c4fc432-246f-486b-ad1a-cec140d1b5c6.png',
    '/lovable-uploads/a1e66d34-6a00-419f-83e8-73513d704f5d.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-8 flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md">
        {images.slice(0, 4).map((image, index) => (
          <div 
            key={index} 
            className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-md"
          >
            <img 
              src={images[(currentImageIndex + index) % images.length]}
              alt={`Design ${(currentImageIndex + index) % images.length + 1}`}
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroGallery;
