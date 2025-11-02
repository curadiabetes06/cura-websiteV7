'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface AnimatedUmbrellaProps {
  className?: string;
  size?: number;
}

// Component for mouse-responsive segment highlight
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
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}) {
  const segmentHighlight = useTransform(
    [smoothX, smoothY],
    (values) => {
      const [mx, my] = values as [number, number];
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

// Component for mouse-responsive glow points
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
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}) {
  const glowOpacity = useTransform(
    [smoothX, smoothY],
    (values) => {
      const [mx, my] = values as [number, number];
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
    (values) => {
      const [x, y] = values as [number, number];
      const distance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
      return Math.min(1, distance * 2.5);
    }
  );

  // Transform for center light opacity
  const centerLightOpacity = useTransform(lightIntensity, (v) => 0.6 + v * 0.4);

  if (!isMounted) return null;

  // Top-view umbrella setup
  const centerX = 100;
  const centerY = 100;
  const radius = 80;
  const numSegments = 8;
  const segmentAngle = 360 / numSegments;

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
        {/* Background glow */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={radius + 15}
          fill="#87CDFF"
          opacity="0.3"
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

        {/* Segments */}
        <g>
          {segments.map((segment, i) => (
            <motion.path
              key={i}
              d={segment.path}
              fill="#044D82"
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

        {/* Mouse-responsive glow */}
        <motion.circle
          cx={lightX}
          cy={lightY}
          r={radius + 20}
          fill="#FFDD87"
          opacity={lightIntensity}
          style={{
            pointerEvents: 'none',
            mixBlendMode: 'screen',
            filter: 'blur(5px)',
          }}
        />

        {/* Highlights */}
        {segments.map((segment, i) => (
          <SegmentHighlight
            key={`seg-${i}`}
            centerX={centerX}
            centerY={centerY}
            segmentCenterX={segment.segmentCenterX}
            segmentCenterY={segment.segmentCenterY}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        ))}

        {/* Outer Glow Points */}
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
