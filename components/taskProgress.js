"use client";

import { motion } from 'framer-motion';

export const TaskProgress = ({ title, priority, progress, darkMode }) => {
  const priorityColors = {
    high: darkMode ? 'bg-red-500' : 'bg-red-100 text-red-800',
    medium: darkMode ? 'bg-yellow-500' : 'bg-yellow-100 text-yellow-800',
    low: darkMode ? 'bg-green-500' : 'bg-green-100 text-green-800',
  };

  const priorityText = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };

  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className={`p-4 rounded-lg border ${
        darkMode ? 'border-gray-700 bg-gray-700' : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
        <span
          className={`text-xs px-2 py-1 rounded-full ${priorityColors[priority]}`}
        >
          {priorityText[priority]}
        </span>
      </div>
      <div className={`w-full h-2 rounded-full ${
        darkMode ? 'bg-gray-600' : 'bg-gray-200'
      }`}>
        <div
          className={`h-full rounded-full ${
            priority === 'high'
              ? 'bg-red-500'
              : priority === 'medium'
              ? 'bg-yellow-500'
              : 'bg-green-500'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Progress
        </span>
        <span className={`text-xs font-medium ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {progress}%
        </span>
      </div>
    </motion.div>
  );
};