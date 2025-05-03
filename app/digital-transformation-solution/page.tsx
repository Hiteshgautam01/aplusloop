'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Banner from '@/components/DigitalTransfromationSolution/Banner';
import ArtificialIntelligence from '@/components/DigitalTransfromationSolution/ArtificialIntelligence';
import BlockchainWeb3 from '@/components/DigitalTransfromationSolution/BlockChainWeb3';
import SoftwarePlatforms from '@/components/DigitalTransfromationSolution/SoftwareSolution';

const DigitalTransformationSolution: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 mt-16">
      <Banner />
      
      <div className="container mx-auto px-4 py-12 space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ArtificialIntelligence />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BlockchainWeb3 />
        </motion.div>
        
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SoftwarePlatforms />
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalTransformationSolution;