"use client";

import React from 'react';
import ImageTextSection from '@/components/reusable/ImageTextSection';
import ImagePlaceholder from '@/components/reusable/ImagePlaceholder';
import TestingTypes from './TestingTypes';

const Vapt = () => {
  // Shield with lock icon path for security-related placeholder
  const securityIconPath = "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z";
  
  // Database shield icon for vulnerability management
  const scannerIconPath = "M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-3 2H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm0 6H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z";
  
  // Checklist icon for benefits section
  const checklistIconPath = "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11";
  
  // Code/Terminal icon for penetration testing
  const hackingIconPath = "M8 9l3 3-3 3M16 9l-3 3 3 3M3 8v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z";
  
  return (
    <div className="space-y-8 md:space-y-16">
      {/* First Section - VAPT Introduction - NO BACKGROUND */}
      <ImageTextSection
        title="VULNERABILITY ASSESSMENTS & PENETRATION TESTING (VAPT)"
        content={
          <p className="text-base">
            Identifying risks and vulnerabilities in complete networks, systems, hardware, 
            applications, and other components of the IT ecosystem is referred to as 
            vulnerability assessment. Security teams and other stakeholders can examine 
            and prioritize risks for potential remediation in the right context using the 
            data from vulnerability assessments.
          </p>
        }
        borderColor="blue"
        borderStyle="glow"
        badge="Cybersecurity Services"
        imagePosition="left"
        textContentStyle="bordered"
        decorative={true}
        backgroundColor="transparent"
        backgroundStyle="none"
        customImage={
          <ImagePlaceholder 
            title="VAPT Solutions"
            subtitle="Protect your digital assets"
            iconPath={securityIconPath}
            accentColor="#1d4ed8"
            bgColor="#e0f2fe"
            height="100%"
          />
        }
      />

      {/* Second Section - Vulnerability Management - WITH BACKGROUND */}
      <ImageTextSection
        title="VULNERABILITY MANAGEMENT LIFECYCLE"
        content={
          <p className="text-base">
            In order to protect systems and data from unauthorized access and data breaches, 
            vulnerability assessments are a crucial part of the vulnerability management and 
            IT risk management lifecycles. In an attempt to discover threats and weaknesses 
            inside an organization's IT infrastructure that potentially cause vulnerabilities 
            or risk exposures, vulnerability assessments often make use of tools like 
            vulnerability scanners.
          </p>
        }
        borderColor="blue"
        borderStyle="layered"
        badge="Risk Management"
        imagePosition="right"
        textContentStyle="minimal"
        decorative={true}
        backgroundColor="blue"
        backgroundStyle="gradient"
        customImage={
          <ImagePlaceholder 
            title="Vulnerability Scanning"
            subtitle="Detect & Analyze Threats"
            iconPath={scannerIconPath}
            accentColor="#2563eb"
            bgColor="#dbeafe"
            height="100%"
          />
        }
      />

      {/* Third Section - Benefits with Bullet Points - NO BACKGROUND */}
      <ImageTextSection
        title="WHY VULNERABILITY ASSESSMENTS PLAY AN IMPORTANT ROLE"
        content={
          <div className="space-y-3">
            <p className="text-base mb-4">
              Security teams can detect and address security threats and risks by using a standardized, 
              thorough, and understandable approach with the help of vulnerability assessments. 
              This offers various advantages for a company:
            </p>
            <div className="pl-2 border-l-4 border-blue-400">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Threats and gaps in IT security are consistently and proactively identified.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Remediation actions to close any gaps and protect sensitive systems and information.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Meet cybersecurity compliance and regulatory needs for areas like HIPAA, NIST, ISO Standards, and PCI DSS.</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Protect against data breaches and other unauthorized access.</span>
                </li>
              </ul>
            </div>
          </div>
        }
        borderColor="blue"
        borderStyle="frosted"
        badge="Key Benefits"
        imagePosition="left"
        textContentStyle="card"
        decorative={true}
        backgroundColor="transparent"
        backgroundStyle="none"
        customImage={
          <ImagePlaceholder 
            title="Assessment Benefits"
            subtitle="Proactive Security Approach"
            iconPath={checklistIconPath}
            accentColor="#3b82f6"
            bgColor="#bfdbfe"
            height="100%"
          />
        }
      />

      {/* Fourth Section - Penetration Testing - WITH BACKGROUND */}
      <ImageTextSection
        title="PENETRATION TESTING"
        content={
          <p className="text-base">
            Offense is equally crucial to defending against cyber security attacks as is defense. 
            You may evaluate the efficacy of your present cyber security measures, spot potential 
            improvement areas, and keep up with new threats by simulating attacks on your systems. 
            This is accomplished by penetration testing, a procedure in which a committed group of 
            cyber security experts employs all available tools to identify vulnerabilities in systems, 
            procedures, and individuals that could allow unwanted access.
          </p>
        }
        borderColor="blue"
        borderStyle="neon"
        badge="Offensive Security"
        imagePosition="right"
        textContentStyle="highlighted"
        decorative={true}
        backgroundColor="blue"
        backgroundStyle="pattern"
        customImage={
          <ImagePlaceholder 
            title="Ethical Hacking"
            subtitle="Simulate Real-World Attacks"
            iconPath={hackingIconPath}
            accentColor="#1d4ed8"
            bgColor="#dbeafe"
            height="100%"
          />
        }
      />
      
      {/* Fifth Section - Custom Testing Approach - NO BACKGROUND */}
      <ImageTextSection
        title="CUSTOM PENETRATION TESTING APPROACH"
        content={
          <div className="space-y-4">
            <p className="text-base">
              At A+loop, we use a consistent approach to penetration testing that includes web applications, 
              cloud infrastructure, internal and external networks, and social engineering. While we sit on 
              the blue team side to monitor and assess the response, our cyber security specialists pretend 
              to be the red team attempting the attacks.
            </p>
            <p className="text-base">
              Our penetration testing projects are created specifically for you and your environment's 
              requirements. You will receive testing reports that list all the vulnerabilities that were 
              discovered, their importance, potential consequences, and suggested remedies.
            </p>
          </div>
        }
        borderColor="blue"
        borderStyle="double"
        badge="Tailored Solutions"
        imagePosition="left"
        textContentStyle="bordered"
        decorative={true}
        backgroundColor="transparent"
        backgroundStyle="none"
        customImage={
          <ImagePlaceholder 
            title="Customized Testing"
            subtitle="Tailored to Your Environment"
            iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            accentColor="#1e40af"
            bgColor="#eff6ff"
            height="100%"
          />
        }
      />
      
      {/* TestingTypes component - no background wrapper */}
      <TestingTypes />
    </div>
  );
};

export default Vapt;