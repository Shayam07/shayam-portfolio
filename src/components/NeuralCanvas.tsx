"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  layer: number;
}

interface Pulse {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
}

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    // Mouse coordinates
    let mouseX = -1000;
    let mouseY = -1000;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      isHovered = false;
    };

    canvas.parentElement?.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // Initialize nodes
    const nodeCount = Math.min(Math.floor((width * height) / 16000), 75);
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];

    const initNodes = () => {
      nodes = [];
      const count = Math.min(Math.floor((width * height) / 16000), 75);
      for (let i = 0; i < count; i++) {
        const baseRadius = Math.random() * 1.6 + 1.2;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: baseRadius,
          baseRadius,
          pulsePhase: Math.random() * Math.PI * 2,
          layer: Math.floor(Math.random() * 3) // Depth perception
        });
      }
    };

    initNodes();

    // Pulse spawn timer
    let lastPulseTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Spawn pulses along connected synapses
      if (time - lastPulseTime > 320 && nodes.length > 2) {
        lastPulseTime = time;
        const i1 = Math.floor(Math.random() * nodes.length);
        // Find a nearby node
        let nearestDist = Infinity;
        let nearestIdx = -1;
        for (let j = 0; j < nodes.length; j++) {
          if (j === i1) continue;
          const dx = nodes[i1].x - nodes[j].x;
          const dy = nodes[i1].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130 && dist < nearestDist) {
            nearestDist = dist;
            nearestIdx = j;
          }
        }
        if (nearestIdx !== -1 && pulses.length < 16) {
          pulses.push({
            sourceIndex: i1,
            targetIndex: nearestIdx,
            progress: 0,
            speed: 0.018 + Math.random() * 0.02
          });
        }
      }

      // Update and draw connections
      const maxDistance = 140;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];

        // Organic drift
        n1.x += n1.vx;
        n1.y += n1.vy;

        // Bounce from boundaries
        if (n1.x < 0 || n1.x > width) n1.vx *= -1;
        if (n1.y < 0 || n1.y > height) n1.vy *= -1;

        // Subtle mouse attraction
        if (isHovered) {
          const dx = mouseX - n1.x;
          const dy = mouseY - n1.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180 && dist > 10) {
            const force = (180 - dist) / 180;
            n1.x += (dx / dist) * force * 0.6;
            n1.y += (dy / dist) * force * 0.6;
          }
        }

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      // Draw traveling action potentials / pulses
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p];
        pulse.progress += pulse.speed;

        const src = nodes[pulse.sourceIndex];
        const tgt = nodes[pulse.targetIndex];

        if (src && tgt && pulse.progress <= 1) {
          const px = src.x + (tgt.x - src.x) * pulse.progress;
          const py = src.y + (tgt.y - src.y) * pulse.progress;

          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "#22d3ee";
          ctx.shadowColor = "#22d3ee";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          pulses.splice(p, 1);
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.pulsePhase += 0.03;
        const currentRadius = n.baseRadius + Math.sin(n.pulsePhase) * 0.4;

        ctx.beginPath();
        ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);

        // Highlight nodes closer to cursor
        const distToMouse = Math.hypot(mouseX - n.x, mouseY - n.y);
        if (distToMouse < 140) {
          ctx.fillStyle = "#22d3ee";
          ctx.shadowColor = "#22d3ee";
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = n.layer === 0 ? "rgba(129, 140, 248, 0.85)" : "rgba(99, 102, 241, 0.6)";
          ctx.shadowColor = "rgba(99, 102, 241, 0.4)";
          ctx.shadowBlur = 4;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.parentElement?.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-60 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
