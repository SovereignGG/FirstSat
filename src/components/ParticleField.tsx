import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  baseOpacity: number;
  twinkle: number;
  depth: number;
  glyph: boolean;
}

/**
 * Ambient canvas background: softly glowing orange particles (and a few ₿
 * glyphs) drifting upward, with a subtle parallax response to the mouse.
 */
export function ParticleField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let time = 0;
    const mouse = { x: 0.5, y: 0.5 };
    let particles: Particle[] = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const spawn = (randomY: boolean): Particle => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 10,
      radius: 0.8 + Math.random() * 2.2,
      speed: 0.08 + Math.random() * 0.35,
      drift: (Math.random() - 0.5) * 0.15,
      baseOpacity: 0.15 + Math.random() * 0.5,
      twinkle: Math.random() * Math.PI * 2,
      depth: 0.3 + Math.random() * 0.7,
      glyph: Math.random() < 0.06,
    });

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => spawn(true));
    };

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.y -= p.speed;
        p.x += p.drift + Math.sin(time * 0.7 + p.twinkle) * 0.08;
        if (p.y < -14) {
          Object.assign(p, spawn(false));
        }

        const px = p.x + (mouse.x - 0.5) * 30 * p.depth;
        const py = p.y + (mouse.y - 0.5) * 18 * p.depth;
        const opacity =
          p.baseOpacity * (0.65 + 0.35 * Math.sin(time * 1.5 + p.twinkle));

        if (p.glyph) {
          ctx.font = `${10 + p.radius * 4}px sans-serif`;
          ctx.fillStyle = `rgba(247, 147, 26, ${opacity * 0.8})`;
          ctx.fillText('₿', px, py);
        } else {
          ctx.beginPath();
          ctx.arc(px, py, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(247, 147, 26, ${opacity})`;
          ctx.shadowColor = 'rgba(247, 147, 26, 0.9)';
          ctx.shadowBlur = p.radius * 5;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = e.clientY / window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    if (reduceMotion) {
      // Draw a single static frame.
      time = 1;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(247, 147, 26, ${p.baseOpacity * 0.6})`;
        ctx.fill();
      }
    } else {
      window.addEventListener('mousemove', onMouse);
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}
