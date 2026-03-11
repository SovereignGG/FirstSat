# First Sat

**Your first sat. Safely in cold storage.**

A step-by-step guided web app that helps Bitcoin beginners get their first satoshi into cold storage using a Foundation Passport hardware wallet.

**Live site:** [first-sat.netlify.app](https://first-sat.netlify.app)

## Why This Exists

Millions of people buy Bitcoin on exchanges and leave it there. Exchanges get hacked, freeze accounts, and go bankrupt. FTX, Celsius, BlockFi — the list keeps growing.

The solution is self-custody with a hardware wallet. But for beginners, the setup process is intimidating. Documentation is scattered, jargon-heavy, and assumes prior knowledge.

First Sat fixes that. One clear path, no choice paralysis. Get the hardware wallet out of the drawer and into use.

## What It Does

First Sat walks beginners through 6 phases:

1. **Why This Matters** — Understand exchange risk and why self-custody matters
2. **Passport Setup** — Unbox, verify, and configure your Foundation Passport
3. **Seed Phrase** — The most critical step: securely back up your 24-word seed phrase
4. **Sparrow Wallet** — Install and pair a desktop wallet
5. **BULL Wallet** — Install and pair a mobile wallet
6. **First Sat** — Send a test transaction to cold storage

By the end, the user has Bitcoin in cold storage that only they control.

## Design Principles

- **Activation over education** — one clear path, no overwhelm
- **One action per screen** — never multiple things to do at once
- **No jargon without explanation** — plain English always
- **Progress saved locally** — close the tab, come back tomorrow, pick up where you left off
- **Sequential gating** — phases must be completed in order, no skipping ahead

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS
- React Router
- Fully static, client-side only — no backend, no accounts, no tracking
- Hosted on Netlify

## Running Locally

```bash
git clone https://github.com/SovereignGG/FirstSat.git
cd FirstSat
npm install
npm run dev
```

Open [localhost:5173](http://localhost:5173) in your browser.

## Contributing

Contributions are welcome. Some ideas:

- **Improve copy** — make explanations clearer, friendlier, more accurate
- **Add animations** — subtle transitions between screens
- **Accessibility** — screen reader support, keyboard navigation
- **Translations** — help non-English speakers secure their Bitcoin
- **Testing** — add unit and integration tests

To contribute:

1. Fork the repo
2. Create a branch (`git checkout -b your-feature`)
3. Make your changes
4. Push and open a PR

## License

Open source. Free forever.

## Credits

Built by [Become Unruggable](https://beunruggable.com).

Not financial advice.
