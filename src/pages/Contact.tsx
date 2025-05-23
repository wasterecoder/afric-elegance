
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

// Import TikTok icon (using a simple SVG since it's not in lucide-react)
const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    // For now, we'll just show the confirmation message
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you! Your message has been recorded and sent. We will contact you shortly.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: ''
    });
  };

  const openGoogleMaps = () => {
    const address = "No 18, Idowu Estate, Ajah, Lagos State, Nigeria";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-burgundy mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto text-muted-foreground">
            Get in touch with our team for inquiries, custom orders, or to schedule a visit to our studio
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-playfair font-bold text-burgundy mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <option>General Inquiry</option>
                  <option>Custom Order</option>
                  <option>Training Program</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full btn-secondary">Send Message</button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="bg-muted p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-playfair font-bold text-burgundy mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Our Location</h3>
                    <p>No 18, Idowu Estate<br />Ajah, Lagos State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p>08168334381</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p>africelegance787@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-burgundy text-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-playfair font-bold mb-6">Follow Us</h2>
              <p className="mb-6">Stay updated with our latest designs, events, and fashion tips by following us on social media.</p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/afric_elegance3?igsh=eDJ4MnU4ejFhMmNp&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-burgundy p-3 rounded-full hover:bg-gold transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/share/1VFafzU42L/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-burgundy p-3 rounded-full hover:bg-gold transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="https://www.tiktok.com/@africelegance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-burgundy p-3 rounded-full hover:bg-gold transition-colors"
                >
                  <TikTokIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Visit Our Studio */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-burgundy mb-6">Visit Our Studio</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Come experience our beautiful designs in person at our studio in Ajah, Lagos State.
          </p>
          
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
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
