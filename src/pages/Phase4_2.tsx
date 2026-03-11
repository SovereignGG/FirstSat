import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase4_2({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('4.2');
    navigate(stepToRoute(getNextStep('4.2')!));
  };

  return (
    <StepLayout stepId="4.2" onContinue={handleContinue} ctaText="Passport is paired with Sparrow →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Connect your Passport to{' '}
          <span className="text-bitcoin">Sparrow</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Now let's pair your Passport with Sparrow so you can manage your
            Bitcoin from your computer.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              num: 1,
              text: 'In Sparrow, go to File → New Wallet. Give it a name.',
            },
            {
              num: 2,
              text: 'Select "Airgapped Hardware Wallet" and choose Foundation Passport.',
            },
            {
              num: 3,
              text: 'On your Passport, navigate to the pairing menu and select Sparrow.',
            },
            {
              num: 4,
              text: 'Scan the QR codes between the two devices, following the prompts on each.',
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

        <div className="bg-bg-card rounded-xl border border-border p-5">
          <p className="text-sm text-text-muted leading-relaxed">
            <span className="text-success font-medium">✓ Your keys stay safe</span> — Sparrow
            never has your private keys. It can see your balance and create transactions,
            but signing (approving) always happens on your Passport.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
