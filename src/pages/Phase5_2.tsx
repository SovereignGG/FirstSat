import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice, type DeviceId } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

const CONTENT: Record<
  DeviceId,
  {
    intro: string;
    steps: string[];
    note?: string;
    ctaText: string;
  }
> = {
  passport: {
    intro:
      "Let's pair your Passport with BULL Wallet so you can watch your Bitcoin from your phone.",
    steps: [
      'Open BULL Wallet on your phone and start the hardware wallet pairing process.',
      'On your Passport, navigate to the pairing menu and select the BULL Wallet option.',
      'In BULL Wallet, click on Settings → Bitcoin Settings → Import Wallet → Foundation Passport and scan the QR code on the Passport screen with your phone camera.',
    ],
    ctaText: 'Passport is paired with BULL Wallet →',
  },
  seedsigner: {
    intro:
      "Let's add your wallet to BULL so you can watch your Bitcoin from your phone. Just like with Sparrow, your SeedSigner shares only the public key (xpub) — never your seed.",
    steps: [
      'Power on your SeedSigner and load your seed (scan your SeedQR or enter the words).',
      'On the SeedSigner: Seeds → your seed → Export Xpub → Single Sig → Native SegWit, and display the QR code.',
      'In BULL Wallet, click on Settings → Bitcoin Settings → Import Wallet → SeedSigner and scan the QR code on the SeedSigner screen with your phone camera.',
    ],
    note: 'Use the same Native SegWit export you used for Sparrow, so both apps watch the same wallet and show the same balance.',
    ctaText: 'SeedSigner is paired with BULL Wallet →',
  },
  specterdiy: {
    intro:
      "Let's add your wallet to BULL so you can watch your Bitcoin from your phone. Just like with Sparrow, your Specter DIY shares only the public key (xpub) — never your seed.",
    steps: [
      'Power on your Specter DIY and load your key (scan your SeedQR or enter the words).',
      'On the device: your key → Export xpub → Single sig → Native SegWit, and display the QR code.',
      'In BULL Wallet, click on Settings → Bitcoin Settings → Import Wallet → Specter and scan the QR code on the Specter screen with your phone camera.',
    ],
    note: 'Use the same Native SegWit export you used for Sparrow, so both apps watch the same wallet and show the same balance.',
    ctaText: 'Specter DIY is paired with BULL Wallet →',
  },
};

export function Phase5_2({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
  const content = CONTENT[device.id];

  const handleContinue = () => {
    onComplete('5.2');
    navigate(stepToRoute(getNextStep('5.2')!));
  };

  return (
    <StepLayout stepId="5.2" onContinue={handleContinue} ctaText={content.ctaText}>
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Connect your {device.short} to{' '}
          <span className="text-bitcoin">BULL Wallet</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>{content.intro}</p>
        </div>

        <div className="space-y-3">
          {content.steps.map((text, i) => (
            <div
              key={i}
              className="step-row flex gap-4 bg-bg-card rounded-xl border border-border p-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bitcoin/10 text-bitcoin font-bold text-sm flex items-center justify-center">
                {i + 1}
              </div>
              <p className="text-sm text-text-muted leading-relaxed pt-1">{text}</p>
            </div>
          ))}
        </div>

        {content.note && (
          <div className="bg-bg-card rounded-xl border border-border p-5">
            <p className="text-sm text-text-dim leading-relaxed">
              <strong className="text-text-muted">Tip:</strong> {content.note}
            </p>
          </div>
        )}
      </div>
    </StepLayout>
  );
}
