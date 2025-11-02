'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface AnimatedUmbrellaProps {
  className?: string;
  size?: number;
}

// Separate component for mouse-responsive segment highlight
function SegmentHighlight({ 
  centerX, 
  centerY, 
  segmentCenterX, 
  segmentCenterY,
  smoothX,
  smoothY 
}: {
  centerX: number;
  centerY: number;
  segmentCenterX: number;
  segmentCenterY: number;
  smoothX: any;
  smoothY: any;
}) {
  const segmentHighlight = useTransform(
    [smoothX, smoothY],
    ([mx, my]) => {
      const segNormX = segmentCenterX / 200;
      const segNormY = segmentCenterY / 200;
      const distance = Math.sqrt(
        Math.pow(mx - segNormX, 2) + 
        Math.pow(my - segNormY, 2)
      );
      return Math.max(0, 0.8 - distance * 4);
    }
  );

  return (
    <motion.circle
      cx={segmentCenterX}
      cy={segmentCenterY}
      r="10"
      fill="#FFDD87"
      opacity={segmentHighlight}
      style={{
        pointerEvents: 'none',
        filter: 'blur(4px)',
      }}
    />
  );
}

// Separate component for mouse-responsive glow points
function GlowPoint({ 
  x, 
  y, 
  index,
  smoothX,
  smoothY 
}: {
  x: number;
  y: number;
  index: number;
  smoothX: any;
  smoothY: any;
}) {
  const glowOpacity = useTransform(
    [smoothX, smoothY],
    ([mx, my]) => {
      const pointNormX = x / 200;
      const pointNormY = y / 200;
      const distance = Math.sqrt(
        Math.pow(mx - pointNormX, 2) + 
        Math.pow(my - pointNormY, 2)
      );
      return Math.max(0.3, 0.9 - distance * 2.5);
    }
  );

  return (
    <motion.circle
      cx={x}
      cy={y}
      r="7"
      fill="#87CDFF"
      opacity={glowOpacity}
      animate={{
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 2 + index * 0.2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.15,
      }}
      style={{
        filter: 'blur(3px)',
      }}
    />
  );
}

export default function AnimatedUmbrella({ 
  className = '', 
  size = 200 
}: AnimatedUmbrellaProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Mouse tracking for light effects
  useEffect(() => {
    if (!svgRef.current || !isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ 
          x: Math.max(0, Math.min(1, x)), 
          y: Math.max(0, Math.min(1, y)) 
        });
      }
    };

    const svg = svgRef.current;
    svg.addEventListener('mousemove', handleMouseMove);
    return () => svg.removeEventListener('mousemove', handleMouseMove);
  }, [isMounted]);

  // Smooth mouse following
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Calculate light position from mouse
  const lightX = useTransform(smoothX, (x) => 100 + (x - 0.5) * 50);
  const lightY = useTransform(smoothY, (y) => 100 + (y - 0.5) * 50);
  
  // Calculate intensity based on distance from center
  const lightIntensity = useTransform(
    [smoothX, smoothY],
    ([x, y]) => {
      const distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
      return Math.min(1, distance * 2.5);
    }
  );

  // Transform for center light opacity
  const centerLightOpacity = useTransform(lightIntensity, (v) => 0.6 + v * 0.4);

  if (!isMounted) return null;

  // Top-view umbrella: circular with segments
  const centerX = 100;
  const centerY = 100;
  const radius = 80;
  const numSegments = 8;
  const segmentAngle = 360 / numSegments;

  // Create segments (top view - looking down)
  const segments = Array.from({ length: numSegments }, (_, i) => {
    const startAngle = (i * segmentAngle - 90) * (Math.PI / 180);
    const endAngle = ((i + 1) * segmentAngle - 90) * (Math.PI / 180);
    
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    return {
      path: `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`,
      index: i,
      angle: (i * segmentAngle),
      centerAngle: ((i + 0.5) * segmentAngle - 90) * (Math.PI / 180),
      x2,
      y2,
      segmentCenterX: centerX + (radius * 0.6) * Math.cos(((i + 0.5) * segmentAngle - 90) * (Math.PI / 180)),
      segmentCenterY: centerY + (radius * 0.6) * Math.sin(((i + 0.5) * segmentAngle - 90) * (Math.PI / 180)),
      glowX: centerX + (radius + 25) * Math.cos((i * segmentAngle - 90) * (Math.PI / 180)),
      glowY: centerY + (radius + 25) * Math.sin((i * segmentAngle - 90) * (Math.PI / 180)),
    };
  });

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="relative"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Radial gradient for illuminated effect */}
          <radialGradient id="umbrellaRadialGrad" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#87CDFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#044D82" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#044D82" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1e3a5f" stopOpacity="0.8" />
          </radialGradient>

          {/* Dynamic light gradient that follows mouse */}
          <radialGradient id="mouseLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFDD87" stopOpacity="0.9" />
            <stop offset="25%" stopColor="#87CDFF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#044D82" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="umbrellaGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
            <feOffset in="blur" dx="0" dy="0" result="offsetBlur" />
            <feMerge>
              <feMergeNode in="offsetBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Outer glow */}
          <filter id="outerGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow layer */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius + 15}
          fill="url(#umbrellaRadialGrad)"
          opacity="0.3"
          filter="url(#outerGlow)"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Umbrella Canopy - Top View Segments */}
        <g filter="url(#umbrellaGlow)">
          {segments.map((segment, i) => (
            <motion.path
              key={i}
              d={segment.path}
              fill="url(#umbrellaRadialGrad)"
              initial={{ opacity: 0.85 }}
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.15,
              }}
              style={{
                transformOrigin: `${centerX}px ${centerY}px`,
              }}
            />
          ))}
        </g>

        {/* Mouse-responsive light overlay - follows cursor */}
        <motion.circle
          cx={lightX}
          cy={lightY}
          r={radius + 20}
          fill="url(#mouseLightGrad)"
          opacity={lightIntensity}
          style={{
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />

        {/* Segment dividers (points/ribs) - Top view with illumination */}
        {segments.map((segment, i) => {
          return (
            <motion.g key={`rib-${i}`}>
              {/* Rib line */}
              <motion.line
                x1={centerX}
                y1={centerY}
                x2={segment.x2}
                y2={segment.y2}
                stroke="rgba(255, 255, 255, 0.5)"
                strokeWidth="2"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
              />
              {/* Highlight point at end of rib */}
              <motion.circle
                cx={segment.x2}
                cy={segment.y2}
                r="5"
                fill="#87CDFF"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
              {/* Mouse-responsive highlight on segment */}
              <SegmentHighlight
                centerX={centerX}
                centerY={centerY}
                segmentCenterX={segment.segmentCenterX}
                segmentCenterY={segment.segmentCenterY}
                smoothX={smoothX}
                smoothY={smoothY}
              />
            </motion.g>
          );
        })}

        {/* Center hub - Illuminated and responsive */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r="14"
          fill="url(#mouseLightGrad)"
          filter="url(#umbrellaGlow)"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx={lightX}
          cy={lightY}
          r="8"
          fill="#FFDD87"
          opacity={centerLightOpacity}
          style={{
            pointerEvents: 'none',
            filter: 'blur(3px)',
          }}
        />

        {/* Rotating outer ring - illuminated */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius + 5}
          fill="none"
          stroke="url(#mouseLightGrad)"
          strokeWidth="3"
          opacity="0.6"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          style={{
            transformOrigin: `${centerX}px ${centerY}px`,
          }}
        />

        {/* Outer glow points - mouse responsive */}
        {segments.map((segment, i) => (
          <GlowPoint
            key={`glow-${i}`}
            x={segment.glowX}
            y={segment.glowY}
            index={i}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        ))}
      </svg>
    </motion.div>
  );
}
