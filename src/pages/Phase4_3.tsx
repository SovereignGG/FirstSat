import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase4_3({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('4.3');
    navigate(stepToRoute(getNextStep('4.3')!));
  };

  return (
    <StepLayout stepId="4.3" onContinue={handleContinue} ctaText="Got it, next →">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-success/10 border border-success/20">
          <span className="text-2xl">✓</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          You now have a{' '}
          <span className="text-bitcoin">private desktop wallet</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Sparrow is now paired with your Passport. Here's a quick orientation of
            what you can see:
          </p>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Balance', desc: 'Your total Bitcoin holdings across all addresses' },
            { label: 'Addresses', desc: 'Your receive addresses — use a new one for each transaction for privacy' },
            { label: 'Transactions', desc: 'A complete history of all incoming and outgoing Bitcoin' },
          ].map((item) => (
            <div key={item.label} className="bg-bg-card rounded-xl border border-border p-4">
              <p className="text-text font-semibold text-sm">{item.label}</p>
              <p className="text-sm text-text-muted mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-bg-card rounded-xl border border-bitcoin/20 p-5">
          <h3 className="text-sm font-semibold text-bitcoin mb-2">When to use Sparrow</h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Use Sparrow for larger amounts and when you want full control. It has
            advanced features like coin control, multi-sig, and PSBT support.
            For everyday spending, your mobile wallet (next step) is more convenient.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
