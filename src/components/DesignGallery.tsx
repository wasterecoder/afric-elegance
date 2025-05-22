
import React from 'react';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    price: 350,
    image: "/images/design1.jpg",
    category: "Gowns"
  },
  {
    id: 2,
    name: "Kente Fusion Wrap",
    price: 275,
    image: "/images/design2.jpg",
    category: "Wraps"
  },
  {
    id: 3,
    name: "Modern Dashiki Set",
    price: 320,
    image: "/images/design3.jpg",
    category: "Sets"
  },
  {
    id: 4,
    name: "Elegant Adire Dress",
    price: 290,
    image: "/images/design4.jpg",
    category: "Dresses"
  },
  {
    id: 5,
    name: "Traditional Aso-Oke",
    price: 400,
    image: "/images/design5.jpg",
    category: "Traditional"
  },
  {
    id: 6,
    name: "Contemporary Kaftan",
    price: 310,
    image: "/images/design6.jpg",
    category: "Kaftans"
  },
];

const DesignGallery = () => {
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
            <div 
              key={item.id} 
              className="gallery-card bg-white rounded-lg overflow-hidden shadow-lg opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-playfair font-bold text-xl text-burgundy">{item.name}</h3>
                  <span className="bg-gold text-black text-sm font-bold px-3 py-1 rounded-full flex items-center">
                    <Tag size={14} className="mr-1" />
                    ${item.price}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{item.category}</p>
                <button className="w-full btn-secondary">View Details</button>
              </div>
            </div>
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
