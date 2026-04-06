import { useEffect, useRef } from "react";

const GRID = 17;
const OFFSET = 8.5;

export default function DotGlow() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let dots = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function snapToGrid(val) {
      return Math.round((val - OFFSET) / GRID) * GRID + OFFSET;
    }

    function spawnDot() {
      const x = snapToGrid(Math.random() * window.innerWidth);
      const y = snapToGrid(Math.random() * window.innerHeight);
      dots.push({ x, y, life: 0, maxLife: 80 + Math.random() * 80 });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        const progress = dot.life / dot.maxLife;
        const alpha = Math.sin(progress * Math.PI); // fade in and out
        const radius = 1 + Math.sin(progress * Math.PI) * 2;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 130, 255, ${alpha * 0.3})`;
        ctx.fill();

        // subtle outer glow ring
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius + 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 130, 255, ${alpha * 0.1})`;
        ctx.fill();

        dot.life++;
      });

      dots = dots.filter((d) => d.life < d.maxLife);

      if (Math.random() < 0.009) spawnDot(); // ~1-2 new dots per second

      animFrame = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
