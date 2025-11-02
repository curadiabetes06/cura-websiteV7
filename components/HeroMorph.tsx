'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroMorph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    // Create floating particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: ['#044D82', '#87CDFF', '#FFDD87', '#FF9B00'][Math.floor(Math.random() * 4)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Draw morphing gradient blobs
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time) * 100,
        0,
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time) * 100,
        canvas.width * 0.6
      );
      gradient1.addColorStop(0, 'rgba(4, 77, 130, 0.4)');
      gradient1.addColorStop(1, 'rgba(4, 77, 130, 0)');
      ctx.fillStyle = gradient1;
      ctx.beginPath();
      ctx.arc(
        canvas.width * 0.3 + Math.sin(time) * 100,
        canvas.height * 0.3 + Math.cos(time) * 100,
        canvas.width * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 1.2) * 150,
        canvas.height * 0.7 + Math.sin(time * 1.2) * 150,
        0,
        canvas.width * 0.7 + Math.cos(time * 1.2) * 150,
        canvas.height * 0.7 + Math.sin(time * 1.2) * 150,
        canvas.width * 0.5
      );
      gradient2.addColorStop(0, 'rgba(135, 205, 255, 0.3)');
      gradient2.addColorStop(1, 'rgba(135, 205, 255, 0)');
      ctx.fillStyle = gradient2;
      ctx.beginPath();
      ctx.arc(
        canvas.width * 0.7 + Math.cos(time * 1.2) * 150,
        canvas.height * 0.7 + Math.sin(time * 1.2) * 150,
        canvas.width * 0.35,
        0,
        Math.PI * 2
      );
      ctx.fill();

      const gradient3 = ctx.createRadialGradient(
        canvas.width * 0.5 + Math.sin(time * 0.8) * 80,
        canvas.height * 0.2 + Math.cos(time * 0.8) * 80,
        0,
        canvas.width * 0.5 + Math.sin(time * 0.8) * 80,
        canvas.height * 0.2 + Math.cos(time * 0.8) * 80,
        canvas.width * 0.4
      );
      gradient3.addColorStop(0, 'rgba(255, 221, 135, 0.25)');
      gradient3.addColorStop(1, 'rgba(255, 221, 135, 0)');
      ctx.fillStyle = gradient3;
      ctx.beginPath();
      ctx.arc(
        canvas.width * 0.5 + Math.sin(time * 0.8) * 80,
        canvas.height * 0.2 + Math.cos(time * 0.8) * 80,
        canvas.width * 0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx + Math.sin(time + particle.x * 0.01) * 0.5;
        particle.y += particle.vy + Math.cos(time + particle.y * 0.01) * 0.5;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

