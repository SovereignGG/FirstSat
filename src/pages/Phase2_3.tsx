import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_3({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('2.3');
    navigate(stepToRoute(getNextStep('2.3')!));
  };

  return (
    <StepLayout stepId="2.3" onContinue={handleContinue} ctaText="Validation passed ✓">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Prove your device{' '}
          <span className="text-bitcoin">hasn't been tampered with</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            This step checks that your Passport's software hasn't been modified
            since it left Foundation's factory. It's like a digital fingerprint
            that proves authenticity.
          </p>

          <p>
            The Envoy app will walk you through this process. It takes less than a minute.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            How to validate
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Open the Envoy app on your phone and follow the supply chain validation steps.
            The app will scan your Passport and confirm it's genuine.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-2">
          <p className="text-sm text-text-dim">
            <strong className="text-text-muted">Alternative:</strong>{' '}
            You can also validate manually at{' '}
            <a
              href="https://validate.foundation.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bitcoin underline hover:no-underline"
            >
              validate.foundation.xyz
            </a>
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
