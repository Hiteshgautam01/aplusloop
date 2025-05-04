import React from 'react';
import { motion } from 'framer-motion';

interface TransitMapPlaceholderProps {
  height?: string;
  bgColor?: string;
  accentColor?: string;
}

const TransitMapPlaceholder = ({
  height = "100%",
  bgColor = "#1e3a8a",
  accentColor = "#60a5fa",
}: TransitMapPlaceholderProps) => {
  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{ height, backgroundColor: bgColor }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(${accentColor}20 1px, transparent 1px), linear-gradient(90deg, ${accentColor}20 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Transit Lines */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 800 400" 
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Line 1 - Red Line */}
        <motion.path
          d="M100 100 L300 100 L500 200 L700 200"
          stroke="#ef4444"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Line 2 - Blue Line */}
        <motion.path
          d="M200 50 L200 250 L600 250 L600 100"
          stroke="#3b82f6"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Line 3 - Green Line */}
        <motion.path
          d="M100 300 L400 300 L400 150 L700 150"
          stroke="#10b981"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
        
        {/* Line 4 - Yellow Line */}
        <motion.path
          d="M150 200 L350 200 L550 300"
          stroke="#eab308"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
        />

        {/* Station Dots */}
        {[
          { x: 100, y: 100, delay: 0 },
          { x: 300, y: 100, delay: 0.3 },
          { x: 500, y: 200, delay: 0.6 },
          { x: 700, y: 200, delay: 0.9 },
          { x: 200, y: 50, delay: 0.5 },
          { x: 200, y: 250, delay: 0.8 },
          { x: 600, y: 250, delay: 1.1 },
          { x: 600, y: 100, delay: 1.4 },
          { x: 100, y: 300, delay: 1 },
          { x: 400, y: 300, delay: 1.3 },
          { x: 400, y: 150, delay: 1.6 },
          { x: 700, y: 150, delay: 1.9 },
          { x: 150, y: 200, delay: 1.5 },
          { x: 350, y: 200, delay: 1.8 },
          { x: 550, y: 300, delay: 2.1 },
        ].map((station, index) => (
          <motion.circle
            key={index}
            cx={station.x}
            cy={station.y}
            r="12"
            fill="white"
            stroke={accentColor}
            strokeWidth="3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: station.delay, duration: 0.3 }}
          />
        ))}
      </svg>

      {/* Interface Elements */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="text-gray-900 font-semibold mb-2">Transit Control Center</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>All systems operational</span>
        </div>
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="text-sm text-gray-600 space-y-1">
          <div>Active Routes: 12</div>
          <div>Vehicles: 284</div>
          <div>On-time Performance: 94%</div>
        </div>
      </div>

      {/* Route Legend */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Routes</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-1 bg-red-500 rounded"></div>
            <span className="text-xs text-gray-600">Red Line</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-1 bg-blue-500 rounded"></div>
            <span className="text-xs text-gray-600">Blue Line</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-1 bg-green-500 rounded"></div>
            <span className="text-xs text-gray-600">Green Line</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-1 bg-yellow-500 rounded"></div>
            <span className="text-xs text-gray-600">Yellow Line</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransitMapPlaceholder;