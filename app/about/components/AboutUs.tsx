import React from 'react';
import VisionMission from './VissionMission';
import OurValues from './OurValues';
import UniqueApproach from './UniqueValues';
import GlobalPresence from './GlobalPresence';

const AboutUs = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className="absolute top-40 -right-64 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -left-64 w-96 h-96 rounded-full bg-indigo-100/50 blur-3xl -z-10"></div>
      
      {/* About Us Page Sections */}
      <VisionMission />
      <OurValues />
      <UniqueApproach />
      <GlobalPresence />
    </div>
  );
};

export default AboutUs;