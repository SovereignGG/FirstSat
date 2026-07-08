import type { DeviceId } from '../devices';

/** Minimal stylized line-art of each hardware wallet. */
export function DeviceArt({
  device,
  className = '',
}: {
  device: DeviceId;
  className?: string;
}) {
  if (device === 'passport') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        {/* body */}
        <rect x="38" y="10" width="44" height="100" rx="10" fill="#1c1c1c" stroke="#3a3a3a" strokeWidth="2" />
        {/* screen */}
        <rect x="45" y="18" width="30" height="42" rx="4" fill="#0a0a0a" stroke="#f7931a" strokeWidth="1.5" />
        <text x="60" y="45" textAnchor="middle" fontSize="16" fill="#f7931a">₿</text>
        {/* camera dot */}
        <circle cx="60" cy="66" r="3" fill="#333" stroke="#4a4a4a" />
        {/* dpad */}
        <circle cx="60" cy="88" r="13" fill="#0f0f0f" stroke="#3a3a3a" strokeWidth="1.5" />
        <circle cx="60" cy="88" r="5" fill="#1f1f1f" stroke="#f7931a" strokeWidth="1" />
      </svg>
    );
  }

  if (device === 'seedsigner') {
    return (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        {/* body */}
        <rect x="22" y="30" width="76" height="60" rx="8" fill="#1c1c1c" stroke="#3a3a3a" strokeWidth="2" />
        {/* screen */}
        <rect x="30" y="38" width="36" height="36" rx="3" fill="#0a0a0a" stroke="#f7931a" strokeWidth="1.5" />
        {/* QR pattern on screen */}
        <g fill="#f7931a" opacity="0.9">
          <rect x="34" y="42" width="7" height="7" rx="1" />
          <rect x="55" y="42" width="7" height="7" rx="1" />
          <rect x="34" y="63" width="7" height="7" rx="1" />
          <rect x="46" y="52" width="4" height="4" />
          <rect x="53" y="58" width="4" height="4" />
          <rect x="58" y="65" width="4" height="4" />
          <rect x="45" y="63" width="4" height="4" />
          <rect x="52" y="46" width="3" height="3" />
        </g>
        {/* camera lens */}
        <circle cx="82" cy="50" r="9" fill="#0a0a0a" stroke="#4a4a4a" strokeWidth="2" />
        <circle cx="82" cy="50" r="4" fill="#1f1f1f" stroke="#f7931a" strokeWidth="1" />
        {/* buttons */}
        <circle cx="76" cy="72" r="3.5" fill="#2a2a2a" />
        <circle cx="88" cy="72" r="3.5" fill="#2a2a2a" />
        <circle cx="82" cy="80" r="3.5" fill="#2a2a2a" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
      {/* ColdCard Q body */}
      <rect x="16" y="22" width="88" height="76" rx="9" fill="#1c1c1c" stroke="#3a3a3a" strokeWidth="2" />
      {/* screen */}
      <rect x="26" y="30" width="68" height="30" rx="3" fill="#0a0a0a" stroke="#f7931a" strokeWidth="1.5" />
      <text x="60" y="49" textAnchor="middle" fontSize="9" fill="#f7931a">₿ COLDCARD</text>
      {/* qwerty keyboard dots */}
      <g fill="#2f2f2f">
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={27 + col * 7.4}
              cy={70 + row * 8.5}
              r="2.6"
            />
          ))
        )}
      </g>
      <rect x="44" y="90" width="32" height="4" rx="2" fill="#2f2f2f" />
    </svg>
  );
}
