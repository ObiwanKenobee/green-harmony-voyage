
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                <path d="M14.05 6A5 5 0 0 1 18 10"></path>
              </svg>
            </span>
            <span className="font-playfair font-bold text-lg md:text-xl">Green Harmony Belt</span>
          </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#interactive-map" className="text-foreground hover:text-green-600 transition-colors">Map</a>
            <a href="#storytelling" className="text-foreground hover:text-green-600 transition-colors">Story</a>
            <a href="#wildlife" className="text-foreground hover:text-green-600 transition-colors">Wildlife</a>
            <a href="#innovation" className="text-foreground hover:text-green-600 transition-colors">Innovation</a>
            <a href="#get-involved" className="btn-primary">Get Involved</a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              <a 
                href="#interactive-map" 
                className="px-4 py-2 text-foreground hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Map
              </a>
              <a 
                href="#storytelling"
                className="px-4 py-2 text-foreground hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Story
              </a>
              <a 
                href="#wildlife"
                className="px-4 py-2 text-foreground hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Wildlife
              </a>
              <a 
                href="#innovation"
                className="px-4 py-2 text-foreground hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Innovation
              </a>
              <a 
                href="#get-involved" 
                className="mx-4 btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
