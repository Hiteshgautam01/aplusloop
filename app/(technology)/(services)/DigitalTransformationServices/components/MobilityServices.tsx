"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageTextSection from '@/components/reusable/ImageTextSection';
import SectionHeader from '@/components/reusable/SectionHeader';
import { Car, Route, Cog, Navigation, Bus, CheckCircle } from 'lucide-react';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';

const MobilityServices = () => {
  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-tr from-blue-100/50 via-white to-indigo-50/30">
      {/* Background Elements - different from other sections */}
      <div className="absolute left-0 right-0 top-0 h-40 bg-gradient-to-b from-blue-50 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-blue-200/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl"></div>
      
      {/* Using our new SectionHeader component with stacked layout and different styling */}
      <SectionHeader
        title="Mobility Services"
        description="We design scalable, technology-driven mobility platforms for fleet optimization, route planning, and public-private transport integration. Our solutions improve efficiency, reduce operational costs, and adapt to evolving transportation demands."
        icon={<Navigation className="w-8 h-8 text-white" />}
        iconBackground="bg-gradient-to-br from-cyan-600 to-blue-500"
        layout="stacked"
        dividerStyle="dashed"
        dividerColor="from-cyan-500"
        // badge="Transportation Technology"
        badgeColor="bg-cyan-100 text-cyan-800"
        maxWidth="max-w-5xl"
        animationDelay={0.2}
        titleClassName="tracking-tight"
      />
      
      {/* ImageTextSection with concise bullet points only */}
      <div className="relative z-10 mt-10">
        <ImageTextSection
          title="MOBILITY SOLUTIONS OVERVIEW"
          content={
            <div className="space-y-4">
              <p className="text-base mb-6">
                Our comprehensive mobility services focus on four key areas:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Fleet Optimization</strong>: Enhancing vehicle utilization and minimizing operational costs.</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Operational Efficiency</strong>: Streamlining workflows and improving real-time decision-making.</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Scalable Mobility Platforms</strong>: Supporting diverse fleet sizes and operational models.</span>
                </li>
                
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Multi-modal Transit Integration</strong>: Connecting public and private transportation systems.</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-cyan-50 border border-cyan-100 rounded-lg p-4">
                <p className="text-sm text-cyan-800">
                  <span className="font-semibold">Fleet Definition:</span> "Fleet" refers to road vehicles, ranging from small passenger vehicles (e.g., cars, vans) to larger transport vehicles (e.g., buses, shuttles).
                </p>
              </div>
            </div>
          }
          borderStyle="tilt"
          borderColor="cyan"
          badge="Mobility Innovation"
          imagePosition="left"
          textContentStyle="bordered"
          decorative={true}
          backgroundColor="rgba(239, 246, 255, 0.7)" // Light blue with transparency
          backgroundStyle="solid"
          imageEffect="saturation"
          customImage={
            <ImagePlaceholder 
              title="Mobility Solutions"
              subtitle="Smart Transportation Systems"
              iconPath="/api/placeholder/48/48"
              accentColor="#0891b2"
              bgColor="#cffafe"
              height="100%"
            />
          }
        />
      </div>
      
      {/* Detailed Service Cards Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-light text-gray-800 mb-8 text-center"
        >
          Our Comprehensive Mobility Solutions
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 pt-2">Fleet Optimization</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our fleet optimization solutions use advanced analytics and real-time data to maximize vehicle utilization 
                while reducing operational costs. We provide:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Advanced scheduling systems to optimize fleet coverage</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Route optimization that reduces fuel consumption and vehicle wear</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Predictive maintenance to prevent breakdowns and extend vehicle lifespan</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 pt-2">Operational Efficiency</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We implement technologies that streamline workflows, automate processes and improve real-time decision-making 
                for fleet management:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Automated dispatch and scheduling systems</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Real-time analytics dashboards for instant performance insights</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Workflow automation tools to reduce manual processes</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Route className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 pt-2">Scalable Mobility Platforms</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our flexible, technology-driven platforms support diverse fleet sizes and operational models:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Cloud-based systems that grow with your operations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Support for both on-demand services and fixed-route systems</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Modular architecture that adapts to changing business needs</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-gray-800 pt-2">Multi-modal Transit Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We connect public and private transportation systems for seamless mobility across different modes of transit:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>APIs for connecting to public transit networks</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Unified booking and payment systems across transportation modes</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Passenger-facing apps for seamless multi-modal journey planning</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-5xl mx-auto mt-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-gradient-to-b from-cyan-600 to-blue-700 rounded-xl overflow-hidden">
          <div className="px-6 py-10 md:p-10 relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-4 text-center">
                Ready to transform your transportation operations?
              </h3>
              <p className="text-cyan-100 text-center max-w-2xl mx-auto mb-8">
                Our mobility solutions adapt to your specific operational needs, whether you manage a small fleet or a large transportation network.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  Schedule a Demo
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MobilityServices;