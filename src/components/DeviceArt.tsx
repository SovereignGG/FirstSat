import type { DeviceId } from '../devices';

/**
 * Stylized-but-recognizable line-art of each hardware wallet, drawn to
 * resemble the real devices (Foundation Passport, SeedSigner Open Pill,
 * Coldcard Q). All share a 120×120 viewBox for a consistent card footprint.
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
  return <ColdcardArt className={className} />;
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

/* ------------------------------ Coldcard Q ------------------------------ */
function ColdcardArt({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cc-body" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#ffab3d" />
          <stop offset="0.5" stopColor="#f07d16" />
          <stop offset="1" stopColor="#c85e08" />
        </linearGradient>
      </defs>

      {/* translucent orange body */}
      <rect x="22" y="6" width="76" height="108" rx="9" fill="url(#cc-body)" stroke="#ffc06a" strokeWidth="1.2" />
      <rect x="24.5" y="8.5" width="71" height="103" rx="7" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="0.8" />

      {/* top branding + vent dots + SD slots */}
      <rect x="26" y="24" width="3.5" height="5" rx="0.6" fill="#00000030" />
      <rect x="26" y="32" width="3.5" height="5" rx="0.6" fill="#00000030" />
      <g fill="#00000035">
        {Array.from({ length: 3 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <circle key={`${r}-${c}`} cx={82 + c * 3.4} cy={11 + r * 3.2} r="0.9" />
          ))
        )}
      </g>

      {/* screen */}
      <rect x="30" y="16" width="60" height="30" rx="2" fill="#160b01" stroke="#7a3d00" strokeWidth="1" />
      <text
        x="60"
        y="32"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#ffd21a"
      >
        COLDCARD
      </text>
      <text
        x="60"
        y="39"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="3.6"
        fill="#e0a800"
      >
        Don't Trust. Verify.
      </text>
      <rect x="84" y="18.5" width="4" height="2.2" rx="0.5" fill="#ffd21a" fillOpacity="0.8" />

      {/* function row: power, QR, nav cluster, cancel/enter */}
      <circle cx="30.5" cy="51.5" r="2.4" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="35" y="49" width="6" height="5.5" rx="1.2" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="53" y="49" width="5.5" height="5.5" rx="1.2" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="61.5" y="49" width="5.5" height="5.5" rx="1.2" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="79" y="49" width="10" height="5.5" rx="1.2" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />

      {/* QWERTY keyboard */}
      <KeyRow y={59} count={10} x0={26} x1={94} fill="#160b01" stroke="#7a3d00" />
      <KeyRow y={68} count={10} x0={26} x1={94} fill="#160b01" stroke="#7a3d00" />
      <KeyRow y={77} count={9} x0={29} x1={91} fill="#160b01" stroke="#7a3d00" />
      <KeyRow y={86} count={8} x0={32} x1={88} fill="#160b01" stroke="#7a3d00" />

      {/* bottom row: fn, shift, space, sym, delete */}
      <rect x="27" y="95" width="7" height="6" rx="1.3" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="36" y="95" width="10" height="6" rx="1.3" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="48" y="95" width="24" height="6" rx="1.3" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="74" y="95" width="9" height="6" rx="1.3" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
      <rect x="85" y="95" width="7" height="6" rx="1.3" fill="#160b01" stroke="#7a3d00" strokeWidth="0.4" />
    </svg>
  );
}
