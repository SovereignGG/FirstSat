export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-8 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-3 text-xs text-text-dim">
        <p className="text-center text-text-muted">
          Need extra help? Multi-sig, inheritance, or one-on-one training with GG —{' '}
          <a
            href="https://beunruggable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bitcoin hover:text-bitcoin-hover transition-colors font-medium"
          >
            reach out on beunruggable.com
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/SovereignGG/FirstSat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-muted transition-colors"
          >
            Open source — contribute on GitHub
          </a>
          <span>·</span>
          <a
            href="https://github.com/SovereignGG/FirstSat/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-muted transition-colors"
          >
            MIT License
          </a>
          <span>·</span>
          <a
            href="https://beunruggable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-muted transition-colors"
          >
            Built by Become Unruggable
          </a>
        </div>
        <p>Not financial advice.</p>
      </div>
    </footer>
  );
}
