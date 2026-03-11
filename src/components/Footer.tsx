export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-8 px-4">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-2 text-xs text-text-dim">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-muted transition-colors"
          >
            Open source — contribute on GitHub
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
