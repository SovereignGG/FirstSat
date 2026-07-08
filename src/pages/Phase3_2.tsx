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
    intro: string;
    steps: string[];
    ctaText: string;
  }
> = {
  passport: {
    title: (
      <>
        Write your seed phrase on the
        <br />
        <span className="text-bitcoin">backup card provided</span>
      </>
    ),
    intro:
      'Your Passport will display 24 words, one at a time. These 24 words are your seed phrase — the master key to your Bitcoin.',
    steps: [
      'Your Passport will display your 24 words. Take your time reading each one.',
      'Write each word carefully on the backup card included in the box. Use the numbered lines.',
      'Double-check every word and its number. One wrong letter could mean losing access to your Bitcoin.',
      'Do not photograph it. Do not type it anywhere. Do not store it digitally. Pen and paper only.',
    ],
    ctaText: "I've written down all 24 words →",
  },
  seedsigner: {
    title: (
      <>
        Generate your seed and
        <br />
        <span className="text-bitcoin">write down the words</span>
      </>
    ),
    intro:
      'SeedSigner lets you create your seed from real-world randomness — dice rolls or a photo. Pick whichever appeals to you; both are excellent.',
    steps: [
      'On the home menu choose Seeds → New Seed. Pick "Dice rolls" (roll a die 50 times for 12 words) or "Camera image" (snap a photo — its noise becomes your randomness).',
      'SeedSigner shows your 12 seed words. Take your time reading each one.',
      'Write each word carefully on paper, numbered 1 to 12. Double-check every word — one wrong letter could mean losing access to your Bitcoin.',
      'Confirm the words on the device when prompted. Remember: when the device powers off, this paper is the only copy.',
      'Do not photograph it. Do not type it anywhere. Do not store it digitally. Pen and paper only.',
    ],
    ctaText: "I've written down all 12 words →",
  },
  coldcardq: {
    title: (
      <>
        Create your wallet and
        <br />
        <span className="text-bitcoin">write down the words</span>
      </>
    ),
    intro:
      'On your Q, choose New Seed Words from the main menu. The device generates 24 words using its hardware random number generators — your seed phrase, the master key to your Bitcoin.',
    steps: [
      'Your Q will display your 24 words on its big screen. Take your time reading each one.',
      'Write each word carefully on paper (Coinkite includes a backup card in some packages — any paper works). Number them 1 to 24.',
      'Double-check every word and its number. One wrong letter could mean losing access to your Bitcoin.',
      'The Q will quiz you on a few random words to prove you wrote them down. Pass the quiz and your wallet is live.',
      'Do not photograph it. Do not type it anywhere. Do not store it digitally. Pen and paper only.',
    ],
    ctaText: "I've written down all 24 words →",
  },
};

export function Phase3_2({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
  const content = CONTENT[device.id];

  const handleContinue = () => {
    onComplete('3.2');
    navigate(stepToRoute(getNextStep('3.2')!));
  };

  return (
    <StepLayout
      stepId="3.2"
      onContinue={handleContinue}
      ctaText={content.ctaText}
      showWarningOnBack
    >
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          {content.title}
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>{content.intro}</p>
        </div>

        {/* Steps */}
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

        {/* Warning box */}
        <div className="bg-warning/5 border border-warning/30 rounded-xl p-5">
          <div className="flex gap-3">
            <span className="text-warning text-lg flex-shrink-0">🚨</span>
            <div>
              <p className="text-warning font-semibold mb-1">Critical warning</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Never enter your seed phrase on any website or app. No legitimate
                service will ever ask for it. Anyone who asks for your seed phrase
                is trying to steal your Bitcoin — no exceptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
}
