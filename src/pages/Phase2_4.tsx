import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_4({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('2.4');
    navigate(stepToRoute(getNextStep('2.4')!));
  };

  return (
    <StepLayout stepId="2.4" onContinue={handleContinue} ctaText="PIN is set →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Set a PIN to <span className="text-bitcoin">protect your Passport</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Your PIN is the first line of defense. It prevents anyone who physically
            has your Passport from accessing your Bitcoin.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            PIN guidelines
          </h3>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              6-12 characters, letters and numbers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Don't use birthdays, 123456, or anything easily guessable
            </li>
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              Make it something you can remember, but hard for others to guess
            </li>
          </ul>
        </div>

        {/* Warning */}
        <div className="bg-warning/5 border border-warning/30 rounded-xl p-5">
          <div className="flex gap-3">
            <span className="text-warning text-lg flex-shrink-0">⚠️</span>
            <div>
              <p className="text-warning font-semibold mb-1">21 attempts. That's it.</p>
              <p className="text-sm text-text-muted leading-relaxed">
                After 21 wrong PIN attempts, your Passport is permanently disabled.
                There is no recovery. This is a security feature — it protects you from
                brute force attacks, but it means you must remember your PIN.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
          <p className="text-sm text-text-muted leading-relaxed">
            <strong className="text-bitcoin">Strong recommendation:</strong>{' '}
            Write your PIN down and store it separately from your seed phrase.
            Different location, different hiding spot.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
