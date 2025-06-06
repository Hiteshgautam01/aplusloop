"use client";
import React, { useEffect, useState } from "react";

interface SDLCPhase {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  color: string;
  position: { x: number; y: number };
  angle: number;
}

const SDLCFlowDiagram = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Simple hexagonal layout with minimal color palette
  const sdlcPhases: SDLCPhase[] = [
    {
      id: "planning",
      title: "Planning",
      description: "Requirements & Analysis",
      detailedDescription: "Define project scope, gather requirements, and create project roadmap",
      color: "#3b82f6",
      position: { x: 50, y: 15 },
      angle: 0
    },
    {
      id: "design",
      title: "Design",
      description: "System Architecture",
      detailedDescription: "Create technical specifications, UI/UX designs, and system architecture",
      color: "#3b82f6",
      position: { x: 77, y: 35 },
      angle: 60
    },
    {
      id: "development",
      title: "Development",
      description: "Code Implementation",
      detailedDescription: "Write clean, scalable code following best practices and standards",
      color: "#3b82f6",
      position: { x: 77, y: 65 },
      angle: 120
    },
    {
      id: "testing",
      title: "Testing",
      description: "Quality Assurance",
      detailedDescription: "Comprehensive testing including unit, integration, and user acceptance tests",
      color: "#3b82f6",
      position: { x: 50, y: 85 },
      angle: 180
    },
    {
      id: "deployment",
      title: "Deployment",
      description: "Release & Launch",
      detailedDescription: "Deploy to production environment with monitoring and rollback strategies",
      color: "#3b82f6",
      position: { x: 23, y: 65 },
      angle: 240
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Support & Updates",
      detailedDescription: "Ongoing support, bug fixes, feature enhancements, and performance optimization",
      color: "#3b82f6",
      position: { x: 23, y: 35 },
      angle: 300
    }
  ];

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % sdlcPhases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sdlcPhases.length]);

  // Update container size for responsive calculations
  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById('sdlc-container');
      if (container) {
        setContainerSize({
          width: container.offsetWidth,
          height: container.offsetHeight
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Simple direct paths to avoid hydration issues
  const getConnectionPath = (from: SDLCPhase, to: SDLCPhase) => {
    // Use simple quadratic curves with fixed control points
    const midX = (from.position.x + to.position.x) / 2;
    const midY = (from.position.y + to.position.y) / 2;
    const centerX = 50;
    const centerY = 50;
    
    // Simple control point towards center
    const controlX = midX + (centerX - midX) * 0.3;
    const controlY = midY + (centerY - midY) * 0.3;
    
    return `M ${from.position.x} ${from.position.y} Q ${controlX} ${controlY} ${to.position.x} ${to.position.y}`;
  };

  // Simple arrow using fixed triangular path
  const getArrowPath = (from: SDLCPhase, to: SDLCPhase) => {
    const dx = to.position.x - from.position.x;
    const dy = to.position.y - from.position.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const unitX = dx / length;
    const unitY = dy / length;
    
    // Arrow at end point
    const arrowX = to.position.x - unitX * 7;
    const arrowY = to.position.y - unitY * 7;
    
    const perpX = -unitY * 2;
    const perpY = unitX * 2;
    
    return `M ${to.position.x} ${to.position.y} L ${arrowX + perpX} ${arrowY + perpY} L ${arrowX - perpX} ${arrowY - perpY} Z`;
  };

  const getResponsiveScale = () => {
    if (containerSize.width < 640) return { circle: 0.8, text: 0.85, spacing: 0.9 };
    if (containerSize.width < 768) return { circle: 0.9, text: 0.95, spacing: 0.95 };
    if (containerSize.width < 1024) return { circle: 1, text: 1, spacing: 1 };
    return { circle: 1.1, text: 1.1, spacing: 1.1 };
  };

  const scale = getResponsiveScale();

  // Icons as simple SVG paths
  const getPhaseIcon = (phaseId: string) => {
    const iconProps = {
      className: "w-full h-full",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.5",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const
    };

    switch (phaseId) {
      case "planning":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
        );
      case "design":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );
      case "development":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
        );
      case "testing":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        );
      case "deployment":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
          </svg>
        );
      case "maintenance":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      id="sdlc-container"
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Simple Title */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-medium text-gray-900">
          Development Lifecycle
        </h3>
      </div>

      {/* Clean Diagram Container */}
      <div className="relative w-full aspect-square bg-white rounded-lg border border-gray-100">
        <svg
          className="absolute inset-0 w-full h-full p-4"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Simple Connection Lines */}
          {isMounted && sdlcPhases.map((phase, index) => {
            const nextPhase = sdlcPhases[(index + 1) % sdlcPhases.length];
            const isActive = index === activePhase;
            
            return (
              <g key={`connection-${index}`}>
                <path
                  d={getConnectionPath(phase, nextPhase)}
                  fill="none"
                  stroke={isActive ? "#6366f1" : "#e5e7eb"}
                  strokeWidth={isActive ? "2" : "1"}
                  opacity={isActive ? "1" : "0.4"}
                  style={{ transition: "all 0.4s ease" }}
                />
                
                {/* Simple Arrow */}
                <path
                  d={getArrowPath(phase, nextPhase)}
                  fill={isActive ? "#6366f1" : "#e5e7eb"}
                  opacity={isActive ? "1" : "0.4"}
                  style={{ transition: "all 0.4s ease" }}
                />
              </g>
            );
          })}

          {/* Clean Phase Nodes */}
          {sdlcPhases.map((phase, index) => {
            const isActive = index === activePhase;
            
            return (
              <g key={phase.id}>
                {/* Simple Circle */}
                <circle
                  cx={phase.position.x}
                  cy={phase.position.y}
                  r={isActive ? "6" : "5"}
                  fill={isActive ? "#6366f1" : "#ffffff"}
                  stroke={isActive ? "#6366f1" : "#d1d5db"}
                  strokeWidth="1.5"
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => setActivePhase(index)}
                />
                
                {/* Phase Number */}
                <text
                  x={phase.position.x}
                  y={phase.position.y + 1}
                  textAnchor="middle"
                  fontSize="3"
                  fontWeight="500"
                  fill={isActive ? "white" : "#6b7280"}
                  className="pointer-events-none select-none"
                  style={{ transition: "all 0.3s ease" }}
                >
                  {index + 1}
                </text>
                
                {/* Phase Label */}
                <text
                  x={phase.position.x}
                  y={phase.position.y - 10}
                  textAnchor="middle"
                  fontSize="3"
                  fontWeight={isActive ? "500" : "400"}
                  fill={isActive ? "#6366f1" : "#6b7280"}
                  className="pointer-events-none select-none"
                  style={{ transition: "all 0.3s ease" }}
                >
                  {phase.title}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Minimal Progress */}
        <div className="absolute top-3 right-3 text-xs text-gray-500 font-medium">
          {activePhase + 1}/6
        </div>
      </div>

      {/* Clean Status */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
          <span className="text-sm font-medium text-gray-700">
            {sdlcPhases[activePhase].title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SDLCFlowDiagram;