import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

const VALID_PREFIXES = [
  'B799', 'B862', 'B863', 'B1026', 'B1032', 'B1269',
  'B1423', 'B1541', 'B1585', 'B1589', 'B1606', 'B1721', 'B1722',
];

const BOX_CONTENTS = [
  'Passport device',
  'Setup card',
  '2x stickers',
  'Backup card',
  'microSD card',
  'USB-C cable',
  'Lightning adapter',
  'USB-C adapter',
];

export function Phase2_1({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('2.1');
    navigate(stepToRoute(getNextStep('2.1')!));
  };

  return (
    <StepLayout stepId="2.1" onContinue={handleContinue} ctaText="My box looks good →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          First, verify your Passport is{' '}
          <span className="text-bitcoin">genuine</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Before powering on your Passport, let's verify it hasn't been tampered with
            during shipping. This is called a "supply chain attack" — when someone
            intercepts a device before it reaches you and modifies it.
          </p>
          <p>
            It's rare, but checking takes 30 seconds and gives you peace of mind.
          </p>
        </div>

        {/* Seal verification */}
        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            Check the seal
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Look at the outer box — there should be a tamper-evident seal. Check that the
            seal code starts with one of these valid prefixes:
          </p>
          <div className="flex flex-wrap gap-2">
            {VALID_PREFIXES.map((prefix) => (
              <span
                key={prefix}
                className="px-2 py-1 bg-bg text-text-muted text-xs font-mono rounded border border-border"
              >
                {prefix}
              </span>
            ))}
          </div>
        </div>

        {/* Box contents */}
        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            What's in the box
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {BOX_CONTENTS.map((item) => (
              <label key={item} className="flex items-center gap-2 text-sm text-text-muted">
                <span className="w-4 h-4 rounded border border-border flex-shrink-0" />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </StepLayout>
  );
}
