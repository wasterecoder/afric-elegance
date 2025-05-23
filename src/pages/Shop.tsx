
import React, { useState } from 'react';
import { Tag, Filter } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

interface DesignItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

// Updated design items for the shop page with appropriate images for each category
const allDesigns: DesignItem[] = [
  {
    id: 1,
    name: "Royal Ankara Gown",
    price: 35000,
    image: "/lovable-uploads/d266ae11-9249-4efb-9639-7df4fbcf640b.png",
    category: "Gowns",
    description: "Elegant floor-length gown made with premium Ankara fabric, perfect for special occasions."
  },
  {
    id: 2,
    name: "Kente Fusion Wrap",
    price: 27500,
    image: "/lovable-uploads/a1e66d34-6a00-419f-83e8-73513d704f5d.png",
    category: "Wraps",
    description: "Versatile wrap skirt featuring traditional Kente patterns with modern styling."
  },
  {
    id: 3,
    name: "Modern Dashiki Set",
    price: 32000,
    image: "/lovable-uploads/d001125d-920c-4a3b-a160-8cb621e01746.png",
    category: "Sets",
    description: "Contemporary two-piece outfit inspired by traditional Dashiki patterns."
  },
  {
    id: 4,
    name: "Elegant Adire Dress",
    price: 29000,
    image: "/lovable-uploads/bb1b0860-aeea-467f-954e-888b724a3c14.png",
    category: "Dresses",
    description: "Mid-length dress featuring hand-dyed Adire fabric with intricate patterns."
  },
  {
    id: 5,
    name: "Traditional Aso-Oke",
    price: 40000,
    image: "/lovable-uploads/9914de1d-6f7e-4c69-b436-6c7691a91de9.png",
    category: "Traditional",
    description: "Hand-woven Aso-Oke ensemble, perfect for ceremonial and special events."
  },
  {
    id: 6,
    name: "Contemporary Kaftan",
    price: 31000,
    image: "/lovable-uploads/db2cf8e1-1161-49da-b0fd-d8882e055049.png",
    category: "Kaftans",
    description: "Modern take on the classic Kaftan, featuring bold patterns and comfortable fit."
  },
  {
    id: 7,
    name: "Adire Peplum Top",
    price: 18000,
    image: "/lovable-uploads/9c4fc432-246f-486b-ad1a-cec140d1b5c6.png",
    category: "Tops",
    description: "Stylish peplum top with Adire patterns, perfect for both casual and semi-formal occasions."
  },
  {
    id: 8,
    name: "Ankara Maxi Skirt",
    price: 21000,
    image: "/lovable-uploads/d094b977-820e-48fb-8f37-9980cb9d9986.png",
    category: "Skirts",
    description: "Flowing maxi skirt with vibrant Ankara print, versatile for multiple styling options."
  },
  {
    id: 9,
    name: "Kente Blazer",
    price: 29500,
    image: "/lovable-uploads/9c4fc432-246f-486b-ad1a-cec140d1b5c6.png",
    category: "Jackets",
    description: "Statement blazer featuring Kente-inspired patterns, perfect for professional settings."
  },
  {
    id: 10,
    name: "Embroidered Gele Set",
    price: 33000,
    image: "/lovable-uploads/a1e66d34-6a00-419f-83e8-73513d704f5d.png",
    category: "Traditional",
    description: "Traditional headwrap and accessories set with detailed embroidery."
  },
  {
    id: 11,
    name: "Ankara Jumpsuit",
    price: 28000,
    image: "/lovable-uploads/d001125d-920c-4a3b-a160-8cb621e01746.png",
    category: "Jumpsuits",
    description: "Modern jumpsuit featuring colorful Ankara fabric with contemporary cut."
  },
  {
    id: 12,
    name: "Batik Pattern Dress",
    price: 26500,
    image: "/lovable-uploads/bb1b0860-aeea-467f-954e-888b724a3c14.png",
    category: "Dresses",
    description: "Elegant dress featuring traditional batik patterns with modern silhouette."
  }
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'default' | 'priceLow' | 'priceHigh'>('default');
  
  const categories = ['All', ...Array.from(new Set(allDesigns.map(item => item.category)))];
  
  const filteredDesigns = selectedCategory && selectedCategory !== 'All'
    ? allDesigns.filter(item => item.category === selectedCategory)
    : allDesigns;
    
  const sortedDesigns = [...filteredDesigns].sort((a, b) => {
    if (sortBy === 'priceLow') return a.price - b.price;
    if (sortBy === 'priceHigh') return b.price - a.price;
    return a.id - b.id;
  });

  return (
    <div className="min-h-screen py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-burgundy mb-4">Shop Our Designs</h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Explore our exquisite collection of African-inspired fashion pieces, handcrafted with care and attention to detail
          </p>
        </div>
        
        {/* Filters and Sorting */}
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
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedDesigns.map((item, index) => (
            <div 
              key={item.id} 
              className="gallery-card bg-white rounded-lg overflow-hidden shadow-lg opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * (index % 8)}s` }}
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
                    ₦{item.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-burgundy/70 mb-2">{item.category}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.description}</p>
                <button className="w-full btn-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Shop;
