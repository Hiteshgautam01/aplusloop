import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  ArrowRight, 
  Cpu, 
  Zap, 
  Cloud, 
  Database, 
  Settings,
  Shield,
  Activity,
  GitBranch,
  Layers,
  Network,
  Server,
  CheckCircle2,
  Code,
  BarChart3
} from 'lucide-react';
import SectionHeader from '@/components/reusable/SectionHeader';


const AIMLEdgeAutomation = () => {
  // Core capabilities data
  const capabilities = [
    {
      title: "Expert Support",
      description: "Our team has in-depth expertise in the Apache PLC4X codebase and provides a managed service approach to ensure the solution is robust, secure, and continuously maintained.",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      highlights: ["Apache PLC4X specialists", "Managed service approach", "Continuous maintenance"]
    },
    {
      title: "Edge Processing",
      description: "Real-time analytics and anomaly detection at the edge to reduce latency and ensure actionable insights close to the source.",
      icon: <Cpu className="w-6 h-6" />,
      color: "indigo",
      highlights: ["Sub-second response", "Local anomaly detection", "Edge intelligence"]
    },
    {
      title: "Stream Processing",
      description: "Real-time data pipelines and event-driven processing using Kafka and Flink for dynamic data integration.",
      icon: <Activity className="w-6 h-6" />,
      color: "blue",
      highlights: ["Event-driven architecture", "Dynamic integration", "Real-time pipelines"]
    },
    {
      title: "Cloud Integration",
      description: "Securely encapsulating and transmitting data for centralized processing and long-term analytics using IoTDB for high-performance storage.",
      icon: <Cloud className="w-6 h-6" />,
      color: "slate",
      highlights: ["Secure transmission", "Centralized analytics", "High-performance storage"]
    }
  ];

  // Technology stack
  const technologies = [
    {
      name: "Apache PLC4X",
      description: "Universal protocol adapter for industrial connectivity",
      icon: <Settings className="w-8 h-8" />,
      features: ["20+ PLC protocols", "Zero impact on PLCs", "Universal connectivity"]
    },
    {
      name: "Apache IoTDB",
      description: "High-performance time-series database for IoT data",
      icon: <Database className="w-8 h-8" />,
      features: ["Time-series optimized", "Compression algorithms", "Scalable storage"]
    },
    {
      name: "Apache Kafka",
      description: "Distributed streaming platform for real-time data",
      icon: <GitBranch className="w-8 h-8" />,
      features: ["High throughput", "Fault tolerant", "Event streaming"]
    },
    {
      name: "Apache Flink",
      description: "Stream processing engine for real-time analytics",
      icon: <Zap className="w-8 h-8" />,
      features: ["Low latency", "Stateful processing", "Complex event processing"]
    }
  ];

  // Benefits of the integrated platform
  const platformBenefits = [
    {
      category: "Performance",
      benefits: [
        "Sub-millisecond edge processing",
        "Horizontal scaling capabilities",
        "Optimized data compression",
        "High-throughput data pipelines"
      ]
    },
    {
      category: "Security",
      benefits: [
        "End-to-end encryption",
        "Secure edge-to-cloud transmission",
        "Zero-trust architecture",
        "Compliance-ready framework"
      ]
    },
    {
      category: "Reliability",
      benefits: [
        "Fault-tolerant design",
        "Automatic failover mechanisms",
        "Data integrity guarantees",
        "24/7 monitoring and support"
      ]
    },
    {
      category: "Scalability",
      benefits: [
        "Linear scaling with demand",
        "Multi-tenant architecture",
        "Global deployment ready",
        "Resource auto-optimization"
      ]
    }
  ];

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 md:w-96 h-80 md:h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 md:w-96 h-80 md:h-96 bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-80 h-60 md:h-80 bg-slate-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto  relative">
        <SectionHeader
          title="AI ML Edge Automation"
          description="Comprehensive edge-to-cloud automation platform leveraging Apache technologies for intelligent industrial data processing, real-time analytics, and seamless integration."
          icon={<Brain className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-indigo-600 to-blue-700"
          layout="standard"
          dividerStyle="solid"
          dividerColor="blue-400"
          badge="Intelligent Automation"
          badgeColor="bg-blue-100 text-blue-800"
          maxWidth="max-w-6xl"
          animationDelay={0.2}
        />

        {/* Integrated Platform Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-600" />
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Integrated Platform Architecture</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6" />
                <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
                  Using Apache IoTDB, Apache Kafka, and Apache Flink, we enable a complete end-to-end solution 
                  that seamlessly connects, processes, and transmits data from PLCs to downstream systems, 
                  ensuring scalability, efficiency, and security throughout the entire data pipeline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Cpu className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Edge Layer</h4>
                  <p className="text-slate-600">Real-time processing and intelligence at the source</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Activity className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Stream Layer</h4>
                  <p className="text-slate-600">Event-driven processing and data pipelines</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Cloud className="w-8 h-8 text-slate-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Cloud Layer</h4>
                  <p className="text-slate-600">Centralized analytics and long-term storage</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Core Capabilities</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-${capability.color}-50 to-${capability.color}-100 rounded-xl flex items-center justify-center text-${capability.color}-600 group-hover:from-${capability.color}-100 group-hover:to-${capability.color}-200 transition-colors duration-300`}>
                        {capability.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{capability.title}</h4>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3 md:mb-4">
                          {capability.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {capability.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 md:gap-3">
                          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-${capability.color}-500`} />
                          <span className="text-slate-700 text-xs md:text-sm font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Apache Technology Stack</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full" />
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
              Built on proven open-source Apache technologies, ensuring reliability, scalability, and community support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                  <CardContent className="p-4 md:p-6 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-3 md:mb-4 group-hover:from-blue-100 group-hover:to-indigo-200 transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2">{tech.name}</h4>
                    <p className="text-slate-600 text-xs md:text-sm mb-3 md:mb-4">{tech.description}</p>
                    
                    <div className="space-y-1.5 md:space-y-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded-full">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* End-to-End Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">End-to-End Solution</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mb-6" />
                <p className="text-xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
                  A comprehensive framework that seamlessly connects, processes, and transmits data from PLCs 
                  to downstream systems, ensuring scalability, efficiency, and security throughout the entire pipeline.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {platformBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-white">{index + 1}</div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">{benefit.category}</h4>
                    <ul className="space-y-2">
                      {benefit.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
                Transform Your Industrial Operations
              </h3>
              <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
                Ready to implement intelligent edge automation with our proven Apache technology stack? 
                Let our experts design a custom solution tailored to your industrial requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-6 md:px-8 py-3 rounded-lg flex items-center gap-2 group shadow-lg">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-2 border-blue-600 text-blue-700 hover:text-blue-800 hover:border-blue-700 hover:bg-blue-50 px-6 md:px-8 py-3 rounded-lg">
                  Architecture Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AIMLEdgeAutomation;