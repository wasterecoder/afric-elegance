
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-burgundy">
            Afric Chic <span className="text-gold">Elegance</span>
          </h1>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-burgundy focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-burgundy hover:text-gold font-medium transition-colors">
            Home
          </Link>
          <Link to="/shop" className="text-burgundy hover:text-gold font-medium transition-colors">
            Shop Designs
          </Link>
          <Link to="/training" className="text-burgundy hover:text-gold font-medium transition-colors">
            Training
          </Link>
          <Link to="/about" className="text-burgundy hover:text-gold font-medium transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-burgundy hover:text-gold font-medium transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 w-full bg-white shadow-lg z-50 animate-fade-in">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="text-burgundy hover:text-gold font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-burgundy hover:text-gold font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Shop Designs
            </Link>
            <Link 
              to="/training" 
              className="text-burgundy hover:text-gold font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Training
            </Link>
            <Link 
              to="/about" 
              className="text-burgundy hover:text-gold font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-burgundy hover:text-gold font-medium py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
