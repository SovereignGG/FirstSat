import type { DeviceId } from '../devices';

/**
 * Stylized-but-recognizable line-art of each hardware wallet, drawn to
 * resemble the real devices (Foundation Passport Core, SeedSigner Open Pill,
 * Specter DIY). All share a 120×120 viewBox for a consistent card footprint.
 */
export function DeviceArt({
  device,
  className = '',
}: {
  device: DeviceId;
  className?: string;
}) {
  if (device === 'passport') return <PassportArt className={className} />;
  if (device === 'seedsigner') return <SeedSignerArt className={className} />;
  return <SpecterDiyArt className={className} />;
}

/* Row of evenly-spaced keyboard keys between x0 and x1. */
function KeyRow({
  y,
  count,
  x0,
  x1,
  h = 6,
  fill,
  stroke,
}: {
  y: number;
  count: number;
  x0: number;
  x1: number;
  h?: number;
  fill: string;
  stroke: string;
}) {
  const step = (x1 - x0) / count;
  const w = step * 0.82;
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <rect
          key={i}
          x={x0 + i * step + (step - w) / 2}
          y={y}
          width={w}
          height={h}
          rx="1.3"
          fill={fill}
          stroke={stroke}
          strokeWidth="0.4"
        />
      ))}
    </g>
  );
}

/* ------------------------------- Passport ------------------------------- */
function PassportArt({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="pp-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2b2b2b" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
        <linearGradient id="pp-header" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#b9764a" />
          <stop offset="1" stopColor="#7c4a28" />
        </linearGradient>
        <linearGradient id="pp-key" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e0a06a" />
          <stop offset="1" stopColor="#b06f38" />
        </linearGradient>
      </defs>

      {/* body + side button */}
      <rect x="81" y="40" width="3" height="14" rx="1.5" fill="#3a3a3a" />
      <rect x="38" y="6" width="44" height="108" rx="10" fill="url(#pp-body)" stroke="#3d3d3d" strokeWidth="1.5" />

      {/* top teal chevron accent */}
      <path d="M54 11 L60 7 L66 11" stroke="#37c6bd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      {/* screen */}
      <rect x="45" y="15" width="30" height="41" rx="3" fill="#0b0b0b" stroke="#2f2f2f" strokeWidth="1" />
      <path d="M45 18 a3 3 0 0 1 3 -3 h24 a3 3 0 0 1 3 3 v4 h-30 Z" fill="url(#pp-header)" />
      <rect x="47.5" y="17" width="4" height="2.6" rx="0.6" fill="#5c3a22" />
      <rect x="68" y="17" width="5" height="2.6" rx="0.6" fill="#5c3a22" />

      {/* QR on screen */}
      <rect x="51" y="25" width="18" height="18" rx="1" fill="#f2f2f2" />
      <g fill="#111">
        <path d="M53 27 h4 v4 h-4 Z M54 28 h2 v2 h-2 Z" fillRule="evenodd" />
        <path d="M63 27 h4 v4 h-4 Z M64 28 h2 v2 h-2 Z" fillRule="evenodd" />
        <path d="M53 37 h4 v4 h-4 Z M54 38 h2 v2 h-2 Z" fillRule="evenodd" />
        <rect x="59" y="28" width="1.6" height="1.6" />
        <rect x="61" y="31" width="1.6" height="1.6" />
        <rect x="58" y="33" width="1.6" height="1.6" />
        <rect x="63" y="34" width="1.6" height="1.6" />
        <rect x="60" y="36" width="1.6" height="1.6" />
        <rect x="65" y="37" width="1.6" height="1.6" />
      </g>
      {/* screen footer icons */}
      <circle cx="48.5" cy="52" r="1.6" fill="none" stroke="#8a8a8a" strokeWidth="0.7" />
      <path d="M69 52 l1.4 1.4 l2.4 -2.8" stroke="#37c6bd" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* nav row: two side keys + center pyramid pad */}
      <rect x="44.5" y="61" width="8" height="11" rx="1.5" fill="url(#pp-key)" />
      <rect x="67.5" y="61" width="8" height="11" rx="1.5" fill="url(#pp-key)" />
      <g>
        <polygon points="55,61 65,61 60,66" fill="#e8ac72" />
        <polygon points="65,61 65,71 60,66" fill="#c17e40" />
        <polygon points="65,71 55,71 60,66" fill="#94592a" />
        <polygon points="55,71 55,61 60,66" fill="#c17e40" />
      </g>

      {/* keypad 4×3 */}
      {[76, 85, 94, 103].map((y) => (
        <KeyRow key={y} y={y} count={3} x0={44} x1={76} h={6.4} fill="#181818" stroke="#333" />
      ))}
    </svg>
  );
}

/* ------------------------------ SeedSigner ------------------------------ */
function SeedSignerArt({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ss-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ededf1" />
          <stop offset="0.5" stopColor="#c7c7cd" />
          <stop offset="1" stopColor="#97979e" />
        </linearGradient>
        <radialGradient id="ss-btn" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#f4f4f6" />
          <stop offset="1" stopColor="#a6a6ad" />
        </radialGradient>
        <linearGradient id="ss-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#141416" />
          <stop offset="0.55" stopColor="#050506" />
          <stop offset="1" stopColor="#101014" />
        </linearGradient>
      </defs>

      {/* machined aluminum body */}
      <rect x="8" y="39" width="104" height="44" rx="9" fill="url(#ss-body)" stroke="#7c7c83" strokeWidth="1" />
      {/* bevel highlights */}
      <rect x="11" y="42" width="98" height="38" rx="7" fill="none" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="0.8" />
      <rect x="11.5" y="42.5" width="97" height="37" rx="6.5" fill="none" stroke="#000000" strokeOpacity="0.18" strokeWidth="0.8" />

      {/* left round button */}
      <circle cx="27" cy="61" r="7" fill="url(#ss-btn)" stroke="#6f6f76" strokeWidth="0.8" />
      <circle cx="25.4" cy="59.2" r="2" fill="#ffffff" fillOpacity="0.55" />

      {/* recessed center screen */}
      <rect x="45" y="47" width="30" height="28" rx="2.5" fill="#2c2c30" />
      <rect x="47" y="49" width="26" height="24" rx="1.5" fill="url(#ss-screen)" stroke="#000" strokeWidth="0.5" />
      <polygon points="48,72 58,50 62,50 50,72" fill="#ffffff" fillOpacity="0.05" />

      {/* three round buttons on the right */}
      {[51, 61, 71].map((cy) => (
        <g key={cy}>
          <circle cx="95" cy={cy} r="4.6" fill="url(#ss-btn)" stroke="#6f6f76" strokeWidth="0.7" />
          <circle cx="93.7" cy={cy - 1.2} r="1.2" fill="#ffffff" fillOpacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------ Specter DIY ----------------------------- */
function SpecterDiyArt({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="sd-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4a4a4a" />
          <stop offset="0.5" stopColor="#2b2b2b" />
          <stop offset="1" stopColor="#161616" />
        </linearGradient>
        <linearGradient id="sd-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c2647" />
          <stop offset="1" stopColor="#0a0e1e" />
        </linearGradient>
        <linearGradient id="sd-key" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f3a63" />
          <stop offset="1" stopColor="#1c2647" />
        </linearGradient>
      </defs>

      {/* textured plastic case */}
      <rect x="28" y="4" width="64" height="112" rx="10" fill="url(#sd-body)" stroke="#0d0d0d" strokeWidth="1.4" />

      {/* rough case texture on the top and bottom bezels */}
      <g fill="#000000" fillOpacity="0.35">
        {Array.from({ length: 5 }).map((_, i) => (
          <circle key={`t-${i}`} cx={33 + i * 3.2} cy="9" r="0.6" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <circle key={`b-${i}`} cx={33 + i * 3.2} cy="111" r="0.6" />
        ))}
      </g>

      {/* front camera dot */}
      <circle cx="60" cy="10" r="2.2" fill="#050505" stroke="#3a3a3a" strokeWidth="0.6" />
      <circle cx="59.3" cy="9.3" r="0.6" fill="#5a5a5a" />

      {/* touchscreen */}
      <rect x="34" y="16" width="52" height="92" rx="3" fill="url(#sd-screen)" stroke="#000" strokeWidth="1" />

      {/* "Enter your PIN code" title + subtitle */}
      <rect x="45" y="23" width="30" height="3.2" rx="1.4" fill="#e7ebf5" fillOpacity="0.85" />
      <rect x="49" y="28.5" width="22" height="2.2" rx="1" fill="#f0993d" fillOpacity="0.7" />

      {/* anti-phishing word dots + word bar */}
      <g fill="#8a93b8">
        <circle cx="54" cy="36" r="1" />
        <circle cx="60" cy="36" r="1" />
        <circle cx="66" cy="36" r="1" />
      </g>
      <rect x="43" y="40" width="34" height="2.6" rx="1" fill="#c9cfe6" fillOpacity="0.6" />

      {/* numeric keypad */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={40 + col * 14.5}
            y={50 + row * 10.5}
            width="11.5"
            height="7.5"
            rx="1.6"
            fill="url(#sd-key)"
            stroke="#000"
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))
      )}

      {/* Next button */}
      <rect x="40" y="98" width="40" height="7" rx="2" fill="#38456f" stroke="#000" strokeOpacity="0.3" strokeWidth="0.5" />
    </svg>
  );
}
