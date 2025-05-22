
import React, { useState, useEffect } from 'react';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DesignItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const designItems: DesignItem[] = [
  {
    id: 1,
    name: "Royal Ankara Gown",
    price: 35000,
    image: "https://images.unsplash.com/photo-1580650487544-a7c620da0c8b?q=80&w=1000&auto=format&fit=crop",
    category: "Gowns"
  },
  {
    id: 2,
    name: "Kente Fusion Wrap",
    price: 27500,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000&auto=format&fit=crop",
    category: "Wraps"
  },
  {
    id: 3,
    name: "Modern Dashiki Set",
    price: 32000,
    image: "https://images.unsplash.com/photo-1595070927333-f4a98053526f?q=80&w=1000&auto=format&fit=crop",
    category: "Sets"
  },
  {
    id: 4,
    name: "Elegant Adire Dress",
    price: 29000,
    image: "https://images.unsplash.com/photo-1594416286851-05439c3b8874?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses"
  },
  {
    id: 5,
    name: "Traditional Aso-Oke",
    price: 40000,
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop",
    category: "Traditional"
  },
  {
    id: 6,
    name: "Contemporary Kaftan",
    price: 31000,
    image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?q=80&w=1000&auto=format&fit=crop",
    category: "Kaftans"
  },
];

const DesignGallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Check if all images can load properly
    const imagePromises = designItems.map((item) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Some images failed to load:", err));
  }, []);

  return (
    <section className="py-20 bg-muted/30" id="designs">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Exquisite Designs</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Discover our collection of handcrafted African attires that celebrate culture and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="gallery-card overflow-hidden shadow-lg opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-80 overflow-hidden">
                <AspectRatio ratio={4/5} className="bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1580650487544-a7c620da0c8b?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </AspectRatio>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair font-bold text-xl text-burgundy">{item.name}</h3>
                  <span className="bg-gold text-black text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Tag size={14} className="mr-1" />
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.category}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <button className="w-full btn-secondary">View Details</button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary inline-flex">View All Designs</Link>
        </div>
      </div>
    </section>
  );
};

export default DesignGallery;
