import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { 
  Activity, 
  ArrowRight, 
  Database, 
  Zap, 
  Cloud, 
  Cpu, 
  BarChart3,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';
import SectionHeader from '@/components/reusable/SectionHeader';


const IoTTimeSeriesDataManagement = () => {
  // Sample time-series data for the chart
  const timeSeriesData = [
    { time: '00:00', deviceCount: 1200, dataVolume: 450, anomalies: 2 },
    { time: '04:00', deviceCount: 1350, dataVolume: 520, anomalies: 1 },
    { time: '08:00', deviceCount: 1800, dataVolume: 780, anomalies: 5 },
    { time: '12:00', deviceCount: 2100, dataVolume: 920, anomalies: 3 },
    { time: '16:00', deviceCount: 2350, dataVolume: 1100, anomalies: 4 },
    { time: '20:00', deviceCount: 1950, dataVolume: 850, anomalies: 2 },
    { time: '24:00', deviceCount: 1400, dataVolume: 580, anomalies: 1 }
  ];

  const challenges = [
    {
      title: "High-Frequency Data Ingestion",
      description: "Managing massive volumes of real-time data from thousands of IoT devices with varying transmission patterns.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Unordered & Incomplete Data",
      description: "Handling out-of-sequence data packets and compensating for missing or corrupted sensor readings.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Real-Time Processing Requirements",
      description: "Ensuring millisecond response times for critical alerts and immediate decision-making support.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Edge-to-Cloud Integration",
      description: "Seamlessly synchronizing distributed edge processing with centralized cloud analytics and storage.",
      icon: <Cloud className="w-6 h-6" />
    }
  ];

  const services = [
    {
      category: "Data Services",
      services: [
        "Real-time data processing pipelines",
        "Advanced time-series analytics",
        "Edge-to-cloud synchronization",
        "Data quality validation & cleansing"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "blue"
    },
    {
      category: "Automation Services", 
      services: [
        "Workflow orchestration for IoT data",
        "Automated anomaly detection",
        "Smart data routing & prioritization",
        "Self-healing processing pipelines"
      ],
      icon: <Cpu className="w-6 h-6" />,
      color: "indigo"
    },
    {
      category: "Cloud Services",
      services: [
        "Scalable time-series databases",
        "Elastic infrastructure provisioning",
        "Multi-region data replication",
        "Integrated analytics platforms"
      ],
      icon: <Cloud className="w-6 h-6" />,
      color: "purple"
    }
  ];

  const solutions = [
    {
      title: "Time-Series Database Implementation",
      description: "Deploy purpose-built databases optimized for IoT workloads with automatic compression and retention policies.",
      benefits: ["99.9% uptime", "Sub-second queries", "Automated scaling"]
    },
    {
      title: "Edge Computing Integration",
      description: "Implement edge nodes for real-time processing, reducing latency and bandwidth while enabling offline operation.",
      benefits: ["<10ms latency", "90% bandwidth reduction", "Offline resilience"]
    },
    {
      title: "AI/ML Predictive Analytics",
      description: "Leverage machine learning models for pattern recognition, predictive maintenance, and automated decision-making.",
      benefits: ["85% accuracy", "Proactive alerts", "Cost optimization"]
    },
    {
      title: "Unified Data Orchestration",
      description: "Establish automated workflows connecting edge, fog, and cloud layers for comprehensive data lifecycle management.",
      benefits: ["End-to-end visibility", "Automated governance", "Real-time insights"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto  relative">
        <SectionHeader
          title="IoT Time-Series Data Management"
          description="Transform high-frequency IoT data into actionable insights with robust, scalable, and intelligent data processing solutions designed for the connected world."
          icon={<Activity className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-indigo-500 to-blue-600"
          layout="stacked"
          dividerStyle="solid"
          dividerColor="blue-400"
        //   badge="IoT & Edge Computing"
          badgeColor="bg-indigo-100 text-indigo-800"
          maxWidth="max-w-6xl"
        //   animationDelay={0.2}
        />

        {/* Problem & Solution Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left: Problem & Content */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Organizations struggle to manage the vast amounts of high-frequency, high-volume time-series data generated by IoT and edge devices. Critical challenges include handling unordered or incomplete data, ensuring real-time processing capabilities, and seamlessly integrating actionable insights into decision-making systems.
              </p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-blue-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{challenge.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Time-Series Data Chart */}
          <div>
            <Card className="h-full border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Real-Time IoT Metrics</h4>
                    <p className="text-slate-600 text-sm">Device count and data volume over 24 hours</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Live Data</span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timeSeriesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis 
                        dataKey="time" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="deviceCount"
                        stroke="#3b82f6"
                        fill="url(#colorDevices)"
                        strokeWidth={2}
                        name="Connected Devices"
                      />
                      <Area
                        type="monotone"
                        dataKey="dataVolume"
                        stroke="#6366f1"
                        fill="url(#colorVolume)"
                        strokeWidth={2}
                        name="Data Volume (MB/s)"
                      />
                      <defs>
                        <linearGradient id="colorDevices" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">2.1K</p>
                    <p className="text-slate-600 text-xs">Peak Devices</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">1.1GB</p>
                    <p className="text-slate-600 text-xs">Max Volume/s</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">99.9%</p>
                    <p className="text-slate-600 text-xs">Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our IoT Data Services</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-lg flex items-center justify-center text-${service.color}-600 group-hover:from-${service.color}-100 group-hover:to-${service.color}-200 transition-colors duration-300`}>
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">{service.category}</h4>
                    </div>
                    
                    <ul className="space-y-3">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${service.color}-500 mt-2 flex-shrink-0`} />
                          <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Solutions</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm group overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-300" />
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      {solution.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-medium rounded-full border border-blue-100"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your IoT Data Strategy?
              </h3>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                Unlock the full potential of your IoT infrastructure with our comprehensive time-series data management solutions. From edge to cloud, we ensure your data drives intelligent decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 group shadow-lg">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-8 py-3 rounded-lg">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IoTTimeSeriesDataManagement;