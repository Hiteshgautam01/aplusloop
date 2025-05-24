import React, { useState } from 'react';
import { motion } from "framer-motion";

const TestingTypes = () => {
  // Testing types data
  const testingTypes = [
    {
      id: 'white',
      title: 'White Box Penetration Testing',
      description: 'White box penetration testing, also known as crystal or oblique box pen testing, entails providing the tester with complete network and system details, including network maps and credentials. This contributes to time savings and lowers the overall engagement cost. A white box penetration test helps simulate a targeted attack using as many attack paths as feasible on a particular system.',
      icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
      illustration: "M12 6v6m0 0v6m0-6h6m-6 0H6"
    },
    {
      id: 'black',
      title: 'Black Box Penetration Testing',
      description: 'In a black box penetration test, the tester receives absolutely no information. In this case, the pen tester mimics an unprivileged attacker\'s strategy from initial access and execution until exploitation. The most realistic scenario is this one since it shows how an opponent without inside information would target and compromise an organization. However, because of this, it is frequently the most expensive choice.',
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
      illustration: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    },
    {
      id: 'grey',
      title: 'Grey Box Penetration Testing',
      description: 'Only a small amount of information is disclosed to the tester during a grey box penetration test, sometimes called a transparent box test. This typically takes the form of login information. Grey box testing helps determine the degree of access and potential harm that a privileged person could have. In order to simulate an insider threat or an attack that has breached the network perimeter, grey box tests find a balance between depth and efficiency.',
      icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
      illustration: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            White Box - Black Box - Grey Box Pen Testing
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-blue-700">
            EDCS provides a range of testing methods as a choice for the client to prioritize 
            the way of conducting a test. Typically, testing methods are classified as white box, 
            black box, or grey box penetration testing.
          </p>
        </div>

        {/* Cards Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testingTypes.map((type, index) => (
            <motion.div
              key={type.id}
              variants={itemVariants}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-200 h-full flex flex-col"
            >
              {/* Background Hexagon Pattern */}
              <div className="absolute top-0 right-0 opacity-5">
                <svg width="150" height="150" viewBox="0 0 100 100" fill="currentColor" className="text-blue-600">
                  <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0z" />
                </svg>
              </div>
              
              {/* Card Content */}
              <div className="p-8 flex flex-col h-full relative z-10">
                {/* Icon */}
                <div className="mb-6 flex items-center">
                  <div className="w-14 h-14 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shadow-lg">
                    <svg className="w-7 h-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                    </svg>
                  </div>
                  <div className="ml-4 h-px flex-grow bg-gradient-to-r from-blue-300 to-transparent"></div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-blue-800">{type.title}</h3>
                
                {/* Description */}
                <p className="text-blue-700 leading-relaxed mb-6 flex-grow">{type.description}</p>
                
                {/* Bottom Illustration */}
                <div className="mt-auto">
                  <div className="flex justify-end">
                    <div className="w-20 h-20 rounded-full bg-blue-50 p-4 flex items-center justify-center">
                      <svg className="w-full h-full text-blue-400 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={type.illustration} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Accent Line */}
              <div className={`h-1.5 w-full bg-gradient-to-r from-blue-400 ${
                index === 0 ? 'to-blue-600' : index === 1 ? 'to-blue-700' : 'to-blue-800'
              }`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center">
            <div className="h-px w-12 bg-blue-300"></div>
            <div className="mx-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="h-px w-12 bg-blue-300"></div>
          </div>
          <p className="mt-4 text-blue-600 max-w-2xl mx-auto">
            The right penetration testing method depends on your organization's specific security requirements, 
            timeframe, and budget. Contact EDCS for a tailored approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestingTypes;