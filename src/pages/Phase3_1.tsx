import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase3_1({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('3.1');
    navigate(stepToRoute(getNextStep('3.1')!));
  };

  return (
    <StepLayout stepId="3.1" onContinue={handleContinue} ctaText="I understand the importance →">
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-warning/10 border border-warning/20">
          <span className="text-2xl">⚠️</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          This is the most important step.
          <br />
          <span className="text-bitcoin">Take your time.</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Your seed phrase <strong className="text-text">is</strong> your Bitcoin. It's not a password — it's more like the master key to a vault that holds everything.
          </p>

          <p>
            The Passport device? That's a tool. A very good tool. But if you lost it tomorrow and still had your seed phrase, your Bitcoin would be completely safe. You could recover everything on a new device.
          </p>

          <div className="bg-bg-card rounded-xl border border-warning/20 p-5">
            <p className="text-warning font-semibold mb-2">Here's the flip side:</p>
            <p>
              If you lose your seed phrase, your Bitcoin is <strong className="text-text">gone forever</strong>. There's no bank to call. No customer support. No "forgot my password" button. No recovery. This is the price of true ownership — and it's worth it.
            </p>
          </div>

          <p className="text-text font-medium">
            This is sovereignty. You're in control now. Let's make sure you do this right.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
