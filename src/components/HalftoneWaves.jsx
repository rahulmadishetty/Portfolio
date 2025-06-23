import { useEffect, useRef } from 'react';

export default function CreamFlowField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const particles = [];
    const flowField = [];
    let time = 0;

    const cellSize = 30;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      particles.length = 0;
      flowField.length = 0;

      // Initialize flow field
      const cols = Math.floor(canvas.width / cellSize);
      const rows = Math.floor(canvas.height / cellSize);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          flowField.push({
            x: x * cellSize,
            y: y * cellSize,
            angle: Math.random() * Math.PI * 2,
          });
        }
      }

      // Create particles
      for (let i = 0; i < 400; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: 0,
          vy: 0,
          speed: 1.2 + Math.random() * 0.5,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = '#fef7ed'; // light cream
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update flow field angles
      flowField.forEach((cell, index) => {
        const x = cell.x / 100;
        const y = cell.y / 100;
        cell.angle = Math.sin(x + time) + Math.cos(y + time);
      });

      // Move particles
      particles.forEach((p) => {
        const col = Math.floor(p.x / cellSize);
        const row = Math.floor(p.y / cellSize);
        const index = row * Math.floor(canvas.width / cellSize) + col;
        const angle = flowField[index]?.angle || 0;

        p.vx = Math.cos(angle) * p.speed;
        p.vy = Math.sin(angle) * p.speed;
        p.x += p.vx;
        p.y += p.vy;

        if (
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height
        ) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fill();
      });

      time += 0.005;
      animationFrameId = requestAnimationFrame(draw);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-screen" />;
}
