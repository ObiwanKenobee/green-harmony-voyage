
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Partner organizations
const partners = [
  { name: 'Green Earth Alliance', logo: 'https://via.placeholder.com/150?text=GEA' },
  { name: 'African Wildlife Fund', logo: 'https://via.placeholder.com/150?text=AWF' },
  { name: 'Sustainable Future Initiative', logo: 'https://via.placeholder.com/150?text=SFI' },
  { name: 'Eco-Tech Solutions', logo: 'https://via.placeholder.com/150?text=ETS' },
  { name: 'Community Conservation Network', logo: 'https://via.placeholder.com/150?text=CCN' },
];

// Involvement options
const involvementOptions = [
  { 
    title: 'Donate', 
    description: 'Support conservation efforts with a one-time or recurring donation',
    icon: '💰'
  },
  { 
    title: 'Volunteer', 
    description: 'Join our global team of remote or field volunteers',
    icon: '🤝'
  },
  { 
    title: 'Partner', 
    description: 'Create a corporate or organizational partnership',
    icon: '🤖'
  },
  { 
    title: 'Innovate', 
    description: 'Submit your tech or innovation ideas and solutions',
    icon: '💡'
  }
];

const GetInvolved = () => {
  const [selectedOption, setSelectedOption] = useState('Donate');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you for your interest!",
        description: "We've received your information and will be in touch soon.",
      });
      
      // Reset form
      setEmail('');
      setName('');
      setOrganization('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="get-involved" className="min-h-screen bg-background py-24">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Get Involved</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Join our global community of supporters, partners, and volunteers 
            working together to bring the Great Green Harmony Belt to life.
          </p>
        </motion.div>
        
        {/* Partner Logos */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-6">In Partnership With</h3>
          
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="bg-card p-4 rounded-xl shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-12 w-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Get Involved Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Options Menu */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Ways to Contribute</h3>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-md">
              {involvementOptions.map((option) => (
                <button
                  key={option.title}
                  onClick={() => setSelectedOption(option.title)}
                  className={`w-full text-left p-4 flex items-center gap-4 transition-colors border-b border-border last:border-0 ${
                    selectedOption === option.title 
                      ? 'bg-green-50' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <span className="text-2xl">{option.icon}</span>
                  <div>
                    <h4 className="font-medium">{option.title}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            
            <div className="bg-card rounded-xl shadow-md p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="organization" className="block text-sm font-medium text-muted-foreground mb-1">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="interest" className="block text-sm font-medium text-muted-foreground mb-1">
                    I'm interested in:
                  </label>
                  <div className="border border-border rounded-md px-4 py-2 bg-muted">
                    {selectedOption}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-5 w-5 rounded border border-green-600 flex items-center justify-center bg-green-50">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <label className="text-sm text-muted-foreground">
                    Subscribe to newsletter updates about the Great Green Harmony Belt
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Partners Worldwide', value: '120+' },
            { label: 'Volunteers Active', value: '5,600+' },
            { label: 'Donor Countries', value: '78' },
            { label: 'Projects Underway', value: '35+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-green-700">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
