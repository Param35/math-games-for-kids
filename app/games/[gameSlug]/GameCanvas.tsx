"use client";

import { useEffect, useRef } from "react";
import { Game } from "@/lib/games-data";

interface Props {
  game: Game;
}

export default function GameCanvas({ game }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Parse game color
    const color = game.color;

    // Animated particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; char: string }[] = [];
    const mathChars = ["➕", "✖️", "➗", "½", game.icon, game.icon, "=", "?"];

    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: 16 + Math.random() * 20,
        opacity: 0.1 + Math.random() * 0.25,
        char: mathChars[Math.floor(Math.random() * mathChars.length)],
      });
    }

    let frame: number;
    let t = 0;

    function draw() {
      t += 0.01;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      // Background gradient
      const grad = ctx!.createRadialGradient(
        canvas!.width / 2, canvas!.height / 2, 0,
        canvas!.width / 2, canvas!.height / 2, canvas!.width * 0.7
      );
      grad.addColorStop(0, `${color}18`);
      grad.addColorStop(1, "rgba(10,6,24,0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      // Floating particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -50) p.x = canvas!.width + 50;
        if (p.x > canvas!.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas!.height + 50;
        if (p.y > canvas!.height + 50) p.y = -50;

        ctx!.globalAlpha = p.opacity * (0.7 + 0.3 * Math.sin(t * 2 + p.x));
        ctx!.font = `${p.size}px Arial`;
        ctx!.fillText(p.char, p.x, p.y);
      }
      ctx!.globalAlpha = 1;

      // Central pulsing icon
      const cx = canvas!.width / 2;
      const cy = canvas!.height / 2;
      const pulse = 1 + 0.05 * Math.sin(t * 2);

      // Glow ring
      const glow = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 80 * pulse);
      glow.addColorStop(0, `${color}40`);
      glow.addColorStop(1, "transparent");
      ctx!.fillStyle = glow;
      ctx!.beginPath();
      ctx!.arc(cx, cy, 100 * pulse, 0, Math.PI * 2);
      ctx!.fill();

      // Icon
      ctx!.font = `${90 * pulse}px Arial`;
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText(game.icon, cx, cy - 20);

      // Game title text
      ctx!.font = `bold 24px Outfit, sans-serif`;
      ctx!.fillStyle = "rgba(255,255,255,0.9)";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText(game.title, cx, cy + 65);

      // Subtitle
      ctx!.font = `16px Inter, sans-serif`;
      ctx!.fillStyle = "rgba(168,143,200,0.8)";
      ctx!.fillText("🎮 Game Coming Soon — Tap to Play!", cx, cy + 95);

      ctx!.textAlign = "left";
      ctx!.textBaseline = "alphabetic";

      frame = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, [game]);

  return (
    <div className="game-canvas-wrapper" style={{ maxHeight: 480 }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-label={`${game.title} game area`}
      />
    </div>
  );
}
