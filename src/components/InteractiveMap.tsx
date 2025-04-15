
import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';

// This is a placeholder for the actual Mapbox token
// In production, you should use environment variables
const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN';

// Ecological regions data
const ecologicalRegions = [
  {
    id: 'sahel',
    name: 'The Sahel',
    coordinates: [0, 15],
    description: 'A critical transition zone between the Sahara Desert and the savanna, facing desertification and climate challenges.',
    initiatives: [
      'Reforestation and soil restoration',
      'Sustainable agriculture practices',
      'Water conservation systems'
    ]
  },
  {
    id: 'congo',
    name: 'Congo Basin',
    coordinates: [20, -2],
    description: 'The world\'s second-largest rainforest, a biodiversity hotspot and crucial carbon sink.',
    initiatives: [
      'Forest conservation',
      'Sustainable timber harvesting',
      'Indigenous community partnerships'
    ]
  },
  {
    id: 'rift',
    name: 'Great Rift Valley',
    coordinates: [36, -2], 
    description: 'A geological wonder hosting diverse ecosystems from mountains to lakes, supporting unique biodiversity.',
    initiatives: [
      'Wildlife corridor protection',
      'Ecotourism development',
      'Community conservation areas'
    ]
  }
];

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<typeof ecologicalRegions[0] | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map only once
    if (map.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9', // Use satellite imagery
      projection: 'globe',
      zoom: 2.5,
      center: [20, 5], // Centered on Africa
      pitch: 30,
      bearing: 0,
      attributionControl: false
    });

    const mapInstance = map.current;

    mapInstance.on('load', () => {
      setMapLoaded(true);
      
      // Add atmosphere and fog effects
      mapInstance.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2,
      });
      
      // Create a glowing line representing the Green Harmony Belt
      mapInstance.addSource('green-belt', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [
              [-15, 15], // West Africa
              [0, 15],   // Sahel
              [20, -2],  // Congo Basin
              [36, -2],  // Great Rift Valley
              [40, 0]    // East Africa
            ]
          }
        }
      });
      
      mapInstance.addLayer({
        id: 'green-belt-glow',
        type: 'line',
        source: 'green-belt',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#74C69D',
          'line-width': 8,
          'line-opacity': 0.8,
          'line-blur': 5
        }
      });
      
      mapInstance.addLayer({
        id: 'green-belt-line',
        type: 'line',
        source: 'green-belt',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#2D6A4F',
          'line-width': 3
        }
      });
      
      // Add markers for each ecological region
      ecologicalRegions.forEach(region => {
        const el = document.createElement('div');
        el.className = 'map-pin';
        el.innerHTML = `<div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span class="relative">${region.name.charAt(0)}</span>
                        </div>`;
        
        el.addEventListener('click', () => {
          setSelectedRegion(region);
          
          mapInstance.flyTo({
            center: region.coordinates,
            zoom: 5,
            pitch: 60,
            bearing: 30,
            duration: 2000,
            essential: true
          });
        });
        
        new mapboxgl.Marker(el)
          .setLngLat(region.coordinates)
          .addTo(mapInstance);
      });
      
      // Add zoom and rotation controls
      mapInstance.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    });
    
    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);
  
  return (
    <section id="interactive-map" className="min-h-screen relative">
      <div className="absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-background h-20"></div>
      
      <div className="container-section relative z-20 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="section-heading">Explore The Harmony Belt</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Discover the key ecological regions that make up the Great Green Harmony Belt, 
            and learn about the initiatives helping restore and protect these vital ecosystems.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div 
            className="lg:w-1/3 order-2 lg:order-1 bg-card rounded-xl shadow-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {selectedRegion ? (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-3 font-playfair">{selectedRegion.name}</h3>
                <p className="text-muted-foreground mb-4">{selectedRegion.description}</p>
                
                <h4 className="font-medium text-green-700 mb-2">Key Initiatives:</h4>
                <ul className="space-y-2">
                  {selectedRegion.initiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-green-600">•</span>
                      {initiative}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    if (map.current) {
                      map.current.flyTo({
                        center: [20, 5],
                        zoom: 2.5,
                        pitch: 30,
                        bearing: 0,
                        duration: 2000
                      });
                      setSelectedRegion(null);
                    }
                  }}
                  className="mt-6 text-sm text-green-600 hover:text-green-800 flex items-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M19 12H5"></path>
                    <path d="M12 19l-7-7 7-7"></path>
                  </svg>
                  Back to full map
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-3 font-playfair">The Great Green Harmony Belt</h3>
                <p className="text-muted-foreground mb-4">
                  This visionary ecological corridor spans across Africa, connecting key regions 
                  to restore natural habitats, protect wildlife, and support local communities.
                </p>
                <p className="mb-6">
                  Click on any highlighted region on the map to learn more about its unique 
                  ecosystem and the initiatives taking place there.
                </p>
                <div className="bg-muted rounded-lg p-4 text-sm">
                  <p className="text-muted-foreground italic">
                    "The Green Harmony Belt represents our commitment to healing the planet through 
                    interconnected conservation efforts that benefit both nature and humanity."
                  </p>
                </div>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            className="lg:w-2/3 order-1 lg:order-2 h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div ref={mapContainer} className="w-full h-full" />
            
            {!mapLoaded && (
              <div className="absolute inset-0 bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
              </div>
            )}
          </motion.div>
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>Tap or click on highlighted regions to explore in detail. Drag to rotate, scroll to zoom.</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full z-10 bg-gradient-to-t from-background h-20"></div>
    </section>
  );
};

export default InteractiveMap;
