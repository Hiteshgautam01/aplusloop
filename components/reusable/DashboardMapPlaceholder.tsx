import React from 'react';
import { motion } from 'framer-motion';
import { Route, Activity, TrendingUp, Bus, Clock, Users, Gauge, BarChart3, Network } from 'lucide-react';

interface DashboardMapPlaceholderProps {
  height?: string;
}

const DashboardMapPlaceholder = ({
  height = "650px",
}: DashboardMapPlaceholderProps) => {
  return (
    <div 
      className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50" 
      style={{ height }}
    >
      <div className="absolute inset-0 p-0">
        <div className="h-full w-full bg-white/80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-blue-100">
          
          {/* Dashboard Header */}
          <motion.div 
            className="h-16 border-b border-blue-100/50 px-8 flex items-center justify-between bg-gradient-to-r from-blue-50/50 to-transparent"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Route className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">PTOS Command Center</h1>
                <p className="text-xs text-gray-500">Public Transport Optimization Solution</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Live System Status */}
              <motion.div 
                className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 text-green-600 rounded-full text-sm border border-green-500/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live System
              </motion.div>
              
              {/* Navigation Tabs */}
              <div className="flex items-center gap-1 bg-blue-50/50 p-1 rounded-lg">
                {['Overview', 'Routes', 'Analytics'].map((tab, index) => (
                  <button 
                    key={tab}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                      index === 0 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="flex h-[calc(100%-4rem)]">
            
            {/* Compact Sidebar - Performance Overview */}
            <motion.div 
              className="w-80 border-r border-blue-100/50 bg-gradient-to-b from-blue-50/30 to-transparent p-6"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* System Performance Overview */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">System Performance</h3>
                
                {/* Circular Progress Indicator */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                        fill="none"
                      />
                      <motion.circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 352" }}
                        animate={{ strokeDasharray: "300 352" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#2563eb" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">87%</span>
                      <span className="text-xs text-gray-500">Overall Efficiency</span>
                    </div>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-3">
                  {[
                    { label: 'Fleet Utilization', value: '284 active', trend: '+12%', icon: Bus, color: 'blue' },
                    { label: 'On-time Performance', value: '94.2%', trend: '+2.3%', icon: Clock, color: 'green' },
                    { label: 'Passenger Volume', value: '42.3K', trend: '+5%', icon: Users, color: 'purple' }
                  ].map((metric, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white/50 transition-all"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-${metric.color}-50 flex items-center justify-center`}>
                          <metric.icon className={`w-4 h-4 text-${metric.color}-600`} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                          <div className="text-xs text-gray-500">{metric.value}</div>
                        </div>
                      </div>
                      <div className={`text-xs font-medium text-${metric.color}-600 flex items-center gap-1`}>
                        <TrendingUp className="w-3 h-3" />
                        {metric.trend}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Live Updates Feed */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Live Updates</h3>
                <div className="space-y-2">
                  {[
                    { time: '2 mins ago', event: 'Route A12 resumed normal service', type: 'success' },
                    { time: '5 mins ago', event: 'Minor delay on Route B7', type: 'warning' },
                    { time: '12 mins ago', event: 'New express route activated', type: 'info' }
                  ].map((update, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/50 transition-all"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${
                        update.type === 'success' ? 'bg-green-500' :
                        update.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">{update.event}</p>
                        <p className="text-xs text-gray-500">{update.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Content Area - Transit Map */}
            <motion.div 
              className="flex-1 p-6 bg-gradient-to-br from-blue-50/30 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Streamlined Top Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  {[
                    { label: 'Active Routes', value: '12', icon: Network },
                    { label: 'Average Speed', value: '38 km/h', icon: Gauge },
                    { label: 'System Load', value: '72%', icon: Activity }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/70 backdrop-blur-sm border border-blue-100/50 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium bg-white/70 backdrop-blur-sm border border-blue-100/50 text-gray-700 hover:bg-white transition-all">
                    Export Data
                  </button>
                  <button className="px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg shadow-blue-500/20">
                    View Full Analytics
                  </button>
                </div>
              </div>

              {/* Transit Map Visualization */}
              <motion.div 
                className="rounded-2xl overflow-hidden border border-blue-200/50 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 relative"
                style={{ height: 'calc(100% - 76px)' }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {/* Dynamic Grid Background */}
                <div className="absolute inset-0 opacity-10">
                  <div 
                    className="absolute inset-0" 
                    style={{
                      backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                    }}
                  />
                </div>

                {/* Minimal Floating Element */}
                <motion.div 
                  className="absolute top-6 left-6 flex items-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-blue-100/50 text-sm font-medium text-gray-700">
                    Real-time Transit Map
                  </div>
                </motion.div>

                {/* Central Design Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="relative"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {/* Animated Rings */}
                    <motion.div 
                      className="absolute inset-0 w-48 h-48 rounded-full border-2 border-blue-300/30"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute inset-0 w-48 h-48 rounded-full border-2 border-blue-400/30"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.05, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    
                    {/* Central Logo */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/10 to-blue-600/10 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/20 flex items-center justify-center">
                        <Route className="w-16 h-16 text-blue-600" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Info Bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-sm border-t border-blue-100/50 px-6 flex items-center justify-between"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  <div className="flex items-center gap-8">
                    {[
                      { label: 'Total Fleet', value: '342 vehicles', icon: Bus },
                      { label: 'Active Passengers', value: '28.5K', icon: Users },
                      { label: 'Avg Efficiency', value: '89%', icon: BarChart3 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-gray-500" />
                        <div>
                          <span className="text-sm font-medium text-gray-900">{item.value}</span>
                          <span className="text-xs text-gray-500 ml-2">{item.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    Last updated: 2 seconds ago
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMapPlaceholder;