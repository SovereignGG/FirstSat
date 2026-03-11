import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase5_2({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('5.2');
    navigate(stepToRoute(getNextStep('5.2')!));
  };

  return (
    <StepLayout stepId="5.2" onContinue={handleContinue} ctaText="Passport is paired with BULL Wallet →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Connect your Passport to{' '}
          <span className="text-bitcoin">BULL Wallet</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Let's pair your Passport with BULL Wallet so you can manage your
            Bitcoin from your phone.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              num: 1,
              text: 'Open BULL Wallet on your phone and start the hardware wallet pairing process.',
            },
            {
              num: 2,
              text: 'On your Passport, navigate to the pairing menu and select the BULL Wallet option.',
            },
            {
              num: 3,
              text: 'Scan the QR codes between your phone and Passport, following the prompts on each device.',
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
      </div>
    </StepLayout>
  );
}
