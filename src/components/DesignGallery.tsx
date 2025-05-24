
import React, { useState, useEffect } from 'react';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DesignItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  sizes: string;
}

const designItems: DesignItem[] = [
  {
    id: 1,
    name: "Navy Chic",
    price: 30000,
    originalPrice: 35000, // ~15% discount
    image: "/lovable-uploads/d266ae11-9249-4efb-9639-7df4fbcf640b.png",
    category: "Dresses",
    sizes: "Size 6-14"
  },
  {
    id: 2,
    name: "Raven Black Dress",
    price: 20000,
    originalPrice: 25000, // 20% discount
    image: "/lovable-uploads/bb1b0860-aeea-467f-954e-888b724a3c14.png",
    category: "Dresses",
    sizes: "Size 6-12"
  },
  {
    id: 3,
    name: "Vintage Bloom",
    price: 25000,
    originalPrice: 36000, // ~30% discount
    image: "/lovable-uploads/d094b977-820e-48fb-8f37-9980cb9d9986.png",
    category: "Dresses",
    sizes: "Size 6-12"
  },
  {
    id: 4,
    name: "BW Classic Jumpsuit",
    price: 25000,
    originalPrice: 31000, // ~20% discount
    image: "/lovable-uploads/d001125d-920c-4a3b-a160-8cb621e01746.png",
    category: "Jumpsuits",
    sizes: "Size 6-12"
  },
  {
    id: 5,
    name: "Rich Aunty Midi Bubu",
    price: 24000,
    originalPrice: 28000, // ~15% discount
    image: "/lovable-uploads/9914de1d-6f7e-4c69-b436-6c7691a91de9.png",
    category: "Traditional",
    sizes: "Size 6-14"
  },
  {
    id: 6,
    name: "Adire Silk",
    price: 28000,
    originalPrice: 40000, // 30% discount
    image: "/lovable-uploads/a1e66d34-6a00-419f-83e8-73513d704f5d.png",
    category: "Traditional",
    sizes: "Size 6-12 (₦28,000), Size 12&14 (₦30,000)"
  },
  {
    id: 7,
    name: "Chantilly X Crepe",
    price: 30000,
    originalPrice: 37000, // ~20% discount
    image: "/lovable-uploads/db2cf8e1-1161-49da-b0fd-d8882e055049.png",
    category: "Dresses",
    sizes: "Size 6-12"
  },
  {
    id: 8,
    name: "Zayrah Dress",
    price: 22000,
    originalPrice: 26000, // ~15% discount
    image: "/lovable-uploads/9c4fc432-246f-486b-ad1a-cec140d1b5c6.png",
    category: "Dresses",
    sizes: "Size 6-12"
  },
];

const DesignGallery = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);

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

  const handleViewDetails = (item: DesignItem) => {
    setSelectedItem(item);
  };

  const handleOrderWhatsApp = (item: DesignItem) => {
    const message = `Hello! I'm interested in ordering the ${item.name} (${item.sizes}) for ₦${item.price.toLocaleString()} (down from ₦${item.originalPrice.toLocaleString()}). Please provide more details about availability and ordering process.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348168334381?text=${encodedMessage}`, '_blank');
  };

  const closeDetails = () => {
    setSelectedItem(null);
  };

  const getProductDescription = (itemName: string) => {
    if (itemName === "Navy Chic") {
      return "This exquisite outfit exudes sophistication and elegance, perfect for formal occasions. The intricate details and luxurious fabrics come together to create a truly classy ensemble.";
    }
    return "Handcrafted with premium African fabrics, this elegant piece combines traditional aesthetics with modern design. Perfect for special occasions and celebrations.";
  };

  return (
    <section className="py-20 bg-muted/30" id="designs">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Exquisite Designs</h2>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Discover our collection of handcrafted African attires that celebrate culture and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designItems.map((item, index) => {
            return (
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
                    />
                  </AspectRatio>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair font-bold text-xl text-burgundy">{item.name}</h3>
                    <div className="text-right">
                      <div className="text-xs text-gray-500 line-through">₦{item.originalPrice.toLocaleString()}</div>
                      <span className="bg-gold text-black text-sm font-bold px-3 py-1 rounded-full flex items-center">
                        <Tag size={14} className="mr-1" />
                        ₦{item.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <p className="text-xs text-burgundy/70 mb-4">{item.sizes}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <button 
                    onClick={() => handleViewDetails(item)}
                    className="w-full btn-secondary"
                  >
                    View Details
                  </button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary inline-flex">View All Designs</Link>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-playfair font-bold text-burgundy">{selectedItem.name}</h3>
                <button 
                  onClick={closeDetails}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-96 overflow-hidden rounded-lg">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 line-through mb-1">₦{selectedItem.originalPrice.toLocaleString()}</div>
                    <span className="bg-gold text-black text-lg font-bold px-4 py-2 rounded-full flex items-center w-fit">
                      <Tag size={16} className="mr-2" />
                      ₦{selectedItem.price.toLocaleString()}
                    </span>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      {Math.round(((selectedItem.originalPrice - selectedItem.price) / selectedItem.originalPrice) * 100)}% OFF
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Category:</h4>
                    <p className="text-muted-foreground">{selectedItem.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Available Sizes:</h4>
                    <p className="text-muted-foreground">{selectedItem.sizes}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Description:</h4>
                    <p className="text-muted-foreground">
                      {getProductDescription(selectedItem.name)}
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      onClick={() => handleOrderWhatsApp(selectedItem)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                    >
                      Order on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignGallery;
