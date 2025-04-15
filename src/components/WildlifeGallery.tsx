
import { useState } from 'react';
import { motion } from 'framer-motion';

// Wildlife data
const wildlifeData = [
  {
    id: 1,
    name: 'African Elephant',
    scientificName: 'Loxodonta africana',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'The world\'s largest land animal, crucial for maintaining the savanna ecosystem by dispersing seeds and creating water holes.',
    conservation: 'Vulnerable',
    sound: 'https://actions.google.com/sounds/v1/animals/elephant_trumpet_call.ogg',
    region: 'Savanna'
  },
  {
    id: 2,
    name: 'Mountain Gorilla',
    scientificName: 'Gorilla beringei beringei',
    image: 'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'These gentle giants share 98% of their DNA with humans and live in complex family groups in mountainous forests.',
    conservation: 'Endangered',
    sound: 'https://actions.google.com/sounds/v1/animals/gorilla_loud_call.ogg',
    region: 'Montane Forest'
  },
  {
    id: 3,
    name: 'African Lion',
    scientificName: 'Panthera leo',
    image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'The king of beasts, lions are apex predators that maintain ecosystem balance by controlling herbivore populations.',
    conservation: 'Vulnerable',
    sound: 'https://actions.google.com/sounds/v1/animals/lion_roaring.ogg',
    region: 'Savanna'
  },
  {
    id: 4,
    name: 'Rothschild\'s Giraffe',
    scientificName: 'Giraffa camelopardalis rothschildi',
    image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'One of the tallest subspecies of giraffe, able to browse vegetation inaccessible to other animals.',
    conservation: 'Endangered',
    sound: 'https://actions.google.com/sounds/v1/animals/animal_eating_leaves.ogg',
    region: 'Savanna'
  }
];

// Community stories
const communityStories = [
  {
    id: 1,
    title: 'Guardians of the Forest',
    community: 'Batwa People',
    location: 'Great Rift Valley',
    image: 'https://images.unsplash.com/photo-1544985361-b420d7a77043?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    story: 'The Batwa people have traditionally lived as hunter-gatherers in the mountain forests. Today, they work as conservation guides and forest monitors, sharing their deep knowledge of the ecosystem with researchers and visitors.'
  },
  {
    id: 2,
    title: 'Beekeepers of the Sahel',
    community: 'Fulani Tribe',
    location: 'Sahel Region',
    image: 'https://images.unsplash.com/photo-1556704503-e69a801c19df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    story: 'Traditionally nomadic herders, many Fulani families now maintain sustainable beekeeping operations that pollinate native plants and provide sustainable income through honey production.'
  },
  {
    id: 3,
    title: 'Fisherwomen Cooperative',
    community: 'Lake Victoria Communities',
    location: 'Great Lakes Region',
    image: 'https://images.unsplash.com/photo-1531243269054-5ebfd6ede1a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    story: 'Women from lakeside villages have formed cooperatives that practice sustainable fishing techniques and have established protected breeding zones, helping to restore fish populations.'
  }
];

const WildlifeGallery = () => {
  const [selectedWildlife, setSelectedWildlife] = useState(wildlifeData[0]);
  const [selectedTab, setSelectedTab] = useState('wildlife');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const playAudio = (audioUrl: string) => {
    // Stop any currently playing audio
    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    
    // Create and play new audio
    const audio = new Audio(audioUrl);
    audio.play();
    setAudioElement(audio);
    setIsAudioPlaying(true);
    
    // Set state when audio finishes
    audio.onended = () => {
      setIsAudioPlaying(false);
    };
  };

  return (
    <section id="wildlife" className="min-h-screen bg-background py-24">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Wildlife & Culture Gallery</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore the rich biodiversity and cultural heritage of the Great Green Harmony Belt, 
            where people and nature coexist in balance.
          </p>
        </motion.div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-lg bg-muted p-1">
            <button
              onClick={() => setSelectedTab('wildlife')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedTab === 'wildlife' 
                  ? 'bg-card shadow-sm text-foreground' 
                  : 'text-muted-foreground'
              }`}
            >
              Wildlife
            </button>
            <button
              onClick={() => setSelectedTab('communities')}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                selectedTab === 'communities' 
                  ? 'bg-card shadow-sm text-foreground' 
                  : 'text-muted-foreground'
              }`}
            >
              Communities
            </button>
          </div>
        </div>
        
        {/* Wildlife Gallery */}
        {selectedTab === 'wildlife' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-3">
                {wildlifeData.map((animal) => (
                  <motion.div
                    key={animal.id}
                    className={`cursor-pointer rounded-xl overflow-hidden ${
                      selectedWildlife.id === animal.id 
                        ? 'ring-2 ring-green-600' 
                        : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedWildlife(animal)}
                  >
                    <img 
                      src={animal.image} 
                      alt={animal.name} 
                      className="w-full h-24 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 order-1 lg:order-2">
              <motion.div
                key={selectedWildlife.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl overflow-hidden shadow-md"
              >
                <div className="relative h-64 md:h-96">
                  <img 
                    src={selectedWildlife.image} 
                    alt={selectedWildlife.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{selectedWildlife.name}</h3>
                    <p className="text-green-300 italic">{selectedWildlife.scientificName}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {selectedWildlife.region}
                    </span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                      {selectedWildlife.conservation}
                    </span>
                    <button 
                      onClick={() => playAudio(selectedWildlife.sound)}
                      className={`px-3 py-1 ${
                        isAudioPlaying 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-blue-100 text-blue-800'
                      } text-xs rounded-full flex items-center gap-1`}
                      disabled={isAudioPlaying}
                    >
                      {isAudioPlaying ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="4" y="2" width="4" height="20" rx="1" />
                            <rect x="16" y="2" width="4" height="20" rx="1" />
                          </svg>
                          Playing...
                        </>
                      ) : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                          </svg>
                          Play Sound
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {selectedWildlife.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        )}
        
        {/* Community Stories */}
        {selectedTab === 'communities' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityStories.map((story) => (
              <motion.div
                key={story.id}
                className="bg-card rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-green-700">{story.community}</span> • {story.location}
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    {story.story}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WildlifeGallery;
