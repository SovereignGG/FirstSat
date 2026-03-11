import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase6_1({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('6.1');
    navigate(stepToRoute(getNextStep('6.1')!));
  };

  return (
    <StepLayout stepId="6.1" onContinue={handleContinue} ctaText="I'm ready for my test run →">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bitcoin/10 border border-bitcoin/20">
          <span className="text-2xl">🧪</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          We're going to do a{' '}
          <span className="text-bitcoin">test run first</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Before sending real money, we'll do a full dry run with a tiny amount.
            Think of it as a dress rehearsal — same steps, minimal risk.
          </p>

          <p>
            This builds your confidence and catches any mistakes before they matter.
            By the time you send larger amounts, you'll know exactly what to expect.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            What you'll need
          </h3>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Access to the exchange where your Bitcoin currently is (Coinbase, Kraken, etc.)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Your Passport, powered on and unlocked
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Sparrow or BULL Wallet open and connected
            </li>
          </ul>
        </div>
      </div>
    </StepLayout>
  );
}
