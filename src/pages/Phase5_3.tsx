import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase5_3({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('5.3');
    navigate(stepToRoute(getNextStep('5.3')!));
  };

  return (
    <StepLayout stepId="5.3" onContinue={handleContinue} ctaText="Ready for the final step →">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-success/10 border border-success/20">
          <span className="text-2xl">📱</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          You now have a{' '}
          <span className="text-bitcoin">mobile wallet too</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            You're doing great. You now have two ways to interact with your Bitcoin:
            Sparrow on your desktop, and BULL Wallet on your phone.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-bitcoin/20 p-5 space-y-3">
          <h3 className="text-sm font-semibold text-bitcoin mb-2">When to use BULL Wallet</h3>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Smaller amounts and everyday transactions
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Checking your balance on the go
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Lightning payments for fast, low-fee transfers
            </li>
          </ul>
        </div>

        <p className="text-text font-medium text-center">
          One more phase to go — the moment you've been building toward.
        </p>
      </div>
    </StepLayout>
  );
}
