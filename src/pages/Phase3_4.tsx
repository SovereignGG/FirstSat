import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase3_4({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('3.4');
    navigate(stepToRoute(getNextStep('3.4')!));
  };

  return (
    <StepLayout
      stepId="3.4"
      onContinue={handleContinue}
      ctaText="I have my steel backup ✓"
      secondaryCta={{
        text: "I'll get a MicroSeed later →",
        onClick: () => {
          onComplete('3.4');
          navigate(stepToRoute(getNextStep('3.4')!));
        },
      }}
    >
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bitcoin/10 border border-bitcoin/20">
          <span className="text-2xl">🛡️</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Consider a steel backup for
          <br />
          <span className="text-bitcoin">long-term protection</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            The backup card you wrote your seed phrase on is paper. Paper burns.
            Paper gets wet. Paper fades over time.
          </p>

          <p>
            A steel backup is your seed phrase stamped or engraved into metal.
            It survives fires, floods, and decades of storage. For Bitcoin
            you're holding long-term, this is a worthwhile investment.
          </p>
        </div>

        {/* Recommendation card */}
        <div className="bg-bg-card rounded-xl border border-bitcoin/20 p-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-bitcoin font-bold text-sm uppercase tracking-wider">
              Recommended
            </span>
          </div>

          <h3 className="text-lg font-semibold text-text">MicroSeed</h3>

          <p className="text-sm text-text-muted leading-relaxed">
            A compact, durable steel backup solution. Stamp your 24 words into
            stainless steel that lasts a lifetime.
          </p>

          <div className="bg-bitcoin/10 rounded-lg p-3 flex items-center gap-3">
            <span className="text-bitcoin font-semibold text-sm">5% off</span>
            <p className="text-sm text-text-muted">
              Use code <strong className="text-text font-mono">UNRUGGABLE</strong>{' '}
              at{' '}
              <a
                href="https://microseed.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bitcoin underline hover:no-underline"
              >
                microseed.io
              </a>
            </p>
          </div>
        </div>

        <p className="text-sm text-text-dim italic">
          This step is optional but strongly recommended. You can always come back
          to it later.
        </p>
      </div>
    </StepLayout>
  );
}
