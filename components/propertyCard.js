"use client";

import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const PropertyCard = ({ name, location, rate, occupancy, rating, darkMode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`rounded-lg overflow-hidden shadow-sm border ${
        darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 relative">
        <div className="absolute top-2 right-2 bg-white/90 text-xs px-2 py-1 rounded-full font-medium flex items-center">
          <Star className="w-3 h-3 text-yellow-500 mr-1" />
          {rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
        <div className="flex items-center mt-1">
          <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <span className={`text-sm ml-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {location}
          </span>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div>
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Rate</span>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>${rate}/night</p>
          </div>
          <div className="text-right">
            <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Occupancy</span>
            <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{occupancy}%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};