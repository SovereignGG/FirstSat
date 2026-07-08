import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { AppBadges } from '../components/AppBadges';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase5_1({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();

  const handleContinue = () => {
    onComplete('5.1');
    navigate(stepToRoute(getNextStep('5.1')!));
  };

  return (
    <StepLayout stepId="5.1" onContinue={handleContinue} ctaText="BULL Wallet is installed →">
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Install <span className="text-bitcoin">BULL Wallet</span> on your phone
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            BULL Wallet is a self-custody mobile Bitcoin wallet built for everyday use.
            It gives you quick access to your Bitcoin on the go while keeping your keys
            secure with your {device.short}.
          </p>
        </div>

        <AppBadges
          appStoreUrl="https://apps.apple.com/cy/app/bull-bitcoin/id6743380972"
          playStoreUrl="https://play.google.com/store/apps/details?id=com.bullbitcoin.mobile"
        />
      </div>
    </StepLayout>
  );
}
