import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import {
  DEVICE_LIST,
  DEVICES,
  type DeviceId,
  type DeviceMeta,
} from '../devices';
import { ParticleField } from '../components/ParticleField';
import { DeviceArt } from '../components/DeviceArt';

interface LandingProps {
  onStart: (device: DeviceId) => void;
  hasProgress: boolean;
  currentStep: string;
  savedDevice: DeviceId | null;
}

function DeviceCard({
  device,
  selected,
  onSelect,
}: {
  device: DeviceMeta;
  selected: boolean;
  onSelect: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState('');

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`
    );
  };

  const handleLeave = () => setTransform('');

  return (
    <button
      ref={ref}
      onClick={onSelect}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform }}
      className={`device-card relative text-left bg-bg-card rounded-2xl border p-5 cursor-pointer w-full ${
        selected ? 'selected border-bitcoin' : 'border-border'
      }`}
      aria-pressed={selected}
    >
      {/* order badge */}
      <span
        className={`absolute top-4 right-4 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
          selected
            ? 'bg-bitcoin text-white'
            : 'bg-bg border border-border text-text-dim'
        }`}
      >
        {selected ? '✓' : device.order}
      </span>

      <div className="h-28 flex items-center justify-center mb-3">
        <DeviceArt
          device={device.id}
          className={`h-full w-auto transition-transform duration-300 ${
            selected ? 'scale-110' : ''
          }`}
        />
      </div>

      <p className="text-xs font-semibold text-bitcoin uppercase tracking-wider mb-1">
        {device.tagline}
      </p>
      <h3 className="text-lg font-bold text-text leading-snug">{device.name}</h3>
      <p className="text-xs text-text-dim mt-0.5 mb-3">by {device.maker}</p>

      <ul className="space-y-1.5">
        {device.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-text-muted">
            <span className="text-bitcoin mt-0.5 flex-shrink-0">•</span>
            {h}
          </li>
        ))}
      </ul>
    </button>
  );
}

export function Landing({
  onStart,
  hasProgress,
  currentStep,
  savedDevice,
}: LandingProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<DeviceId | null>(null);
  const chooserRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    if (!selected) {
      chooserRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    onStart(selected);
    navigate(stepToRoute(getNextStep('landing')!));
  };

  const handleResume = () => {
    navigate(stepToRoute(currentStep));
  };

  const selectedDevice = selected ? DEVICES[selected] : null;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Ambient background */}
      <ParticleField />
      <div
        className="glow-orb w-[480px] h-[480px] bg-bitcoin/20 -top-40 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="glow-orb w-[320px] h-[320px] bg-bitcoin/10 bottom-10 -left-32"
        style={{ animationDelay: '2.5s' }}
        aria-hidden="true"
      />

      <div className="flex-1 flex items-center justify-center px-4 py-16 relative">
        <div className="max-w-3xl w-full text-center">
          {/* Bitcoin icon */}
          <div
            className="anim-scale-in mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bitcoin/10 border border-bitcoin/20 pulse-ring anim-float"
            style={{ '--d': '0.05s' } as React.CSSProperties}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M23.2 14.1c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.6-.4-.6 2.6c-.4-.1-.9-.2-1.3-.3l.7-2.6-1.7-.4-.7 2.7c-.3-.1-.7-.2-1-.3l-2.3-.6-.4 1.8s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.3c0 .1.1.1.1.1l-.1 0-1.2 4.7c-.1.2-.3.6-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.9 2.2.5c.4.1.8.2 1.2.3l-.7 2.7 1.6.4.7-2.7c.4.1.9.2 1.3.3l-.7 2.7 1.7.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2 0-3.2-1.5-3.9 1.1-.3 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2-3.9.9-5 .7l.9-3.6c1.1.3 4.6.8 4.1 2.9zm.5-5.4c-.5 1.8-3.3.9-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z"
                fill="#f7931a"
              />
            </svg>
          </div>

          <h1
            className="anim-fade-up text-4xl sm:text-6xl font-bold mb-4 leading-tight"
            style={{ '--d': '0.15s' } as React.CSSProperties}
          >
            Your First Sat.
            <br />
            <span className="text-gradient">Safely in Cold Storage.</span>
          </h1>

          <p
            className="anim-fade-up text-text-muted text-lg mb-12 max-w-md mx-auto leading-relaxed"
            style={{ '--d': '0.28s' } as React.CSSProperties}
          >
            A step-by-step guide to setting up your hardware wallet and moving
            your first Bitcoin off an exchange. Free, open source, no sign-up.
          </p>

          {/* Resume */}
          {hasProgress && savedDevice && (
            <div
              className="anim-fade-up mb-10"
              style={{ '--d': '0.34s' } as React.CSSProperties}
            >
              <button
                onClick={handleResume}
                className="btn-sheen w-full max-w-md py-4 px-6 rounded-xl font-semibold text-base bg-bitcoin hover:bg-bitcoin-hover text-white transition-all cursor-pointer active:scale-[0.98]"
              >
                Resume your {DEVICES[savedDevice].short} setup →
              </button>
              <p className="text-xs text-text-dim mt-3">
                …or pick a device below to start over from scratch.
              </p>
            </div>
          )}

          {/* Device chooser */}
          <div ref={chooserRef}>
            <h2
              className="anim-fade-up text-sm font-semibold text-text-muted uppercase tracking-widest mb-2"
              style={{ '--d': '0.4s' } as React.CSSProperties}
            >
              Step one
            </h2>
            <p
              className="anim-fade-up text-2xl font-bold mb-6"
              style={{ '--d': '0.45s' } as React.CSSProperties}
            >
              Choose your <span className="text-bitcoin">hardware wallet</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {DEVICE_LIST.map((device, i) => (
                <div
                  key={device.id}
                  className="anim-fade-up"
                  style={{ '--d': `${0.5 + i * 0.12}s` } as React.CSSProperties}
                >
                  <DeviceCard
                    device={device}
                    selected={selected === device.id}
                    onSelect={() => setSelected(device.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* What you'll need — appears once a device is picked */}
          {selectedDevice && (
            <div
              key={selectedDevice.id}
              className="anim-fade-up bg-bg-card/80 backdrop-blur-sm rounded-2xl border border-bitcoin/25 p-6 mb-8 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">
                  What you'll need
                </h3>
                <span className="text-xs font-semibold text-bitcoin bg-bitcoin/10 border border-bitcoin/20 rounded-full px-3 py-1">
                  {selectedDevice.totalTime}
                </span>
              </div>
              <ul className="space-y-3">
                {selectedDevice.needs.map((item, i) => (
                  <li
                    key={item.text}
                    className="anim-fade-up flex items-center gap-3 text-sm"
                    style={{ '--d': `${0.08 + i * 0.07}s` } as React.CSSProperties}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-text-muted">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleStart}
            disabled={!selected}
            className={`btn-sheen w-full max-w-md py-4 px-6 rounded-xl font-semibold text-base transition-all ${
              selected
                ? 'bg-bitcoin hover:bg-bitcoin-hover text-white cursor-pointer active:scale-[0.98]'
                : 'bg-bg-card border border-border text-text-dim cursor-not-allowed'
            }`}
          >
            {selected
              ? `Let's set up your ${DEVICES[selected].short} →`
              : 'Pick your device to begin'}
          </button>

          <p className="text-xs text-text-dim mt-6">
            Open source. Free forever. No sign up required.
          </p>
        </div>
      </div>
    </div>
  );
}
