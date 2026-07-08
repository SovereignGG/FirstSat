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
    icon: string;
    title: React.ReactNode;
    intro: string[];
    howHeading: string;
    how: string;
    keyPoint: { heading: string; body: string };
    ctaText: string;
  }
> = {
  passport: {
    icon: '💾',
    title: (
      <>
        Back up to your
        <br />
        <span className="text-bitcoin">encrypted microSD card</span>
      </>
    ),
    intro: [
      "This is one of the Passport's best features. The microSD card that came in the box can store an encrypted backup of your seed phrase.",
      "Think of it as a second copy of your master key — but this one is locked inside a digital safe. Without your PIN, it's completely useless to anyone who finds it.",
    ],
    howHeading: 'How to do it',
    how: 'Follow the prompts on your Passport to create the encrypted backup. The device will walk you through each step. Insert the microSD card and confirm when prompted.',
    keyPoint: {
      heading: 'Important',
      body: 'This backup is encrypted — it\'s useless without your PIN. Store the microSD card separately from your Passport. Different room, different location. If something happens to one, you still have the other.',
    },
    ctaText: 'microSD backup created →',
  },
  seedsigner: {
    icon: '🔳',
    title: (
      <>
        Create a<br />
        <span className="text-bitcoin">SeedQR backup</span>
      </>
    ),
    intro: [
      'A SeedQR is your seed phrase encoded as a QR code you draw on paper. It\'s the signature SeedSigner move: next time you need your seed, you scan it with the camera — loaded in two seconds instead of typing 12 words.',
      'SeedSigner will display your SeedQR on screen along with a grid, so you can copy it square by square onto a template.',
    ],
    howHeading: 'How to do it',
    how: 'On your SeedSigner: Seeds → select your seed → Backup Seed → SeedQR. Choose the standard format, then copy the pattern square-by-square onto a printed SeedQR template (available on seedsigner.com), or punch it into a metal plate.',
    keyPoint: {
      heading: 'Treat it like the words',
      body: 'A SeedQR is your full seed — anyone who scans it owns your Bitcoin. Store it as carefully as your written words, in a different place. Never photograph it or display it near a camera.',
    },
    ctaText: 'SeedQR backup created →',
  },
  coldcardq: {
    icon: '💾',
    title: (
      <>
        Back up to an
        <br />
        <span className="text-bitcoin">encrypted microSD card</span>
      </>
    ),
    intro: [
      'Your Q can write a fully encrypted backup of everything — seed, settings, wallets — onto a microSD card in seconds.',
      'The backup is protected by its own password made of 12 BIP-39 words that the Q shows you once. Without those words, the file is useless to anyone who finds it.',
    ],
    howHeading: 'How to do it',
    how: 'Insert your microSD card, then choose Advanced / Tools → Backup → Backup System. The Q shows 12 backup-password words — write them on a separate piece of paper — then writes the encrypted file to the card.',
    keyPoint: {
      heading: 'Important',
      body: 'Store the microSD card and the 12 backup-password words in different places, and both away from your main seed phrase. Any two of these three together can restore your wallet — spread the risk.',
    },
    ctaText: 'Encrypted backup created →',
  },
};

export function Phase3_3({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
  const content = CONTENT[device.id];

  const handleContinue = () => {
    onComplete('3.3');
    navigate(stepToRoute(getNextStep('3.3')!));
  };

  return (
    <StepLayout
      stepId="3.3"
      onContinue={handleContinue}
      ctaText={content.ctaText}
      showWarningOnBack
    >
      <div className="space-y-6 stagger">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bitcoin/10 border border-bitcoin/20 anim-float">
          <span className="text-2xl">{content.icon}</span>
        </div>

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

        <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
          <div className="flex gap-3">
            <span className="text-bitcoin text-lg flex-shrink-0">🔑</span>
            <div>
              <p className="text-bitcoin font-semibold mb-1">
                {content.keyPoint.heading}
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {content.keyPoint.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
}
