import { useMemo } from 'react';

const COLORS = [
  '#f7931a',
  '#ffc46b',
  '#22c55e',
  '#3b82f6',
  '#eab308',
  '#ec4899',
  '#ffffff',
];

interface Piece {
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
  round: boolean;
  skew: number;
}

/** Full-screen celebratory confetti rain. Pure CSS animation, no deps. */
export function Confetti({ count = 130 }: { count?: number }) {
  const pieces = useMemo<Piece[]>(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 3.2 + Math.random() * 3.5,
        size: 5 + Math.random() * 7,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        round: Math.random() < 0.35,
        skew: Math.random() * 40 - 20,
      })),
    [count]
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden z-50"
      aria-hidden="true"
    >
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            backgroundColor: p.color,
            borderRadius: p.round ? '50%' : '2px',
            transform: `skew(${p.skew}deg)`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
