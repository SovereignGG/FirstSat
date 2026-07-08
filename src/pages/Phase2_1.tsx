import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { Checklist } from '../components/Checklist';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice, type DeviceId } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

const PASSPORT_PREFIXES = [
  'B799', 'B862', 'B863', 'B1026', 'B1032', 'B1269',
  'B1423', 'B1541', 'B1585', 'B1589', 'B1606', 'B1721', 'B1722',
];

const CONTENT: Record<
  DeviceId,
  {
    titlePre: string;
    titleHighlight: string;
    intro: string[];
    checklistHeading: string;
    checklistItems: string[];
    ctaText: string;
  }
> = {
  passport: {
    titlePre: 'First, verify your Passport is ',
    titleHighlight: 'genuine',
    intro: [
      'Before powering on your Passport, let\'s verify it hasn\'t been tampered with during shipping. This is called a "supply chain attack" — when someone intercepts a device before it reaches you and modifies it.',
      "It's rare, but checking takes 30 seconds and gives you peace of mind.",
    ],
    checklistHeading: "What's in the box",
    checklistItems: [
      'Passport device',
      'Setup card',
      '2x stickers',
      'Backup card',
      'microSD card',
      'USB-C cable',
      'Lightning adapter',
      'USB-C adapter',
    ],
    ctaText: 'My box looks good →',
  },
  seedsigner: {
    titlePre: 'First, gather your ',
    titleHighlight: 'SeedSigner parts',
    intro: [
      "SeedSigner is different from other hardware wallets: you build it yourself from generic, off-the-shelf parts. That's a feature — there's no single vendor to trust, and none of the parts know they'll become a Bitcoin device.",
      "Because SeedSigner never stores your seed, there's no tamper seal to check. Its security comes from open source software you'll verify yourself, in the next step.",
    ],
    checklistHeading: 'Parts checklist',
    checklistItems: [
      'Raspberry Pi Zero (v1.3 — the one without WiFi)',
      'WaveShare 1.3" LCD hat (240×240)',
      'Pi Zero camera + ribbon cable',
      'microSD card (512MB or larger)',
      'Case (optional, e.g. Orange Pill)',
      'Computer with an SD card slot',
    ],
    ctaText: 'I have all my parts →',
  },
  coldcardq: {
    titlePre: 'First, check the ',
    titleHighlight: 'tamper-evident bag',
    intro: [
      'Your ColdCard Q ships sealed inside a numbered, tamper-evident plastic bag. Before opening anything, let\'s make sure nobody intercepted it on the way to you — a so-called "supply chain attack".',
      "Take a close look at the bag before you cut it open. You'll confirm the bag number on the device screen at first boot.",
    ],
    checklistHeading: 'Inspect before opening',
    checklistItems: [
      'Bag is sealed and intact',
      'No cuts, punctures or re-gluing',
      'Bag number is printed and legible',
      'Write the bag number down',
      'Device looks undamaged inside',
      'Get 3x AAA batteries (or USB-C cable) ready',
    ],
    ctaText: 'My bag checks out →',
  },
};

export function Phase2_1({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
  const content = CONTENT[device.id];

  const handleContinue = () => {
    onComplete('2.1');
    navigate(stepToRoute(getNextStep('2.1')!));
  };

  return (
    <StepLayout stepId="2.1" onContinue={handleContinue} ctaText={content.ctaText}>
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          {content.titlePre}
          <span className="text-bitcoin">{content.titleHighlight}</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          {content.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {/* Passport-only: seal code verification */}
        {device.id === 'passport' && (
          <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3 card-lift">
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              Check the seal
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Look at the outer box — there should be a tamper-evident seal. Check that the
              seal code starts with one of these valid prefixes:
            </p>
            <div className="flex flex-wrap gap-2">
              {PASSPORT_PREFIXES.map((prefix) => (
                <span
                  key={prefix}
                  className="px-2 py-1 bg-bg text-text-muted text-xs font-mono rounded border border-border hover:border-bitcoin/50 hover:text-bitcoin transition-colors"
                >
                  {prefix}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* SeedSigner-only: where to buy note */}
        {device.id === 'seedsigner' && (
          <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-bitcoin">Tip:</strong> You can buy the parts
              from any electronics shop, or get a pre-assembled kit from a
              reputable SeedSigner vendor. Either way, you'll flash the software
              yourself — so you never have to trust the seller.
            </p>
          </div>
        )}

        {/* ColdCard-only: why the bag matters */}
        {device.id === 'coldcardq' && (
          <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-bitcoin">Why the number matters:</strong>{' '}
              Coinkite stores the bag number inside your Q's secure element at the
              factory. At first boot, the device shows it on screen — if it
              doesn't match the bag it arrived in, someone opened it in transit.
            </p>
          </div>
        )}

        {/* Interactive checklist */}
        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              {content.checklistHeading}
            </h3>
            <span className="text-xs text-text-dim">tap to check off</span>
          </div>
          <Checklist items={content.checklistItems} />
        </div>
      </div>
    </StepLayout>
  );
}
