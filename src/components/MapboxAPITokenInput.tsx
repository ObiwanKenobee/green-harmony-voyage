
import { useState } from 'react';
import { motion } from 'framer-motion';

interface MapboxAPITokenInputProps {
  onTokenSubmit: (token: string) => void;
}

const MapboxAPITokenInput = ({ onTokenSubmit }: MapboxAPITokenInputProps) => {
  const [token, setToken] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (token.trim()) {
      onTokenSubmit(token.trim());
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50 p-4"
    >
      <div className="bg-card rounded-xl shadow-xl p-6 max-w-md w-full">
        <h3 className="text-2xl font-bold mb-3">Mapbox API Token Required</h3>
        <p className="text-muted-foreground mb-4">
          To view the interactive map, please enter your Mapbox API token. You can get one for free at{' '}
          <a 
            href="https://mapbox.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 underline"
          >
            mapbox.com
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="mapbox-token" className="block text-sm font-medium mb-1">
              Mapbox API Token
            </label>
            <input
              id="mapbox-token"
              type="text"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Enter your Mapbox public token"
              className="w-full rounded-md border border-input bg-background px-3 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Load Map
          </button>
        </form>

        <p className="mt-4 text-xs text-muted-foreground">
          Note: Your token is stored locally in your browser and is not sent to our servers.
        </p>
      </div>
    </motion.div>
  );
};

export default MapboxAPITokenInput;
