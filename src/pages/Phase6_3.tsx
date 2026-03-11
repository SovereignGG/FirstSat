import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase6_3({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('6.3');
    navigate(stepToRoute(getNextStep('6.3')!));
  };

  return (
    <StepLayout stepId="6.3" onContinue={handleContinue} ctaText="Test transaction confirmed ✓">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Send a <span className="text-bitcoin">small test amount</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Go to your exchange and send the smallest amount it allows — even $1
            worth of Bitcoin is enough. Paste the receive address you verified in
            the previous step.
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              What to expect
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-bitcoin mt-0.5">•</span>
                The transaction will appear as "pending" or "unconfirmed" first
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bitcoin mt-0.5">•</span>
                It takes 10-60 minutes to confirm, depending on network fees
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bitcoin mt-0.5">•</span>
                Watch it arrive in Sparrow or BULL Wallet — you'll see the balance update
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
          <p className="text-sm text-text-muted leading-relaxed">
            <strong className="text-bitcoin">You're doing great.</strong>{' '}
            Once this transaction confirms, you'll have Bitcoin in cold storage
            that only you control. That's a huge milestone.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
