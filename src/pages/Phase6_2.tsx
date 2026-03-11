import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase6_2({ onComplete }: Props) {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);

  const handleContinue = () => {
    onComplete('6.2');
    navigate(stepToRoute(getNextStep('6.2')!));
  };

  return (
    <StepLayout
      stepId="6.2"
      onContinue={handleContinue}
      ctaText="Address verified →"
      ctaDisabled={!verified}
    >
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Get your Passport address — and{' '}
          <span className="text-bitcoin">verify it on the device</span>
        </h1>

        <div className="space-y-3">
          <div className="flex gap-4 bg-bg-card rounded-xl border border-border p-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bitcoin/10 text-bitcoin font-bold text-sm flex items-center justify-center">
              1
            </div>
            <p className="text-sm text-text-muted leading-relaxed pt-1">
              In Sparrow or BULL Wallet, click <strong className="text-text">Receive</strong> to
              generate a new address. Copy it to your clipboard.
            </p>
          </div>

          <div className="flex gap-4 bg-warning/5 rounded-xl border border-warning/30 p-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-warning/10 text-warning font-bold text-sm flex items-center justify-center">
              2
            </div>
            <div className="pt-1">
              <p className="text-sm text-warning font-semibold mb-1">
                ⚠️ VERIFY THIS ADDRESS ON YOUR PASSPORT SCREEN
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                Use your Passport to verify the address matches. Malware on your computer
                could swap the address to steal your Bitcoin. The Passport screen cannot
                be tampered with — it's your source of truth. Always verify.
              </p>
            </div>
          </div>
        </div>

        {/* Non-skippable checkbox */}
        <label className="flex items-start gap-3 bg-bg-card rounded-xl border border-border p-4 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={verified}
            onChange={(e) => setVerified(e.target.checked)}
            className="mt-0.5 w-5 h-5 rounded border-border accent-bitcoin flex-shrink-0"
          />
          <span className="text-sm text-text-muted leading-relaxed">
            <strong className="text-text">I have verified the address on my Passport screen</strong>{' '}
            — the address shown in my wallet matches the address displayed on my Passport device.
          </span>
        </label>
      </div>
    </StepLayout>
  );
}
