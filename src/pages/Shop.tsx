
import React, { useState } from 'react';
import { Tag, Filter, MessageSquare } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DesignItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  sizes?: string;
}

// Our Exquisite Designs - Original gallery items
const exquisiteDesigns: DesignItem[] = [
  {
    id: 1,
    name: "Navy Chic",
    price: 30000,
    image: "/lovable-uploads/d266ae11-9249-4efb-9639-7df4fbcf640b.png",
    category: "Dresses",
    sizes: "Size 6-14"
  },
  {
    id: 2,
    name: "Raven Black Dress",
    price: 20000,
    image: "/lovable-uploads/bb1b0860-aeea-467f-954e-888b724a3c14.png",
    category: "Dresses",
    sizes: "Size 6-12"
  },
  {
    id: 3,
    name: "BW Classic Jumpsuit",
    price: 25000,
    image: "/lovable-uploads/d001125d-920c-4a3b-a160-8cb621e01746.png",
    category: "Jumpsuits",
    sizes: "Size 6-12"
  },
  {
    id: 4,
    name: "Rich Aunty Midi Bubu",
    price: 24000,
    image: "/lovable-uploads/9914de1d-6f7e-4c69-b436-6c7691a91de9.png",
    category: "Traditional",
    sizes: "Size 6-14"
  },
  {
    id: 5,
    name: "Adire Silk",
    price: 28000,
    image: "/lovable-uploads/a1e66d34-6a00-419f-83e8-73513d704f5d.png",
    category: "Traditional",
    sizes: "Size 6-12 (₦28,000), Size 12&14 (₦30,000)"
  },
  {
    id: 6,
    name: "Chantilly X Crepe",
    price: 30000,
    image: "/lovable-uploads/db2cf8e1-1161-49da-b0fd-d8882e055049.png",
    category: "Dresses",
    sizes: "Size 6-12"
  },
  {
    id: 7,
    name: "Zayrah Dress",
    price: 22000,
    image: "/lovable-uploads/9c4fc432-246f-486b-ad1a-cec140d1b5c6.png",
    category: "Dresses",
    sizes: "Size 6-12"
  }
];

// New Arrivals
const newArrivals: DesignItem[] = [
  {
    id: 8,
    name: "Aso Oke X Ankara Bubu",
    price: 20000,
    image: "/lovable-uploads/6b01eb59-750c-44e0-b928-7cb80e8d14b5.png",
    category: "Traditional",
    sizes: "Size 6-14"
  },
  {
    id: 9,
    name: "Jumbo Pant",
    price: 12000,
    image: "/lovable-uploads/4e05a984-044e-4d04-98a4-ba7be7112e5b.png",
    category: "Bottoms",
    sizes: "Size 6-14"
  },
  {
    id: 10,
    name: "Lace Noire",
    price: 24000,
    image: "/lovable-uploads/d5b7ec64-d658-49e4-b6ea-ec5231d3c636.png",
    category: "Sets",
    sizes: "Size 6-12"
  },
  {
    id: 11,
    name: "Ankara Crop Top X Jumbo Pant",
    price: 20000,
    image: "/lovable-uploads/1343cd95-c434-4bb4-991d-6778eea18fe5.png",
    category: "Sets",
    sizes: "Size 6-14"
  }
];

// All designs combined
const allDesigns = [...exquisiteDesigns, ...newArrivals];

const calculateDiscountedPrice = (price: number) => {
  return Math.round(price * 0.7); // 30% discount
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'default' | 'priceLow' | 'priceHigh'>('default');
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);
  
  // Get unique categories from actual product names
  const categories = ['All', ...Array.from(new Set(allDesigns.map(item => item.category)))];
  
  const filteredDesigns = selectedCategory && selectedCategory !== 'All'
    ? allDesigns.filter(item => item.category === selectedCategory)
    : allDesigns;
    
  const sortedDesigns = [...filteredDesigns].sort((a, b) => {
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    return a.id - b.id;
  });

  const handleViewDetails = (item: DesignItem) => {
    setSelectedItem(item);
  };

  const handleOrderWhatsApp = (item: DesignItem) => {
    const discountedPrice = calculateDiscountedPrice(item.price);
    const message = `Hello! I'm interested in ordering the ${item.name} ${item.sizes ? `(${item.sizes})` : ''} for ₦${discountedPrice.toLocaleString()} (30% off the original price of ₦${item.price.toLocaleString()}). Please provide more details about availability and ordering process.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348168334381?text=${encodedMessage}`, '_blank');
  };

  const handleCustomInquiry = () => {
    const message = "Hello! I didn't find my perfect style and would like to discuss a custom design. Can you help me bring my vision to life?";
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
    <div className="min-h-screen">
      {/* Our Exquisite Designs Section */}
      <section className="py-20 bg-muted/30" id="designs">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Exquisite Designs</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Discover our collection of handcrafted African attires that celebrate culture and elegance
            </p>
          </div>

          {/* Category Filters and Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    (category === 'All' && !selectedCategory) || category === selectedCategory
                      ? 'bg-burgundy text-white'
                      : 'bg-white text-burgundy hover:bg-gold hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center">
              <Filter size={16} className="mr-2 text-burgundy" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'default' | 'priceLow' | 'priceHigh')}
                className="bg-white border border-muted rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
              >
                <option value="default">Sort By</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedDesigns.map((item, index) => {
              const discountedPrice = calculateDiscountedPrice(item.price);
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
                        <div className="text-xs text-gray-500 line-through">₦{item.price.toLocaleString()}</div>
                        <span className="bg-gold text-black text-sm font-bold px-3 py-1 rounded-full flex items-center">
                          <Tag size={14} className="mr-1" />
                          ₦{discountedPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    {item.sizes && <p className="text-xs text-burgundy/70 mb-4">{item.sizes}</p>}
                    {item.description && <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>}
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

            {/* Custom Inquiry Card */}
            <Card className="gallery-card overflow-hidden shadow-lg opacity-0 animate-slide-up bg-gradient-to-br from-burgundy to-burgundy/80 text-white">
              <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                <MessageSquare size={48} className="mx-auto mb-4 text-gold" />
                <h3 className="font-playfair font-bold text-xl mb-4">Custom Design</h3>
                <p className="mb-6 text-sm opacity-90">
                  Didn't find your perfect style? Let's bring your vision to life. Chat with us now on WhatsApp!
                </p>
                <button 
                  onClick={handleCustomInquiry}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center mx-auto"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Chat on WhatsApp
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
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
                    <div className="text-sm text-gray-500 line-through mb-1">₦{selectedItem.price.toLocaleString()}</div>
                    <span className="bg-gold text-black text-lg font-bold px-4 py-2 rounded-full flex items-center w-fit">
                      <Tag size={16} className="mr-2" />
                      ₦{calculateDiscountedPrice(selectedItem.price).toLocaleString()}
                    </span>
                    <p className="text-sm text-green-600 font-medium mt-1">30% OFF</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-burgundy mb-2">Category:</h4>
                    <p className="text-muted-foreground">{selectedItem.category}</p>
                  </div>
                  
                  {selectedItem.sizes && (
                    <div>
                      <h4 className="font-semibold text-burgundy mb-2">Available Sizes:</h4>
                      <p className="text-muted-foreground">{selectedItem.sizes}</p>
                    </div>
                  )}
                  
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
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Shop;
