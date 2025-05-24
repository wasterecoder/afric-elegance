
import React from 'react';
import { CheckCircle, Calendar, Users, Clock } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';

const Training = () => {
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

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('register');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-burgundy text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Fashion Design Training Program</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Master the art of African fashion design through our comprehensive, hands-on training program
          </p>
          <button onClick={scrollToRegistration} className="btn-primary">Enroll Now</button>
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
                  <p>12 months with flexible scheduling options</p>
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
      <section className="py-20 bg-muted/20" id="register">
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
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Training;
