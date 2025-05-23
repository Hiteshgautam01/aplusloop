"use client"
import React from 'react';
import { motion } from 'framer-motion';
import ImageTextSection from '@/components/reusable/ImageTextSection';
import { Settings, Database, Server, Cog, Users, Shield } from 'lucide-react';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';
import SectionHeader from '@/components/reusable/SectionHeader';

const AutomationServices = () => {
  return (
    <div className="relative pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-indigo-200/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-blue-200/10 blur-3xl"></div>

      <SectionHeader
        title="Automation Services"
        description="Our RPA and IT automation services eliminate manual bottlenecks and improve efficiency across IT and business operations. 
            With tools like ITSM, ITAM, and automation frameworks (Ansible, Terraform), we enable organizations to focus on strategic 
            growth by streamlining repetitive processes."
        icon={<Settings className="w-8 h-8 text-blue-600" />}
        layout="stacked"
        titleSize="xl"
        maxWidth="max-w-6xl"
        badgeColor="bg-blue-100 text-blue-800"
        blueBg={true}
        isFloat={true}
      />
      
      {/* Introduction Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto  mt-16"
      >
        <div className="text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-8"
          >
            IT SERVICE MANAGEMENT
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed text-slate-600"
          >
            In the ever-evolving landscape of IT, organizations strive to enhance service delivery, optimize asset utilization, and streamline operations. Central to achieving these objectives are frameworks like IT Service Management (ITSM), IT Operations Management (ITOM), and IT Asset Management (ITAM), complemented by technologies such as Robotic Process Automation (RPA). Together, they form the backbone of efficient, automated, and resilient IT ecosystems.
          </motion.p>
        </div>
      </motion.div>

      {/* ITSM Section */}
      <ImageTextSection
        title="IT Service Management (ITSM): Aligning IT Services with Business Goals"
        content={
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              ITSM is a strategic approach focused on designing, delivering, managing, and improving IT services to meet business needs. It encompasses processes such as incident management, problem management, change management, and service request fulfillment.
            </p>
            <p className="text-base leading-relaxed">
              By implementing ITSM, organizations ensure that IT services are delivered efficiently and effectively, enhancing user satisfaction and aligning IT operations with business objectives.
            </p>
          </div>
        }
        borderColor="blue"
        borderStyle="tilt"
        badge="Service Alignment"
        imagePosition="left"
        textContentStyle="minimal"
        decorative={true}
        backgroundColor="rgba(245, 248, 255, 0.7)"
        backgroundStyle="solid"
        customImage={
          <ImagePlaceholder 
            title="ITSM Solutions"
            subtitle="Service Management"
            iconPath="/api/placeholder/48/48"
            accentColor="#1E22AA"
            bgColor="#E0E8FF"
            height="100%"
          />
        }
      />

      {/* ITOM Section */}
      <ImageTextSection
        title="IT Operations Management (ITOM): Ensuring Optimal IT Infrastructure Performance"
        content={
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              ITOM involves the administration of an organization's IT infrastructure, including hardware, software, and networks. Its primary goal is to ensure the availability, performance, and capacity of IT systems.
            </p>
            <p className="text-base leading-relaxed">
              Key functions include infrastructure management, network monitoring, server management, and performance monitoring. By proactively managing these components, ITOM helps maintain seamless IT operations and supports business continuity.
            </p>
          </div>
        }
        borderColor="blue"
        borderStyle="frosted"
        badge="Infrastructure Performance"
        imagePosition="right"
        textContentStyle="card"
        decorative={true}
        backgroundColor="transparent"
        backgroundStyle="none"
        customImage={
          <ImagePlaceholder 
            title="ITOM Infrastructure"
            subtitle="Operations Management"
            iconPath="/api/placeholder/48/48"
            accentColor="#0047FF"
            bgColor="#F5F8FF"
            height="100%"
          />
        }
      />

      {/* ITAM Section */}
      <ImageTextSection
        title="IT Asset Management (ITAM): Maximizing Value from IT Assets"
        content={
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              ITAM is a set of business practices that combines financial, contractual, and inventory functions to support lifecycle management and strategic decision-making for the IT environment. It ensures that all IT assets, including hardware, software, and licenses, are effectively tracked, utilized, and maintained throughout their lifecycle.
            </p>
            <p className="text-base leading-relaxed">
              By implementing ITAM, organizations can optimize asset utilization, reduce costs, and ensure compliance with licensing agreements.
            </p>
          </div>
        }
        borderColor="blue"
        borderStyle="shadow"
        badge="Asset Optimization"
        imagePosition="left"
        textContentStyle="highlighted"
        decorative={true}
        backgroundColor="rgba(245, 248, 255, 0.7)"
        backgroundStyle="solid"
        customImage={
          <ImagePlaceholder 
            title="ITAM Solutions"
            subtitle="Asset Management"
            iconPath="/api/placeholder/48/48"
            accentColor="#1E22AA"
            bgColor="#E0E8FF"
            height="100%"
          />
        }
      />

      {/* RPA Section */}
      <ImageTextSection
        title="Robotic Process Automation (RPA): Automating Repetitive IT Tasks"
        content={
          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              RPA involves the use of software robots to automate repetitive, rule-based tasks traditionally performed by humans. In the context of IT operations, RPA can automate processes such as ticketing, incident management, user onboarding, and data entry.
            </p>
            <p className="text-base leading-relaxed">
              By integrating RPA into ITSM, ITOM, and ITAM, organizations can enhance efficiency, reduce errors, and free up IT personnel to focus on more strategic initiatives.
            </p>
          </div>
        }
        borderColor="blue"
        borderStyle="gradient"
        badge="Process Automation"
        imagePosition="right"
        textContentStyle="bordered"
        decorative={true}
        backgroundColor="transparent"
        backgroundStyle="none"
        customImage={
          <ImagePlaceholder 
            title="RPA Automation"
            subtitle="Process Robotics"
            iconPath="/api/placeholder/48/48"
            accentColor="#0047FF"
            bgColor="#F5F8FF"
            height="100%"
          />
        }
      />

      {/* Integration Section - Full Width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden"
        >
          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <span className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2 inline-block">
                Unified Approach
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Integrating ITSM, ITOM, ITAM, and RPA: A Unified Approach to IT Management
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-slate-600">
              <p className="text-base leading-relaxed">
                The convergence of ITSM, ITOM, ITAM, and RPA offers a holistic approach to IT management. By integrating these frameworks and technologies, organizations can achieve:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Enhanced Efficiency</h4>
                    <p className="text-sm">Automation reduces manual interventions, accelerating processes and minimizing errors.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Improved Visibility</h4>
                    <p className="text-sm">A unified view of IT assets and operations enables better decision-making and resource allocation.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Proactive Issue Resolution</h4>
                    <p className="text-sm">Predictive analytics and automated monitoring facilitate early detection and resolution of potential issues.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mr-4 mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Cost Optimization</h4>
                    <p className="text-sm">Efficient asset management and automated processes lead to significant cost savings.</p>
                  </div>
                </div>
              </div>

              <p className="text-base leading-relaxed">
                By adopting an integrated approach, organizations can build a resilient, agile, and efficient IT environment that supports their strategic objectives.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <p className="text-base leading-relaxed text-blue-800">
                  In conclusion, the synergy between ITSM, ITOM, ITAM, and RPA is pivotal in modern IT operations. By leveraging these frameworks and technologies, organizations can enhance service delivery, optimize asset utilization, and drive operational excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section - Full Width Below */}
          <div className="px-8 md:px-12 pb-8">
            <ImagePlaceholder 
              title="Integrated IT Management"
              subtitle="Unified ITSM, ITOM, ITAM & RPA"
              iconPath="/api/placeholder/48/48"
              accentColor="#0047FF"
              bgColor="#F5F8FF"
              height="320px"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AutomationServices;