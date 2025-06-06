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

  // Clean, modern icons
  const getPhaseIcon = (phaseId: string) => {
    const iconProps = {
      className: "w-full h-full",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const
    };

    switch (phaseId) {
      case "planning":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10,9 9,9 8,9"/>
          </svg>
        );
      case "design":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M12 19l7-7 3 3-7 7-3-3z"/>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
            <path d="M2 2l7.586 7.586"/>
            <circle cx="11" cy="11" r="2"/>
          </svg>
        );
      case "development":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        );
      case "testing":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        );
      case "deployment":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          </svg>
        );
      case "maintenance":
        return (
          <svg {...iconProps} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
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
                  r={isActive ? "7" : "6"}
                  fill={isActive ? "#6366f1" : "#ffffff"}
                  stroke={isActive ? "#6366f1" : "#d1d5db"}
                  strokeWidth="1.5"
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => setActivePhase(index)}
                />
                
                {/* Phase Icon */}
                {isMounted && (
                  <g 
                    transform={`translate(${phase.position.x - 2.5}, ${phase.position.y - 2.5}) scale(0.42)`}
                  >
                    <foreignObject width="12" height="12" className="pointer-events-none">
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ 
                          color: isActive ? "white" : "#6366f1",
                          transition: "all 0.3s ease"
                        }}
                      >
                        {getPhaseIcon(phase.id)}
                      </div>
                    </foreignObject>
                  </g>
                )}
                
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