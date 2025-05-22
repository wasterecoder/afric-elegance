
import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  const values = [
    {
      title: "Cultural Heritage",
      description: "We honor and preserve African cultural traditions through our designs."
    },
    {
      title: "Quality Craftsmanship",
      description: "Every piece is meticulously crafted with attention to detail and excellence."
    },
    {
      title: "Ethical Fashion",
      description: "We ensure fair compensation and proper working conditions for all our artisans."
    },
    {
      title: "Sustainability",
      description: "We prioritize eco-friendly practices and sustainable sourcing of materials."
    }
  ];

  const milestones = [
    {
      year: "2015",
      event: "Establishment of Afric Chic Elegance in a small studio"
    },
    {
      year: "2017",
      event: "First fashion showcase at Lagos Fashion Week"
    },
    {
      year: "2018",
      event: "Launch of training program for aspiring fashion designers"
    },
    {
      year: "2019",
      event: "Expansion to international markets"
    },
    {
      year: "2021",
      event: "Collaboration with renowned African textile manufacturers"
    },
    {
      year: "2023",
      event: "Opening of flagship store and design studio"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-burgundy text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating African beauty and heritage through elegant fashion design
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Afric Chic Elegance</h2>
              <p className="mb-6">
                Founded in 2015, Afric Chic Elegance was born from a passion to celebrate the rich cultural heritage of Africa through contemporary fashion. Our founder, with a background in traditional African textiles and modern fashion design, sought to create a brand that would bridge the gap between cultural authenticity and modern elegance.
              </p>
              <p className="mb-6">
                What began as a small atelier with a handful of dedicated artisans has grown into a recognized name in African fashion, known for our exquisite craftsmanship and innovative designs that honor traditional techniques.
              </p>
              <p>
                Today, we continue to push the boundaries of African fashion, bringing the continent's rich textile heritage to the global stage while maintaining the highest standards of quality and ethical production.
              </p>
            </div>
            <div>
              <img 
                src="/images/about-studio.jpg" 
                alt="Our Design Studio" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-burgundy mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Our Journey</h2>
          <div className="max-w-4xl mx-auto mt-12 relative">
            {/* Center Line */}
            <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gold"></div>
            
            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}
                  >
                    <div className="bg-white p-6 rounded shadow-lg">
                      <h3 className="text-xl font-bold text-gold mb-2">{milestone.year}</h3>
                      <p>{milestone.event}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-burgundy rounded-full border-4 border-gold"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="section-title text-center mx-auto after:left-1/2 after:-translate-x-1/2">Meet Our Team</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Our talented team of designers, tailors, and artisans bring years of experience and passion to every piece we create.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/team1.jpg" 
                alt="Team Member" 
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-burgundy">Amara Okafor</h3>
                <p className="text-gold mb-2">Founder & Creative Director</p>
                <p className="text-sm text-muted-foreground">With over 15 years in fashion design, Amara brings her vision of cultural elegance to life through Afric Chic Elegance.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/team2.jpg" 
                alt="Team Member" 
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-burgundy">Kofi Mensah</h3>
                <p className="text-gold mb-2">Master Tailor</p>
                <p className="text-sm text-muted-foreground">Kofi's precision and expertise in traditional and contemporary tailoring techniques are evident in every garment.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/images/team3.jpg" 
                alt="Team Member" 
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-burgundy">Zara Adesina</h3>
                <p className="text-gold mb-2">Design Consultant</p>
                <p className="text-sm text-muted-foreground">Zara specializes in fabric selection and pattern development, bringing innovation to traditional African textiles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default About;
