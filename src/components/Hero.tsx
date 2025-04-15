
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Green belt glow effect */}
        <motion.div 
          className="absolute left-0 right-0 h-8 bg-green-500/40 blur-xl z-20"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
          initial={{ width: '0%', left: '100%' }}
          animate={{ width: '100%', left: '0%' }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Content */}
      <div className="container-section relative z-30 text-white pt-16">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Great Green Harmony Belt
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl mb-8 text-green-300 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Restoring Earth, Empowering Life
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-10 max-w-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Imagine a vibrant corridor of thriving ecosystems spanning across Africa, 
            where wildlife roams freely, communities prosper, and innovative technologies 
            help restore our planet's balance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <a href="#interactive-map" className="btn-primary text-lg px-8 py-4">
              Explore the Belt
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
