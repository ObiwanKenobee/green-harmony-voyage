
import { useState } from 'react';
import { motion } from 'framer-motion';

const innovationCategories = [
  'Restoration Tech', 'Renewable Energy', 'Community Solutions', 'AI & Monitoring'
];

const innovationData = [
  {
    id: 1,
    title: 'Drone Reforestation',
    category: 'Restoration Tech',
    description: 'Automated drones that can plant up to 100,000 tree seeds per day in hard-to-reach areas, using AI to identify optimal planting locations.',
    impact: 'Accelerates reforestation efforts 10x faster than traditional methods',
    image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Solar-Powered Irrigation',
    category: 'Renewable Energy',
    description: 'Distributed network of solar panels powering smart irrigation systems that deliver precise amounts of water based on soil moisture and weather predictions.',
    impact: 'Reduces water usage by 60% while increasing crop yields',
    image: 'https://images.unsplash.com/photo-1594969155368-f19235a23502?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Village Microgrids',
    category: 'Community Solutions',
    description: 'Community-owned solar microgrids that provide reliable electricity to villages that were previously off the grid, enabling education and economic opportunities.',
    impact: 'Provides clean energy access to over 500 communities',
    image: 'https://images.unsplash.com/photo-1497440001374-f324378c9b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Wildlife Tracking Network',
    category: 'AI & Monitoring',
    description: 'A network of low-impact sensors and AI algorithms that monitor wildlife movements and alert rangers to potential poaching activity in protected areas.',
    impact: 'Reduced poaching incidents by 80% in monitored regions',
    image: 'https://images.unsplash.com/photo-1563743159017-fda2efd61bd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'Mycelium Water Filters',
    category: 'Restoration Tech',
    description: 'Natural filtration systems using mycelium (mushroom roots) to purify contaminated water sources, removing heavy metals and toxins.',
    impact: 'Provides clean drinking water to communities while restoring aquatic ecosystems',
    image: 'https://images.unsplash.com/photo-1518709779341-56cf4535e94b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'Carbon Credit Marketplace',
    category: 'Community Solutions',
    description: 'Blockchain-based platform that connects small-scale conservation efforts directly with global carbon markets, ensuring fair compensation for ecosystem services.',
    impact: 'Generated $15M in direct payments to local conservation initiatives',
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    title: 'BioDiversity Scanners',
    category: 'AI & Monitoring',
    description: 'Portable devices that can instantly identify plant and animal species through visual recognition, helping track ecosystem health and identify invasive species.',
    impact: 'Documented over 2,000 previously unmonitored species',
    image: 'https://images.unsplash.com/photo-1527136360748-742aee5d09c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 8,
    title: 'Wind-Solar Hybrid Systems',
    category: 'Renewable Energy',
    description: 'Combined wind turbines and solar panels optimized for African climate conditions, providing 24/7 renewable energy for conservation operations.',
    impact: 'Eliminated diesel generator use in 35 conservation outposts',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

const Innovation = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredInnovations = selectedCategory === 'all' 
    ? innovationData 
    : innovationData.filter(item => item.category === selectedCategory);

  return (
    <section id="innovation" className="min-h-screen bg-muted py-24">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Innovation Engine</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Discover the cutting-edge technologies and innovative approaches 
            driving the Great Green Harmony Belt forward.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all' 
                ? 'bg-green-600 text-white' 
                : 'bg-card text-muted-foreground hover:bg-green-100'
            }`}
          >
            All Categories
          </button>
          
          {innovationCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-card text-muted-foreground hover:bg-green-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInnovations.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-card rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    <span className="font-bold">Impact:</span> {item.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredInnovations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No innovations found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Innovation;
