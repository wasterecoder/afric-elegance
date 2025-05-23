
import React, { useState } from 'react';
import { CheckCircle, Calendar, Users, Clock, Tag, MessageSquare } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface DesignItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string;
}

const Training = () => {
  const [selectedItem, setSelectedItem] = useState<DesignItem | null>(null);

  // Original gallery items from home page
  const designItems: DesignItem[] = [
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

  // New product cards
  const newDesignItems: DesignItem[] = [
    {
      id: 8,
      name: "Aso Oke X Amaka Bubu",
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

  const courseModules = [
    "Introduction to African Fabrics and Textiles",
    "Pattern Making for African Attire",
    "Traditional and Contemporary Sewing Techniques",
    "Design Principles for African Fashion",
    "Business Skills for Fashion Entrepreneurs",
    "Portfolio Development and Showcasing",
  ];

  const testimonials = [
    {
      name: "Amina K.",
      quote: "This training transformed my sewing skills and gave me the confidence to start my own African fashion brand.",
      position: "Fashion Entrepreneur"
    },
    {
      name: "Chioma O.",
      quote: "The instructors are true masters of their craft. I learned techniques I couldn't find anywhere else.",
      position: "Fashion Student"
    },
    {
      name: "Fatima M.",
      quote: "The business skills section helped me turn my passion for African fashion into a profitable business.",
      position: "Boutique Owner"
    }
  ];

  const handleViewDetails = (item: DesignItem) => {
    setSelectedItem(item);
  };

  const handleOrderWhatsApp = (item: DesignItem) => {
    const message = `Hello! I'm interested in ordering the ${item.name} (${item.sizes}) for ₦${item.price.toLocaleString()}. Please provide more details about availability and ordering process.`;
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      experience: formData.get('experience'),
      message: formData.get('message')
    };

    const subject = 'Training Program Registration';
    const body = `New training registration:
    
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Experience Level: ${data.experience}
Message: ${data.message}`;

    const mailtoLink = `mailto:africelegance787@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen">
      {/* Gallery Section */}
      <section className="py-20 bg-muted/30" id="designs">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Our Exquisite Designs</h2>
            <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
              Discover our collection of handcrafted African attires that celebrate culture and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
            ))}
          </div>

          {/* New Product Cards Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-playfair font-bold text-burgundy mb-4">New Arrivals</h3>
              <p className="text-muted-foreground">Fresh designs just added to our collection</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {newDesignItems.map((item, index) => (
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
                      <span className="bg-gold text-black text-sm font-bold px-3 py-1 rounded-full flex items-center">
                        <Tag size={14} className="mr-1" />
                        ₦{item.price.toLocaleString()}
                      </span>
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
              ))}

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
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-burgundy text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Fashion Design Training Program</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Master the art of African fashion design through our comprehensive, hands-on training program
          </p>
          <button className="btn-primary">Enroll Now</button>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Program Overview</h2>
              <p className="mb-6">
                Our comprehensive training program is designed to equip you with both the technical skills and creative vision needed to excel in African fashion design. Whether you're a beginner looking to start your journey or an experienced designer aiming to refine your skills, our curriculum offers something valuable for everyone.
              </p>
              
              <div className="flex items-center mb-6 space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Duration</h3>
                  <p>3 months (12 weeks) with flexible scheduling options</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6 space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Class Size</h3>
                  <p>Limited to 15 students for personalized attention</p>
                </div>
              </div>
              
              <div className="flex items-center mb-6 space-x-4">
                <div className="bg-gold p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Schedule</h3>
                  <p>Weekday and weekend options available</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-burgundy">Course Modules</h3>
              <ul className="space-y-4">
                {courseModules.map((module, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald mr-3 flex-shrink-0 mt-0.5" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-burgundy/10 rounded-lg">
                <h4 className="font-bold text-burgundy mb-2">Bonus:</h4>
                <p>All students receive a starter kit including essential tools and materials to begin their journey in fashion design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Register Your Interest</h2>
            <p className="text-center mb-8">Fill out this form to receive detailed information about our upcoming training sessions</p>
            
            <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Experience Level</label>
                <select name="experience" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                <textarea 
                  rows={4}
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-secondary">Submit Registration</button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-muted/20 p-8 rounded-lg shadow-lg">
                <div className="mb-6">
                  <h3 className="font-playfair font-bold text-xl text-burgundy mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-gold font-medium">{testimonial.position}</p>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
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
                    <span className="bg-gold text-black text-lg font-bold px-4 py-2 rounded-full flex items-center w-fit">
                      <Tag size={16} className="mr-2" />
                      ₦{selectedItem.price.toLocaleString()}
                    </span>
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
                      Handcrafted with premium African fabrics, this elegant piece combines traditional aesthetics with modern design. Perfect for special occasions and celebrations.
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

export default Training;
