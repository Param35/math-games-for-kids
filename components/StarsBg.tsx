"use client";
import { useEffect, useRef } from "react";

export default function StarsBg() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 80;
    const stars: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      const size = Math.random() * 2.5 + 0.8;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 4;
      const duration = Math.random() * 3 + 2;

      star.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        background: white;
        animation: twinkle ${duration}s ${delay}s ease-in-out infinite;
        opacity: 0.1;
      `;
      container.appendChild(star);
      stars.push(star);
    }

    // Colored orbs
    const orbs = [
      { color: "rgba(124,58,237,0.15)", size: 400, x: 10, y: 20 },
      { color: "rgba(6,182,212,0.1)", size: 300, x: 80, y: 60 },
      { color: "rgba(236,72,153,0.08)", size: 250, x: 50, y: 80 },
    ];

    for (const orb of orbs) {
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        width: ${orb.size}px;
        height: ${orb.size}px;
        border-radius: 50%;
        left: ${orb.x}%;
        top: ${orb.y}%;
        background: radial-gradient(circle, ${orb.color}, transparent 70%);
        pointer-events: none;
        transform: translate(-50%, -50%);
      `;
      container.appendChild(el);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="stars-bg" aria-hidden="true" />
  );
}
