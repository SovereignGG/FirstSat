import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_2({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('2.2');
    navigate(stepToRoute(getNextStep('2.2')!));
  };

  return (
    <StepLayout stepId="2.2" onContinue={handleContinue} ctaText="I've downloaded Envoy →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Download the <span className="text-bitcoin">Envoy app</span> on your phone
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Envoy is Foundation's companion app, designed specifically for your Passport.
            It's what you'll use to pair with your device and manage your wallet on mobile.
          </p>
        </div>

        {/* App store badges */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://apps.apple.com/app/envoy-by-foundation/id1584811818"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-bg-card hover:bg-bg-card-hover border border-border rounded-xl p-4 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-text">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-sm font-medium">App Store</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.foundationdevices.envoy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-bg-card hover:bg-bg-card-hover border border-border rounded-xl p-4 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-text">
              <path d="M3.18 23.02c-.41-.24-.68-.71-.68-1.22V2.2c0-.51.27-.98.68-1.22l11.06 11.02L3.18 23.02zM15.76 13.52L5.56 23.72l12.08-6.96-1.88-3.24zM20.65 10.88L17.64 9.14l-2.12 2.86 2.12 2 3.01-1.74c.55-.32.55-1.06 0-1.38zM5.56.28l10.2 10.2 1.88-1.88L5.56.28z" />
            </svg>
            <span className="text-sm font-medium">Google Play</span>
          </a>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5">
          <p className="text-sm text-text-muted leading-relaxed">
            <span className="text-success font-medium">✓ Open source</span> — Envoy is built
            by Foundation, the same team that made your Passport. The code is publicly
            auditable, and the app is designed to work seamlessly with your hardware wallet.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
