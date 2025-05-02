import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Brain, Sparkles, ChevronRight, Check } from 'lucide-react';

const ArtificialIntelligence = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const aiTools = [
    {
      title: "GitHub Copilot",
      description: "Your AI pair programmer that helps you write better code faster. Powered by OpenAI's technology, it suggests whole lines or blocks of code as you type.",
      icon: <Code className="text-blue-600" />,
      stats: "70% faster code completion",
      color: "blue"
    },
    {
      title: "ChatGPT",
      description: "An advanced conversational AI assistant that can help with code reviews, debugging, learning new technologies, and generating boilerplate code.",
      icon: <Brain className="text-blue-600" />,
      stats: "85% faster problem-solving",
      color: "blue"
    },
    {
      title: "Claude",
      description: "An AI assistant with strong reasoning capabilities, perfect for tackling complex coding challenges and providing detailed explanations for difficult concepts.",
      icon: <Sparkles className="text-blue-600" />,
      stats: "90% improved code quality",
      color: "blue"
    }
  ];

  return (
    <section className="py-12 px-4 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/30 to-blue-50/20 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-60 -left-20 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-left"
          >
            <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-600 border border-indigo-100 hover:from-blue-100 hover:to-indigo-100 mb-4 px-4 py-1.5 text-sm font-medium">
              Next-Gen Development
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              AI-Powered <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Development</span> Tools
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Revolutionize your workflow and boost productivity with cutting-edge AI assistants that understand your code, anticipate your needs, and help you build better software.
            </p>
            
            <div className="mb-8 space-y-3">
              {[
                "Increase development speed by up to 55%",
                "Reduce debugging time by 40%",
                "Improve code quality and maintainability"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-lg flex items-center gap-2 group shadow-md hover:shadow-lg">
                Explore Tools
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2.5 rounded-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 h-[400px] relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,112,184,0.2)]"
          >
            <Image
              src="/github-copilot.jpg"
              alt="AI Development Tools"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-800/50 to-transparent backdrop-filter backdrop-blur-[2px]" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="bg-gradient-to-r from-blue-900/80 to-indigo-900/60 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">Transform Your Development Process</h3>
                <p className="text-blue-50 mb-4">Smart assistants that learn your patterns and help you code faster</p>
                
                <div className="flex gap-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCard(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeCard === index ? "bg-white scale-125" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border-none h-full shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`bg-${tool.color}-50 p-3 rounded-lg group-hover:text-white transition-colors duration-300`}>
                      {tool.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{tool.title}</h3>
                      <p className={`text-${tool.color}-600 font-medium text-sm`}>{tool.stats}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 flex-grow">{tool.description}</p>
                  
                  <div className="mt-auto">
                    <button className={`text-${tool.color}-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all`}>
                      Learn more <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/4"></div>
          
          <div className="relative z-10 p-8 max-w-3xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to supercharge your development?</h3>
              <p className="text-blue-50 mb-8">
                Join thousands of developers who are using AI-powered tools to write better code, faster.
                Our curated selection of tools will help you stay at the cutting edge of technology.
              </p>
              <Button className="bg-white text-indigo-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium shadow-md">
                Get started today
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtificialIntelligence;