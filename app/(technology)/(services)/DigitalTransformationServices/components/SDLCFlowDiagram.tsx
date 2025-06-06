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

  // Perfectly positioned hexagonal layout with better spacing
  const sdlcPhases: SDLCPhase[] = [
    {
      id: "planning",
      title: "Planning",
      description: "Requirements & Analysis",
      detailedDescription: "Define project scope, gather requirements, and create project roadmap",
      color: "#2563eb",
      position: { x: 50, y: 15 },
      angle: 0
    },
    {
      id: "design",
      title: "Design",
      description: "System Architecture",
      detailedDescription: "Create technical specifications, UI/UX designs, and system architecture",
      color: "#0891b2",
      position: { x: 77, y: 35 },
      angle: 60
    },
    {
      id: "development",
      title: "Development",
      description: "Code Implementation",
      detailedDescription: "Write clean, scalable code following best practices and standards",
      color: "#059669",
      position: { x: 77, y: 65 },
      angle: 120
    },
    {
      id: "testing",
      title: "Testing",
      description: "Quality Assurance",
      detailedDescription: "Comprehensive testing including unit, integration, and user acceptance tests",
      color: "#dc2626",
      position: { x: 50, y: 85 },
      angle: 180
    },
    {
      id: "deployment",
      title: "Deployment",
      description: "Release & Launch",
      detailedDescription: "Deploy to production environment with monitoring and rollback strategies",
      color: "#7c3aed",
      position: { x: 23, y: 65 },
      angle: 240
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Support & Updates",
      detailedDescription: "Ongoing support, bug fixes, feature enhancements, and performance optimization",
      color: "#ea580c",
      position: { x: 23, y: 35 },
      angle: 300
    }
  ];

  useEffect(() => {
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

  // Create smooth curved paths between phases
  const getConnectionPath = (from: SDLCPhase, to: SDLCPhase) => {
    const radius = 8; // Offset from node edge
    const fromAngle = from.angle * (Math.PI / 180);
    const toAngle = to.angle * (Math.PI / 180);
    
    // Calculate points on circle edge
    const fromX = from.position.x + radius * Math.cos(fromAngle);
    const fromY = from.position.y + radius * Math.sin(fromAngle);
    const toX = to.position.x - radius * Math.cos(toAngle);
    const toY = to.position.y - radius * Math.sin(toAngle);
    
    // Create curved path towards center
    const centerX = 50;
    const centerY = 50;
    const controlOffset = 0.6;
    
    const controlX1 = fromX + (centerX - fromX) * controlOffset;
    const controlY1 = fromY + (centerY - fromY) * controlOffset;
    const controlX2 = toX + (centerX - toX) * controlOffset;
    const controlY2 = toY + (centerY - toY) * controlOffset;
    
    return `M ${fromX} ${fromY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${toX} ${toY}`;
  };

  // Get arrow marker path for direction
  const getArrowPath = (from: SDLCPhase, to: SDLCPhase) => {
    const radius = 8;
    const toAngle = to.angle * (Math.PI / 180);
    const arrowX = to.position.x - radius * Math.cos(toAngle);
    const arrowY = to.position.y - radius * Math.sin(toAngle);
    
    // Calculate arrow direction
    const dx = to.position.x - from.position.x;
    const dy = to.position.y - from.position.y;
    const angle = Math.atan2(dy, dx);
    
    const arrowLength = 2.5;
    const arrowWidth = 1.5;
    
    const tip = { x: arrowX, y: arrowY };
    const left = {
      x: arrowX - arrowLength * Math.cos(angle - Math.PI / 6),
      y: arrowY - arrowLength * Math.sin(angle - Math.PI / 6)
    };
    const right = {
      x: arrowX - arrowLength * Math.cos(angle + Math.PI / 6),
      y: arrowY - arrowLength * Math.sin(angle + Math.PI / 6)
    };
    
    return `M ${tip.x} ${tip.y} L ${left.x} ${left.y} L ${right.x} ${right.y} Z`;
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
      className="relative w-full max-w-2xl mx-auto"
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
          SDLC Flow
        </h3>
        <p className="text-sm text-gray-600">
          Software Development Lifecycle
        </p>
      </div>

      {/* Main Diagram Container */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200/50">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Connection Lines with Arrows */}
          {sdlcPhases.map((phase, index) => {
            const nextPhase = sdlcPhases[(index + 1) % sdlcPhases.length];
            const isActive = index === activePhase;
            
            return (
              <g key={`connection-${index}`}>
                {/* Background Connection */}
                <path
                  d={getConnectionPath(phase, nextPhase)}
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                
                {/* Active Connection */}
                <path
                  d={getConnectionPath(phase, nextPhase)}
                  fill="none"
                  stroke={isActive ? phase.color : "#d1d5db"}
                  strokeWidth={isActive ? "2.5" : "1.5"}
                  opacity={isActive ? "1" : "0.6"}
                  style={{
                    transition: "all 0.6s ease"
                  }}
                />
                
                {/* Directional Arrow */}
                <path
                  d={getArrowPath(phase, nextPhase)}
                  fill={isActive ? phase.color : "#d1d5db"}
                  opacity={isActive ? "1" : "0.6"}
                  style={{
                    transition: "all 0.6s ease"
                  }}
                />
                
                {/* Flow Animation Dot */}
                {isActive && (
                  <circle
                    r="1.2"
                    fill={phase.color}
                    opacity="0.8"
                  >
                    <animateMotion
                      dur="2.5s"
                      repeatCount="indefinite"
                      path={getConnectionPath(phase, nextPhase)}
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Phase Nodes */}
          {sdlcPhases.map((phase, index) => {
            const isActive = index === activePhase;
            const baseRadius = 7;
            const activeRadius = 8.5;
            
            return (
              <g key={phase.id}>
                {/* Outer Ring for Active Phase */}
                {isActive && (
                  <circle
                    cx={phase.position.x}
                    cy={phase.position.y}
                    r={activeRadius + 2}
                    fill="none"
                    stroke={phase.color}
                    strokeWidth="0.5"
                    opacity="0.4"
                    className="animate-ping"
                  />
                )}
                
                {/* Main Node Circle */}
                <circle
                  cx={phase.position.x}
                  cy={phase.position.y}
                  r={isActive ? activeRadius : baseRadius}
                  fill={isActive ? phase.color : "#ffffff"}
                  stroke={phase.color}
                  strokeWidth={isActive ? "2.5" : "2"}
                  className="transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{
                    filter: isActive ? `drop-shadow(0 0 8px ${phase.color}30)` : "drop-shadow(0 1px 3px rgba(0,0,0,0.1))"
                  }}
                  onClick={() => setActivePhase(index)}
                />
                
                {/* Icon Container */}
                <g 
                  transform={`translate(${phase.position.x - 2.5}, ${phase.position.y - 2.5}) scale(${isActive ? 0.65 : 0.55})`}
                  style={{ transition: "all 0.5s ease" }}
                >
                  <foreignObject width="5" height="5" className="pointer-events-none">
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      style={{ 
                        color: isActive ? "white" : phase.color,
                        transition: "all 0.5s ease"
                      }}
                    >
                      {getPhaseIcon(phase.id)}
                    </div>
                  </foreignObject>
                </g>
                
                {/* Phase Title */}
                <text
                  x={phase.position.x}
                  y={phase.position.y - (isActive ? 13 : 11)}
                  textAnchor="middle"
                  fontSize={isActive ? "4" : "3.5"}
                  fontWeight={isActive ? "600" : "500"}
                  fill={isActive ? phase.color : "#374151"}
                  className="pointer-events-none select-none"
                  style={{ 
                    transition: "all 0.5s ease"
                  }}
                >
                  {phase.title}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Progress Indicator */}
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 shadow-sm">
          <div className="flex items-center space-x-1.5">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 rounded-full"
                style={{ width: `${((activePhase + 1) / sdlcPhases.length) * 100}%` }}
              />
            </div>
            <span className="text-xs font-medium text-gray-600">
              {activePhase + 1}/{sdlcPhases.length}
            </span>
          </div>
        </div>
      </div>

      {/* Active Phase Details - Simplified */}
      <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-3">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-500"
            style={{ backgroundColor: sdlcPhases[activePhase].color }}
          >
            <div className="w-5 h-5">
              {getPhaseIcon(sdlcPhases[activePhase].id)}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-base">
              {sdlcPhases[activePhase].title}
            </h4>
            <p className="text-sm text-gray-600">
              {sdlcPhases[activePhase].description}
            </p>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {activePhase + 1}/{sdlcPhases.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SDLCFlowDiagram;