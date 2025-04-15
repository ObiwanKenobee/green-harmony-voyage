
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const timelineData = [
  { year: 2025, label: 'Initiative Launch', description: 'Official launch of the Great Green Harmony Belt with initial mapping and planning.' },
  { year: 2030, label: 'First Corridors', description: 'First wildlife corridors established with community cooperation across three regions.' },
  { year: 2035, label: 'Major Restoration', description: 'One million hectares under restoration with significant carbon capture progress.' },
  { year: 2040, label: 'Full Implementation', description: 'Complete ecological connectivity and thriving communities across the entire belt.' }
];

const deforestationData = [
  { year: '2024', rate: 90 },
  { year: '2028', rate: 65 },
  { year: '2032', rate: 40 },
  { year: '2036', rate: 25 },
  { year: '2040', rate: 10 }
];

const biodiversityData = [
  { year: '2024', count: 100 },
  { year: '2028', count: 130 },
  { year: '2032', count: 170 },
  { year: '2036', count: 210 },
  { year: '2040', count: 250 }
];

const carbonCaptureData = [
  { name: 'Congo Basin', value: 45 },
  { name: 'Great Rift Valley', value: 25 },
  { name: 'Sahel Region', value: 30 }
];

const COLORS = ['#2D6A4F', '#74C69D', '#D9ED92'];

const StorytellingDashboard = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);
  
  const animatedStats = [
    { value: '1M+', label: 'Hectares Restored', icon: '🌳' },
    { value: '500+', label: 'Species Protected', icon: '🦓' },
    { value: '300K+', label: 'Jobs Created', icon: '👥' },
    { value: '20M+', label: 'Tonnes CO₂ Captured', icon: '♻️' }
  ];

  return (
    <section id="storytelling" className="min-h-screen bg-muted py-24">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">The Journey to Ecological Harmony</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Tracking the transformation of Africa's landscapes through conservation, 
            community empowerment, and technological innovation.
          </p>
        </motion.div>
        
        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {animatedStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <span className="text-4xl block mb-2">{stat.icon}</span>
              <h3 className="text-2xl font-bold text-green-700">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <h3 className="section-subheading text-center mb-8">Transformation Timeline: 2025 → 2040</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-1 bg-green-200 top-6 left-0 right-0 z-0"></div>
            
            {/* Timeline points */}
            <div className="flex justify-between relative z-10">
              {timelineData.map((point, index) => (
                <div key={index} className="flex flex-col items-center">
                  <button
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      index === activeTimelineIndex 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-100 text-green-700'
                    } transition-colors cursor-pointer`}
                    onClick={() => setActiveTimelineIndex(index)}
                  >
                    {point.year}
                  </button>
                </div>
              ))}
            </div>
            
            {/* Timeline details */}
            <motion.div 
              key={activeTimelineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-8 bg-card p-6 rounded-xl shadow-md"
            >
              <h4 className="font-bold text-xl mb-2">
                {timelineData[activeTimelineIndex].year}: {timelineData[activeTimelineIndex].label}
              </h4>
              <p className="text-muted-foreground">
                {timelineData[activeTimelineIndex].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Deforestation Reversal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold mb-4">Deforestation Reversal</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={deforestationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#C65D36" 
                    strokeWidth={2} 
                    activeDot={{ r: 8 }} 
                    name="Deforestation Rate"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Projected reduction in deforestation rates across the belt as restoration efforts take effect.
            </p>
          </motion.div>
          
          {/* Biodiversity Recovery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold mb-4">Biodiversity Recovery</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={biodiversityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Species Count', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar 
                    dataKey="count" 
                    fill="#2D6A4F" 
                    name="Species Count"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Projected growth in species populations as habitat connectivity improves.
            </p>
          </motion.div>
          
          {/* Carbon Capture Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-card p-6 rounded-xl shadow-md"
          >
            <h3 className="text-lg font-bold mb-4">Carbon Capture by Region</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={carbonCaptureData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {carbonCaptureData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Distribution of carbon sequestration potential across the major regions of the belt.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorytellingDashboard;
