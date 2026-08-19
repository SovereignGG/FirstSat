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
      'Now let\'s pair your Passport with Sparrow so you can manage your Bitcoin from your computer.',
    steps: [
      'In Sparrow, go to File → New Wallet. Give it a name.',
      'Select "Airgapped Hardware Wallet" and choose Foundation Passport.',
      'On your Passport, navigate to the pairing menu and select Sparrow.',
      'Scan the QR codes between the two devices, following the prompts on each.',
    ],
    ctaText: 'Passport is paired with Sparrow →',
  },
  seedsigner: {
    intro:
      'Sparrow needs your wallet\'s public key (xpub) to watch your balance. Your SeedSigner will show it as a QR code that Sparrow scans with your webcam — your seed itself never leaves the device.',
    steps: [
      'Power on your SeedSigner and load your seed (scan your SeedQR, or enter the 12 words).',
      'On the SeedSigner: Seeds → your seed → Export Xpub → Single Sig → Native SegWit → Sparrow.',
      'In Sparrow: File → New Wallet, give it a name, then select "Airgapped Hardware Wallet" and click Scan under SeedSigner.',
      'Hold the SeedSigner\'s QR code up to your webcam. Sparrow imports the xpub and builds your watch-only wallet. Click Apply.',
    ],
    note: 'No webcam? Choose the file export option on SeedSigner\'s newer releases, or type the xpub manually — but QR is by far the easiest.',
    ctaText: 'SeedSigner is paired with Sparrow →',
  },
  specterdiy: {
    intro:
      "Sparrow needs your wallet's public key (xpub) to watch your balance. Your Specter DIY shows it as a QR code that Sparrow scans with your webcam — your seed itself never leaves the device.",
    steps: [
      'Power on your Specter DIY and load your key (scan your SeedQR, or enter the 24 words on the touchscreen).',
      'On the device: your key → Export xpub → Single sig → Native SegWit, then choose to show it as a QR code.',
      'In Sparrow: File → New Wallet, give it a name, then select "Airgapped Hardware Wallet" and click Scan under Specter.',
      "Hold the Specter DIY's QR code up to your webcam. Sparrow imports the xpub and builds your watch-only wallet. Click Apply.",
    ],
    note: 'No webcam? Specter DIY can also export the xpub to a microSD card, which Sparrow can import as a file instead.',
    ctaText: 'Specter DIY is paired with Sparrow →',
  },
};

export function Phase4_2({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
  const content = CONTENT[device.id];

  const handleContinue = () => {
    onComplete('4.2');
    navigate(stepToRoute(getNextStep('4.2')!));
  };

  return (
    <StepLayout stepId="4.2" onContinue={handleContinue} ctaText={content.ctaText}>
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Connect your {device.short} to{' '}
          <span className="text-bitcoin">Sparrow</span>
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

        <div className="bg-bg-card rounded-xl border border-border p-5">
          <p className="text-sm text-text-muted leading-relaxed">
            <span className="text-success font-medium">✓ Your keys stay safe</span> — Sparrow
            never has your private keys. It can see your balance and create transactions,
            but signing (approving) always happens on your {device.short}.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
