import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice, type DeviceId } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

const VERIFY_HOW: Record<DeviceId, string> = {
  passport:
    'Use your Passport to verify the address matches. Malware on your computer could swap the address to steal your Bitcoin. The Passport screen cannot be tampered with — it\'s your source of truth. Always verify.',
  seedsigner:
    'Load your seed on the SeedSigner, then use Tools → Address Explorer to display your receive addresses — or scan the address QR from Sparrow with the SeedSigner camera to confirm it belongs to your seed. Malware on your computer could swap the address; the SeedSigner screen is your source of truth. Always verify.',
  specterdiy:
    "Load your key on the Specter DIY, then use Receive addresses to display them on the touchscreen — or scan the address QR from Sparrow with the built-in scanner to confirm it belongs to your seed. Malware on your computer could swap the address; the Specter DIY screen is your source of truth. Always verify.",
};

export function Phase6_2({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();
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
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Get your receive address — and{' '}
          <span className="text-bitcoin">verify it on the device</span>
        </h1>

        <div className="space-y-3">
          <div className="step-row flex gap-4 bg-bg-card rounded-xl border border-border p-4">
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
                ⚠️ VERIFY THIS ADDRESS ON YOUR {device.short.toUpperCase()} SCREEN
              </p>
              <p className="text-sm text-text-muted leading-relaxed">
                {VERIFY_HOW[device.id]}
              </p>
            </div>
          </div>
        </div>

        {/* Non-skippable checkbox */}
        <label className={`check-item flex items-start gap-3 bg-bg-card rounded-xl border border-border p-4 cursor-pointer select-none ${verified ? 'checked' : ''}`}>
          <input
            type="checkbox"
            checked={verified}
            onChange={(e) => setVerified(e.target.checked)}
            className="mt-0.5 w-5 h-5 rounded border-border accent-bitcoin flex-shrink-0"
          />
          <span className="text-sm text-text-muted leading-relaxed">
            <strong className="text-text">
              I have verified the address on my {device.short} screen
            </strong>{' '}
            — the address shown in my wallet matches the address displayed on my{' '}
            {device.short}.
          </span>
        </label>
      </div>
    </StepLayout>
  );
}
