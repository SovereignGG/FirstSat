import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase3_2({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('3.2');
    navigate(stepToRoute(getNextStep('3.2')!));
  };

  return (
    <StepLayout
      stepId="3.2"
      onContinue={handleContinue}
      ctaText="I've written down all 24 words →"
      showWarningOnBack
    >
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Write your seed phrase on the
          <br />
          <span className="text-bitcoin">backup card provided</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Your Passport will display 24 words, one at a time. These 24 words
            are your seed phrase — the master key to your Bitcoin.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {[
            {
              num: 1,
              text: 'Your Passport will display your 24 words. Take your time reading each one.',
            },
            {
              num: 2,
              text: 'Write each word carefully on the backup card included in the box. Use the numbered lines.',
            },
            {
              num: 3,
              text: 'Double-check every word and its number. One wrong letter could mean losing access to your Bitcoin.',
            },
            {
              num: 4,
              text: 'Do not photograph it. Do not type it anywhere. Do not store it digitally. Pen and paper only.',
            },
          ].map((step) => (
            <div
              key={step.num}
              className="flex gap-4 bg-bg-card rounded-xl border border-border p-4"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bitcoin/10 text-bitcoin font-bold text-sm flex items-center justify-center">
                {step.num}
              </div>
              <p className="text-sm text-text-muted leading-relaxed pt-1">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Warning box */}
        <div className="bg-warning/5 border border-warning/30 rounded-xl p-5">
          <div className="flex gap-3">
            <span className="text-warning text-lg flex-shrink-0">🚨</span>
            <div>
              <p className="text-warning font-semibold mb-1">Critical warning</p>
              <p className="text-sm text-text-muted leading-relaxed">
                Never enter your seed phrase on any website or app. No legitimate
                service will ever ask for it. Anyone who asks for your seed phrase
                is trying to steal your Bitcoin — no exceptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StepLayout>
  );
}
