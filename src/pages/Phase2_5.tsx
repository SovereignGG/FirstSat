import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_5({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('2.5');
    navigate(stepToRoute(getNextStep('2.5')!));
  };

  return (
    <StepLayout stepId="2.5" onContinue={handleContinue} ctaText="Firmware updated →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Update your <span className="text-bitcoin">firmware</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Like any device, your Passport gets software updates. These include the latest
            security patches and new features from the Foundation team.
          </p>

          <p>
            The Envoy app will prompt you if an update is available. Follow the on-screen
            instructions — it takes a couple of minutes.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            How to update
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Open the Envoy app and follow the firmware update prompts. The app will
            guide you through downloading and installing the update onto your Passport.
          </p>
        </div>

        <p className="text-sm text-text-dim">
          If no update is available, your Passport is already running the latest firmware.
          Continue to the next step.
        </p>
      </div>
    </StepLayout>
  );
}
