import { useState } from 'react';
import { Confetti } from '../components/Confetti';
import { useDevice } from '../devices';
import lightningQr from '../assets/lightning-qr.svg';

interface Props {
  onReset: () => void;
}

const LIGHTNING_ADDRESS = 'GG21M@primal.net';

export function Phase6_4({ onReset }: Props) {
  const device = useDevice();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(LIGHTNING_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the address is still selectable text
    }
  };

  const achievements = [
    `Set up and verified a ${device.name} hardware wallet`,
    'Secured your seed phrase with multiple backups',
    'Connected to Sparrow Wallet on your desktop',
    'Connected to BULL Wallet on your phone',
    'Completed a test transaction to cold storage',
    `Verified your receive address on the ${device.short} itself`,
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-[calc(100vh-120px)] flex flex-col relative">
      <Confetti />

      <div className="flex-1 flex flex-col items-center justify-center text-center stagger">
        {/* Celebration */}
        <div className="mb-6 text-6xl anim-float">🎉</div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Your first sat is in cold storage.
          <br />
          <span className="text-gradient">You're unruggable.</span>
        </h1>

        <p className="text-text-muted leading-relaxed max-w-md mb-8">
          You did it. You took control of your Bitcoin. No exchange, no
          middleman, no counterparty risk. Your keys, your coins.
        </p>

        {/* What you achieved */}
        <div className="w-full bg-bg-card rounded-2xl border border-border p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
            What you've achieved
          </h3>
          <ul className="space-y-3 text-sm text-text-muted stagger">
            {achievements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-success mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Next steps */}
        <div className="w-full bg-bg-card rounded-2xl border border-bitcoin/20 p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-bitcoin uppercase tracking-wider mb-4">
            What's next
          </h3>
          <ul className="space-y-4 text-sm text-text-muted">
            <li>
              <strong className="text-text">Move the rest of your Bitcoin off the exchange.</strong>{' '}
              Now that you know the process, repeat it with larger amounts. Same steps, same
              verification.
            </li>
            <li>
              <strong className="text-text">Explore other hardware wallets when ready.</strong>{' '}
              This guide also covers{' '}
              {device.id === 'passport'
                ? 'SeedSigner and Specter DIY'
                : device.id === 'seedsigner'
                  ? 'Foundation Passport Core and Specter DIY'
                  : 'Foundation Passport Core and SeedSigner'}{' '}
              — a second device makes a great decoy or backup signer.
            </li>
            <li>
              <strong className="text-text">Share First Sat with someone who needs it.</strong>{' '}
              Know someone with a hardware wallet still in the box? Send them this guide.
            </li>
          </ul>
        </div>

        {/* Value for value */}
        <div className="w-full bg-bg-card rounded-2xl border border-border p-6 mb-8 text-left card-lift">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">⚡</span>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              Value for value
            </h3>
          </div>
          <p className="text-sm text-text-muted leading-relaxed mb-5">
            First Sat is free and always will be. If this guide helped you take
            control of your Bitcoin, you can send a few sats back as a tip —
            straight over Lightning, no middleman. That's the whole point, right?
          </p>

          {/* Scannable QR */}
          <div className="flex justify-center mb-5">
            <div className="relative bg-white rounded-2xl p-3 shadow-[0_8px_32px_-8px_rgba(247,147,26,0.35)]">
              <img
                src={lightningQr}
                alt="Lightning QR code for GG21M@primal.net"
                className="w-44 h-44 block"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black flex items-center justify-center border-4 border-white">
                <span className="text-white text-lg leading-none">⚡</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-text-dim text-center mb-4">
            Scan with any Lightning wallet
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`lightning:${LIGHTNING_ADDRESS}`}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg border border-border font-mono text-sm text-bitcoin hover:border-bitcoin/50 transition-colors"
            >
              ⚡ {LIGHTNING_ADDRESS}
            </a>
            <button
              onClick={handleCopy}
              className={`btn-sheen py-3 px-6 rounded-xl font-semibold text-sm transition-all cursor-pointer active:scale-[0.98] ${
                copied
                  ? 'bg-success/20 text-success border border-success/40'
                  : 'bg-bitcoin hover:bg-bitcoin-hover text-white'
              }`}
            >
              {copied ? 'Copied ✓' : 'Copy address'}
            </button>
          </div>
        </div>

        {/* Personal help CTA */}
        <div className="w-full relative rounded-2xl border border-bitcoin/40 p-6 mb-8 text-left overflow-hidden card-lift bg-gradient-to-br from-bitcoin/15 via-bg-card to-bg-card">
          <div className="glow-orb w-48 h-48 bg-bitcoin/25 -top-16 -right-16" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-sm font-semibold text-bitcoin uppercase tracking-wider mb-2">
              Want to go deeper?
            </h3>
            <p className="text-lg font-bold text-text mb-2">
              Get one-on-one help from GG
            </p>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Multi-sig setups, inheritance planning, privacy, or personal
              training on anything Bitcoin self-custody — work directly with GG
              and become truly unruggable.
            </p>
            <a
              href="https://beunruggable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen inline-flex items-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm bg-bitcoin hover:bg-bitcoin-hover text-white transition-all active:scale-[0.98]"
            >
              Reach out at beunruggable.com →
            </a>
          </div>
        </div>

        <button
          onClick={onReset}
          className="text-sm text-text-dim hover:text-text-muted transition-colors cursor-pointer"
        >
          Start over from the beginning
        </button>
      </div>
    </div>
  );
}
