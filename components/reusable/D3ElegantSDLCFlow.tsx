"use client";
import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";

interface Phase {
  id: string;
  name: string;
  color: string;
  icon: string;
  stage: string;
  description: string;
  metrics: {
    efficiency: number;
    quality: number;
    speed: number;
  };
}

interface D3ElegantSDLCFlowProps {
  className?: string;
  width?: number;
  height?: number;
}

export const D3ElegantSDLCFlow: React.FC<D3ElegantSDLCFlowProps> = ({
  className = "",
  width = 800,
  height = 600,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPhase, setSelectedPhase] = useState<Phase | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const phases: Phase[] = [
    {
      id: "plan",
      name: "Plan",
      color: "#1e3a8a", // Deep professional blue
      icon: "📋",
      stage: "Define",
      description: "Strategic planning and requirement analysis",
      metrics: { efficiency: 85, quality: 92, speed: 78 }
    },
    {
      id: "design",
      name: "Design",
      color: "#6b21a8", // Deep professional purple
      icon: "🎨",
      stage: "Create",
      description: "Architecture design and prototyping",
      metrics: { efficiency: 88, quality: 95, speed: 82 }
    },
    {
      id: "develop",
      name: "Develop",
      color: "#047857", // Deep professional green
      icon: "⚡",
      stage: "Build",
      description: "Code implementation and integration",
      metrics: { efficiency: 90, quality: 87, speed: 95 }
    },
    {
      id: "test",
      name: "Test",
      color: "#b91c1c", // Deep professional red
      icon: "🔍",
      stage: "Verify",
      description: "Quality assurance and validation",
      metrics: { efficiency: 92, quality: 98, speed: 75 }
    },
    {
      id: "deploy",
      name: "Deploy",
      color: "#c2410c", // Deep professional orange
      icon: "🚀",
      stage: "Release",
      description: "Production deployment and monitoring",
      metrics: { efficiency: 87, quality: 93, speed: 88 }
    },
    {
      id: "maintain",
      name: "Maintain",
      color: "#0f766e", // Deep professional teal
      icon: "⚙️",
      stage: "Support",
      description: "Ongoing maintenance and improvements",
      metrics: { efficiency: 89, quality: 90, speed: 85 }
    },
  ];

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.38; // Increased spacing for better visual appeal
    const nodeRadius = 45; // Slightly smaller nodes for better proportion

    // Create gradient definitions
    const defs = svg.append("defs");
    
    phases.forEach((phase, i) => {
      const gradient = defs.append("radialGradient")
        .attr("id", `gradient-${phase.id}`)
        .attr("cx", "50%")
        .attr("cy", "30%");
      
      gradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", phase.color)
        .attr("stop-opacity", 0.9);
      
      gradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", d3.color(phase.color)?.darker(0.3).toString() || phase.color)
        .attr("stop-opacity", 0.7);

      // Connection gradient
      const connectionGradient = defs.append("linearGradient")
        .attr("id", `connection-${phase.id}`)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "100%");
      
      connectionGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", phase.color)
        .attr("stop-opacity", 0.6);
      
      connectionGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", phases[(i + 1) % phases.length].color)
        .attr("stop-opacity", 0.6);
    });

    // Add glow filter
    const filter = defs.append("filter")
      .attr("id", "glow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    filter.append("feGaussianBlur")
      .attr("stdDeviation", "4")
      .attr("result", "coloredBlur");

    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Add drop shadow filter
    const dropShadow = defs.append("filter")
      .attr("id", "dropshadow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");

    dropShadow.append("feDropShadow")
      .attr("dx", "0")
      .attr("dy", "4")
      .attr("stdDeviation", "3")
      .attr("flood-opacity", "0.3");

    // Create main container group
    const mainGroup = svg.append("g")
      .attr("transform", `translate(${centerX}, ${centerY})`);

    // Add subtle background pattern
    const pattern = defs.append("pattern")
      .attr("id", "dots")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 60)
      .attr("height", 60)
      .attr("patternUnits", "userSpaceOnUse");

    pattern.append("circle")
      .attr("cx", 30)
      .attr("cy", 30)
      .attr("r", 1)
      .attr("fill", "#f8fafc")
      .attr("opacity", 0.4);

    svg.append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "url(#dots)")
      .attr("opacity", 0.8);

    // Calculate phase positions
    const phasePositions = phases.map((_, i) => {
      const angle = (i * 2 * Math.PI) / phases.length - Math.PI / 2;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        angle
      };
    });

    // Add animated connection paths
    const connections = mainGroup.append("g").attr("class", "connections");
    
    phases.forEach((phase, i) => {
      const nextIndex = (i + 1) % phases.length;
      const start = phasePositions[i];
      const end = phasePositions[nextIndex];
      
      // Create elegant curved path with gentle curves for wider spacing
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      // Use center point for consistent, elegant curves with more space
      const controlX = midX * 0.2;
      const controlY = midY * 0.2;

      const pathData = `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;

      const path = connections.append("path")
        .attr("d", pathData)
        .attr("fill", "none")
        .attr("stroke", `url(#connection-${phase.id})`)
        .attr("stroke-width", 2)
        .attr("opacity", 0.65)
        .attr("filter", "url(#glow)")
        .style("cursor", "pointer");

      // Animate path drawing
      const pathLength = path.node()?.getTotalLength() || 0;
      path
        .attr("stroke-dasharray", pathLength)
        .attr("stroke-dashoffset", pathLength)
        .transition()
        .duration(1500)
        .delay(i * 200)
        .ease(d3.easeExpOut)
        .attr("stroke-dashoffset", 0);

      // Add flowing particles
      const particle = connections.append("circle")
        .attr("r", 4)
        .attr("fill", phase.color)
        .attr("filter", "url(#glow)")
        .attr("opacity", 0);

      const animateParticle = () => {
        particle
          .attr("opacity", 1)
          .transition()
          .duration(3000)
          .ease(d3.easeLinear)
          .attrTween("transform", () => {
            return (t: number) => {
              const point = path.node()?.getPointAtLength(t * pathLength);
              return point ? `translate(${point.x}, ${point.y})` : "";
            };
          })
          .transition()
          .duration(100)
          .attr("opacity", 0)
          .on("end", () => {
            setTimeout(animateParticle, Math.random() * 2000 + 1000);
          });
      };

      setTimeout(animateParticle, i * 500 + 2000);
    });

    // Add center hub
    const centerHub = mainGroup.append("g").attr("class", "center-hub");

    // Outer rotating rings with better spacing
    [85, 105, 125].forEach((r, i) => {
      centerHub.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", r)
        .attr("fill", "none")
        .attr("stroke", "#e2e8f0")
        .attr("stroke-width", 0.8)
        .attr("stroke-dasharray", `${i + 2} ${(i + 1) * 5}`)
        .attr("opacity", 0.25 - i * 0.08)
        .transition()
        .duration((i + 1) * 30000)
        .ease(d3.easeLinear)
        .attrTween("transform", () => {
          return (t: number) => `rotate(${t * (i % 2 === 0 ? 360 : -360)})`;
        })
        .on("end", function repeat() {
          d3.select(this).transition()
            .duration((i + 1) * 30000)
            .ease(d3.easeLinear)
            .attrTween("transform", () => {
              return (t: number) => `rotate(${t * (i % 2 === 0 ? 360 : -360)})`;
            })
            .on("end", repeat);
        });
    });

    // Central circle with refined colors
    centerHub.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 65)
      .attr("fill", "rgba(30, 58, 138, 0.08)")
      .attr("stroke", "#1e3a8a")
      .attr("stroke-width", 1.5)
      .attr("filter", "url(#dropshadow)")
      .transition()
      .duration(1000)
      .attr("r", 65)
      .attr("opacity", 1);

    // Center text
    const centerText = centerHub.append("g").attr("class", "center-text");
    
    centerText.append("text")
      .attr("text-anchor", "middle")
      .attr("y", -12)
      .attr("font-size", "16")
      .attr("font-weight", "600")
      .attr("fill", "#111827")
      .attr("letter-spacing", "0.5px")
      .text("Continuous")
      .attr("opacity", 0)
      .transition()
      .delay(1000)
      .duration(500)
      .attr("opacity", 1);

    centerText.append("text")
      .attr("text-anchor", "middle")
      .attr("y", 8)
      .attr("font-size", "16")
      .attr("font-weight", "600")
      .attr("fill", "#111827")
      .attr("letter-spacing", "0.5px")
      .text("Integration")
      .attr("opacity", 0)
      .transition()
      .delay(1200)
      .duration(500)
      .attr("opacity", 1);

    centerText.append("text")
      .attr("text-anchor", "middle")
      .attr("y", 26)
      .attr("font-size", "11")
      .attr("fill", "#6b7280")
      .attr("letter-spacing", "0.3px")
      .text("& Delivery")
      .attr("opacity", 0)
      .transition()
      .delay(1400)
      .duration(500)
      .attr("opacity", 1);

    // Add phase nodes
    const nodes = mainGroup.append("g").attr("class", "nodes");

    phases.forEach((phase, i) => {
      const position = phasePositions[i];
      
      const nodeGroup = nodes.append("g")
        .attr("class", "node")
        .attr("transform", `translate(${position.x}, ${position.y})`)
        .style("cursor", "pointer")
        .on("click", (event) => {
          setSelectedPhase(phase);
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 500);
        })
        .on("mouseenter", function() {
          d3.select(this).select(".main-circle")
            .transition()
            .duration(200)
            .attr("r", nodeRadius + 8)
            .attr("filter", "url(#glow)");
          
          d3.select(this).select(".icon")
            .transition()
            .duration(200)
            .attr("font-size", "28");
        })
        .on("mouseleave", function() {
          d3.select(this).select(".main-circle")
            .transition()
            .duration(200)
            .attr("r", nodeRadius)
            .attr("filter", "url(#dropshadow)");
          
          d3.select(this).select(".icon")
            .transition()
            .duration(200)
            .attr("font-size", "24");
        });

      // Pulse ring
      nodeGroup.append("circle")
        .attr("class", "pulse-ring")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", nodeRadius)
        .attr("fill", "none")
        .attr("stroke", phase.color)
        .attr("stroke-width", 2)
        .attr("opacity", 0.6)
        .transition()
        .duration(2000)
        .delay(i * 300)
        .ease(d3.easeExpOut)
        .attr("r", nodeRadius + 18)
        .attr("opacity", 0)
        .on("end", function repeat() {
          d3.select(this)
            .attr("r", nodeRadius)
            .attr("opacity", 0.6)
            .transition()
            .duration(2000)
            .ease(d3.easeExpOut)
            .attr("r", nodeRadius + 18)
            .attr("opacity", 0)
            .on("end", repeat);
        });

      // Main circle
      nodeGroup.append("circle")
        .attr("class", "main-circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 0)
        .attr("fill", `url(#gradient-${phase.id})`)
        .attr("stroke", "white")
        .attr("stroke-width", 3)
        .attr("filter", "url(#dropshadow)")
        .transition()
        .duration(800)
        .delay(i * 150)
        .ease(d3.easeBackOut.overshoot(1.4))
        .attr("r", nodeRadius);

      // Icon
      nodeGroup.append("text")
        .attr("class", "icon")
        .attr("text-anchor", "middle")
        .attr("y", -5)
        .attr("font-size", "24")
        .text(phase.icon)
        .attr("opacity", 0)
        .transition()
        .delay(i * 150 + 400)
        .duration(300)
        .attr("opacity", 1);

      // Phase name with better spacing
      nodeGroup.append("text")
        .attr("class", "phase-name")
        .attr("text-anchor", "middle")
        .attr("y", 16)
        .attr("font-size", "13")
        .attr("font-weight", "600")
        .attr("fill", "#111827")
        .attr("letter-spacing", "0.3px")
        .text(phase.name)
        .attr("opacity", 0)
        .transition()
        .delay(i * 150 + 500)
        .duration(300)
        .attr("opacity", 1);

      // Stage label with refined positioning
      nodeGroup.append("text")
        .attr("class", "stage-label")
        .attr("text-anchor", "middle")
        .attr("y", 32)
        .attr("font-size", "9")
        .attr("fill", "#6b7280")
        .attr("letter-spacing", "0.2px")
        .text(phase.stage)
        .attr("opacity", 0)
        .transition()
        .delay(i * 150 + 600)
        .duration(300)
        .attr("opacity", 1);

      // Progress arc with refined spacing
      const arc = d3.arc()
        .innerRadius(nodeRadius + 6)
        .outerRadius(nodeRadius + 9)
        .startAngle(0)
        .endAngle(0);

      const progressArc = nodeGroup.append("path")
        .attr("class", "progress-arc")
        .attr("d", arc as any)
        .attr("fill", phase.color)
        .attr("opacity", 0.8);

      // Animate progress arc
      progressArc
        .transition()
        .delay(i * 150 + 1000)
        .duration(1500)
        .ease(d3.easeExpOut)
        .attrTween("d", () => {
          const interpolate = d3.interpolate(0, Math.PI * 1.5);
          return (t: number) => {
            const endAngle = interpolate(t);
            return d3.arc()
              .innerRadius(nodeRadius + 6)
              .outerRadius(nodeRadius + 9)
              .startAngle(0)
              .endAngle(endAngle)() as string;
          };
        });
    });

    // Add floating particles
    const particles = svg.append("g").attr("class", "particles");
    
    for (let i = 0; i < 20; i++) {
      const particle = particles.append("circle")
        .attr("r", Math.random() * 3 + 1)
        .attr("fill", phases[Math.floor(Math.random() * phases.length)].color)
        .attr("opacity", 0.4)
        .attr("cx", Math.random() * width)
        .attr("cy", Math.random() * height);

      const animateFloat = () => {
        particle
          .transition()
          .duration(Math.random() * 10000 + 5000)
          .ease(d3.easeLinear)
          .attr("cx", Math.random() * width)
          .attr("cy", Math.random() * height)
          .attr("opacity", Math.random() * 0.6 + 0.2)
          .on("end", animateFloat);
      };

      animateFloat();
    }

  }, [width, height, phases]);

  return (
    <div className={`relative w-full h-full ${className}`} ref={containerRef}>
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-lg"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Main SVG */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
      />

      {/* Phase details panel */}
      {selectedPhase && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="absolute top-4 right-4 bg-white rounded-xl shadow-2xl p-6 max-w-sm z-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${selectedPhase.color}20`, border: `2px solid ${selectedPhase.color}`}}
            >
              {selectedPhase.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-800">{selectedPhase.name}</h3>
              <p className="text-sm text-gray-500">{selectedPhase.stage}</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{selectedPhase.description}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Efficiency</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedPhase.metrics.efficiency}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                <span className="text-sm font-medium">{selectedPhase.metrics.efficiency}%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Quality</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedPhase.metrics.quality}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  />
                </div>
                <span className="text-sm font-medium">{selectedPhase.metrics.quality}%</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Speed</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedPhase.metrics.speed}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  />
                </div>
                <span className="text-sm font-medium">{selectedPhase.metrics.speed}%</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setSelectedPhase(null)}
            className="absolute top-2 right-2 w-6 h-6 text-gray-400 hover:text-gray-600 flex items-center justify-center"
          >
            ×
          </button>
        </motion.div>
      )}

      {/* Bottom metrics */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      >
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-gray-700 font-medium">Real-time Flow</span>
        </div>
        <div className="text-sm text-gray-400">•</div>
        <div className="text-sm text-gray-700 font-medium">6 Stage Process</div>
        <div className="text-sm text-gray-400">•</div>
        <div className="text-sm text-gray-700 font-medium">Interactive Metrics</div>
      </motion.div>
    </div>
  );
};