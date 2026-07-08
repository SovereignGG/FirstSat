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
    title: React.ReactNode;
    intro: string[];
    howHeading: string;
    how: string;
    note: string;
    ctaText: string;
  }
> = {
  passport: {
    title: (
      <>
        Update your <span className="text-bitcoin">firmware</span>
      </>
    ),
    intro: [
      'Like any device, your Passport gets software updates. These include the latest security patches and new features from the Foundation team.',
      'The Envoy app will prompt you if an update is available. Follow the on-screen instructions — it takes a couple of minutes.',
    ],
    howHeading: 'How to update',
    how: 'Open the Envoy app and follow the firmware update prompts. The app will guide you through downloading and installing the update onto your Passport.',
    note: 'If no update is available, your Passport is already running the latest firmware. Continue to the next step.',
    ctaText: 'Firmware updated →',
  },
  seedsigner: {
    title: (
      <>
        Staying <span className="text-bitcoin">up to date</span>
      </>
    ),
    intro: [
      "SeedSigner doesn't have \"firmware\" in the usual sense — the whole operating system lives on your microSD card, and you just flashed the latest release.",
      'Updating later works exactly the same way: download the new release, verify the signature, and flash it over the old one. Nothing on the device to migrate, because the device stores nothing.',
    ],
    howHeading: 'How updates work',
    how: 'Watch the SeedSigner website or GitHub for new releases. When one lands, repeat the download → verify → flash routine from earlier. Your seed and wallets are unaffected — they were never on the device.',
    note: "You're already on the latest release. Continue to the next step.",
    ctaText: "I'm on the latest release →",
  },
  coldcardq: {
    title: (
      <>
        Update your <span className="text-bitcoin">firmware</span>
      </>
    ),
    intro: [
      'Coinkite regularly ships firmware updates with security hardening and new features. Your Q updates via the microSD card — no computer connection needed.',
      'Check the version under Advanced → Upgrade Firmware, then compare with the latest on coldcard.com/docs/upgrade.',
    ],
    howHeading: 'How to update',
    how: 'Download the latest firmware from coldcard.com on your computer, copy it onto the microSD card, insert the card into your Q, and choose Advanced → Upgrade Firmware. The Q verifies the file is genuinely signed by Coinkite before installing.',
    note: 'If your Q already shows the latest version, continue to the next step.',
    ctaText: 'Firmware is current →',
  },
};

export function Phase2_5({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
  const content = CONTENT[device.id];

  const handleContinue = () => {
    onComplete('2.5');
    navigate(stepToRoute(getNextStep('2.5')!));
  };

  return (
    <StepLayout stepId="2.5" onContinue={handleContinue} ctaText={content.ctaText}>
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          {content.title}
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          {content.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3 card-lift">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            {content.howHeading}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">{content.how}</p>
        </div>

        <p className="text-sm text-text-dim">{content.note}</p>
      </div>
    </StepLayout>
  );
}
