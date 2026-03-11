interface Props {
  onReset: () => void;
}

export function Phase6_4({ onReset }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-[calc(100vh-120px)] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Celebration */}
        <div className="mb-6 text-6xl">🎉</div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          Your first sat is in cold storage.
          <br />
          <span className="text-bitcoin">You're unruggable.</span>
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
          <ul className="space-y-3 text-sm text-text-muted">
            {[
              'Set up and verified a Foundation Passport hardware wallet',
              'Secured your seed phrase with multiple backups',
              'Connected to Sparrow Wallet on your desktop',
              'Connected to BULL Wallet on your phone',
              'Completed a test transaction to cold storage',
              'Verified your receive address on the Passport itself',
            ].map((item) => (
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
              As you learn more, consider options like Coldcard, SeedSigner, Blockstream Jade,
              or Trezor for multi-sig setups.
            </li>
            <li>
              <strong className="text-text">Share First Sat with someone who needs it.</strong>{' '}
              Know someone with a Passport still in the box? Send them this guide.
            </li>
          </ul>
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
