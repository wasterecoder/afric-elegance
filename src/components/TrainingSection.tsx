
import React from 'react';
import { Scissors, Ruler, Palette, PenTool } from 'lucide-react';

const TrainingSection = () => {
  const benefits = [
    {
      icon: <PenTool className="h-12 w-12 text-gold" />,
      title: "Fabric Knowledge",
      description: "Learn about different African fabrics, their origins, and how to select the right ones for your designs."
    },
    {
      icon: <Ruler className="h-12 w-12 text-gold" />,
      title: "Pattern Making",
      description: "Master the art of creating custom patterns that celebrate the African female form."
    },
    {
      icon: <Scissors className="h-12 w-12 text-gold" />,
      title: "Professional Sewing",
      description: "Develop advanced sewing techniques specific to African attire construction."
    },
    {
      icon: <Palette className="h-12 w-12 text-gold" />,
      title: "Design Principles",
      description: "Understand color harmony, balance, and styling for traditional and contemporary African fashion."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="training">
      <div className="absolute inset-0 pattern-overlay pointer-events-none"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Fashion Design Training Program</h2>
            <p className="text-lg mb-6">
              Become a skilled African fashion designer through our comprehensive training program. Learn from expert tailors and designers with years of experience in the industry.
            </p>
            <p className="mb-8">
              Our hands-on approach ensures you gain practical skills along with theoretical knowledge. Whether you're a beginner or looking to enhance your existing skills, our program is tailored to help you succeed in the African fashion industry.
            </p>
            <button className="btn-primary">Sign Up for Training</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-muted p-6 rounded-lg shadow-md transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-burgundy">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
