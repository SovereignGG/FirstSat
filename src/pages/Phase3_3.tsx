import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase3_3({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('3.3');
    navigate(stepToRoute(getNextStep('3.3')!));
  };

  return (
    <StepLayout
      stepId="3.3"
      onContinue={handleContinue}
      ctaText="microSD backup created →"
      showWarningOnBack
    >
      <div className="space-y-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-bitcoin/10 border border-bitcoin/20">
          <span className="text-2xl">💾</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Back up to your
          <br />
          <span className="text-bitcoin">encrypted microSD card</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            This is one of the Passport's best features. The microSD card that
            came in the box can store an encrypted backup of your seed phrase.
          </p>

          <p>
            Think of it as a second copy of your master key — but this one is
            locked inside a digital safe. Without your PIN, it's completely
            useless to anyone who finds it.
          </p>
        </div>

        {/* How it works */}
        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            How to do it
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Follow the prompts on your Passport to create the encrypted backup.
            The device will walk you through each step. Insert the microSD card
            and confirm when prompted.
          </p>
        </div>

        {/* Key point */}
        <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
          <div className="flex gap-3">
            <span className="text-bitcoin text-lg flex-shrink-0">🔑</span>
            <div>
              <p className="text-bitcoin font-semibold mb-1">Important</p>
              <p className="text-sm text-text-muted leading-relaxed">
                This backup is encrypted — it's useless without your PIN. Store
                the microSD card separately from your Passport. Different room,
                different location. If something happens to one, you still have
                the other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
}
