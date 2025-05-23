
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
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
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold">
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
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <h2 className="text-2xl font-playfair font-bold text-burgundy mb-6">Visit Our Studio</h2>
          <div className="h-96 bg-muted rounded-lg overflow-hidden shadow-lg">
            {/* Replace with actual map embed */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-lg text-gray-500">Map Embedding Goes Here</p>
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
