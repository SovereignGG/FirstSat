import { Confetti } from '../components/Confetti';
import { useDevice } from '../devices';

interface Props {
  onReset: () => void;
}

export function Phase6_4({ onReset }: Props) {
  const device = useDevice();

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
                ? 'SeedSigner and ColdCard Q'
                : device.id === 'seedsigner'
                  ? 'Foundation Passport and ColdCard Q'
                  : 'Foundation Passport and SeedSigner'}{' '}
              — a second device makes a great decoy or backup signer.
            </li>
            <li>
              <strong className="text-text">Share First Sat with someone who needs it.</strong>{' '}
              Know someone with a hardware wallet still in the box? Send them this guide.
            </li>
          </ul>
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
