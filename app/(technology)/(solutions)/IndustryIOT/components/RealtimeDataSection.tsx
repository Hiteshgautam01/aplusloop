import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { 
  Settings, 
  ArrowRight, 
  Cpu, 
  Shield, 
  Wifi, 
  Database, 
  Zap,
  Lock,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import SectionHeader from '@/components/reusable/SectionHeader';



const IndustrialPLCDataAcquisition = () => {
  // Protocol performance comparison data
  const protocolPerformanceData = [
    { protocol: 'OPC UA', throughput: 45, overhead: 85, security: 95, latency: 120 },
    { protocol: 'ModBus TCP', throughput: 92, overhead: 25, security: 30, latency: 35 },
    { protocol: 'ProfiBus', throughput: 88, overhead: 30, security: 25, latency: 40 },
    { protocol: 'S7 Protocol', throughput: 90, overhead: 28, security: 35, latency: 38 },
    { protocol: 'PLC4X Native', throughput: 95, overhead: 20, security: 90, latency: 30 }
  ];

  // Real-time PLC connectivity data
  const connectivityData = [
    { time: '00:00', connected: 245, successful: 98.2, errors: 4 },
    { time: '04:00', connected: 248, successful: 98.8, errors: 3 },
    { time: '08:00', connected: 252, successful: 97.5, errors: 6 },
    { time: '12:00', connected: 255, successful: 99.1, errors: 2 },
    { time: '16:00', connected: 250, successful: 98.9, errors: 3 },
    { time: '20:00', connected: 247, successful: 98.6, errors: 3 },
    { time: '24:00', connected: 245, successful: 98.4, errors: 4 }
  ];

  const challenges = [
    {
      title: "PLC Performance Impact",
      description: "Traditional data acquisition methods can significantly slow down PLC operations, affecting critical industrial processes.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "OPC UA Overhead",
      description: "While secure and standardized, OPC UA introduces substantial computational overhead that reduces overall system efficiency.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Native Protocol Security",
      description: "Efficient protocols like ModBus and S7 lack built-in internet security, creating vulnerabilities in connected environments.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Scale & Complexity",
      description: "Managing hundreds of PLCs with different protocols requires sophisticated middleware for unified data acquisition.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  const services = [
    {
      category: "Data Services",
      services: [
        "Native protocol integration (ModBus, ProfiBus, S7)",
        "High-speed data acquisition without PLC impact",
        "Protocol normalization and standardization",
        "Real-time data validation and quality assurance"
      ],
      icon: <Database className="w-6 h-6" />,
      color: "blue"
    },
    {
      category: "Automation Services", 
      services: [
        "Edge processing workflows for PLCs",
        "Secure data transmission mechanisms",
        "Automated protocol detection and configuration",
        "Intelligent buffering and retry logic"
      ],
      icon: <Zap className="w-6 h-6" />,
      color: "indigo"
    },
    {
      category: "Cloud Services",
      services: [
        "Internet-safe PLC data integration",
        "Centralized analytics and monitoring",
        "Multi-protocol dashboard and alerts",
        "Scalable infrastructure for industrial IoT"
      ],
      icon: <Wifi className="w-6 h-6" />,
      color: "purple"
    }
  ];

  const solutions = [
    {
      title: "Apache PLC4X Integration",
      description: "Leverage open-source industrial middleware supporting all major PLC protocols with minimal performance overhead and enhanced security.",
      benefits: ["95% efficiency", "20+ protocols", "Zero PLC impact"],
      icon: <Settings className="w-5 h-5" />
    },
    {
      title: "Edge-Level Processing",
      description: "Deploy intelligent edge nodes that handle protocol conversion, data preprocessing, and security encapsulation locally.",
      benefits: ["<10ms latency", "Local processing", "Bandwidth optimization"],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Secure Data Encapsulation",
      description: "Implement robust security layers that wrap native protocol data for safe transmission over internet infrastructure.",
      benefits: ["End-to-end encryption", "Zero trust architecture", "Compliance ready"],
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Centralized Analytics Platform",
      description: "Unified dashboard providing real-time insights, predictive maintenance alerts, and comprehensive industrial data analytics.",
      benefits: ["Real-time monitoring", "Predictive insights", "Custom reports"],
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const protocols = [
    { name: "ModBus TCP/RTU", efficiency: "High", security: "Low", adoption: "Very High" },
    { name: "ProfiBus DP/PA", efficiency: "High", security: "Medium", adoption: "High" },
    { name: "Siemens S7", efficiency: "High", security: "Medium", adoption: "High" },
    { name: "OPC UA", efficiency: "Medium", security: "High", adoption: "Growing" },
    { name: "Ethernet/IP", efficiency: "Medium", security: "Medium", adoption: "High" }
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
          title="Real-Time Acquisition"
          description="Efficiently acquire data from PLCs at scale without performance impact using native protocols and secure edge processing for reliable industrial connectivity."
          icon={<Settings className="w-8 h-8 text-white" />}
          iconBackground="bg-gradient-to-br from-indigo-600 to-blue-700"
          layout="standard"
          dividerStyle="solid"
          dividerColor="blue-400"
          badge="Industrial IoT"
          badgeColor="bg-blue-100 text-blue-800"
          maxWidth="max-w-6xl"
          animationDelay={0.2}
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Industrial Challenge</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Acquiring data at scale from PLCs without impacting their performance is a major industrial challenge. Open standards like OPC UA, commonly used in SCADA systems, introduce significant overhead, reducing efficiency. Native protocols such as ModBus, ProfiBus, and S7 are more efficient but lack internet security, necessitating edge-level processing and secure encapsulation for downstream analytics.
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

          {/* Right: Protocol Performance Chart */}
          <div>
            <Card className="h-full border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">Protocol Performance Comparison</h4>
                    <p className="text-slate-600 text-sm">Throughput vs Overhead Analysis</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Real-time</span>
                  </div>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={protocolPerformanceData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                      <XAxis 
                        dataKey="protocol" 
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={80}
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
                        formatter={(value, name) => {
                          const labels = {
                            throughput: 'Throughput %',
                            overhead: 'Overhead %',
                            security: 'Security Score',
                            latency: 'Latency (ms)'
                          };
                          return [value, labels[name as keyof typeof labels] || name];
                        }}
                      />
                      <Bar dataKey="throughput" fill="#3b82f6" name="throughput" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="overhead" fill="#1e40af" name="overhead" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">255</p>
                    <p className="text-slate-600 text-xs">Connected PLCs</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">98.9%</p>
                    <p className="text-slate-600 text-xs">Success Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">30ms</p>
                    <p className="text-slate-600 text-xs">Avg Latency</p>
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
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Industrial Data Services</h3>
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

        {/* Protocol Support Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Protocol Support Matrix</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 font-semibold text-slate-800">Protocol</th>
                      <th className="text-center py-4 px-4 font-semibold text-slate-800">Efficiency</th>
                      <th className="text-center py-4 px-4 font-semibold text-slate-800">Security</th>
                      <th className="text-center py-4 px-4 font-semibold text-slate-800">Adoption</th>
                    </tr>
                  </thead>
                  <tbody>
                    {protocols.map((protocol, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium text-slate-800">{protocol.name}</td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            protocol.efficiency === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {protocol.efficiency}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            protocol.security === 'High' ? 'bg-green-100 text-green-800' :
                            protocol.security === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {protocol.security}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                            {protocol.adoption}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
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
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Our PLC Integration Solutions</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
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
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:from-indigo-500 group-hover:to-blue-500 transition-all duration-300" />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                        {solution.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                          {solution.title}
                        </h4>
                      </div>
                    </div>
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
                Modernize Your Industrial Data Infrastructure
              </h3>
              <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                Transform your PLC data acquisition with our proven solutions that deliver high-performance, secure, and scalable connectivity without compromising operational efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-lg flex items-center gap-2 group shadow-lg">
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" className="border-2 border-blue-400 text-blue-100 hover:text-white hover:border-blue-300 hover:bg-blue-800/20 px-8 py-3 rounded-lg">
                  Technical Consultation
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrialPLCDataAcquisition;