import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_3({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();

  const handleContinue = () => {
    onComplete('2.3');
    navigate(stepToRoute(getNextStep('2.3')!));
  };

  if (device.id === 'passport') {
    return (
      <StepLayout stepId="2.3" onContinue={handleContinue} ctaText="Validation passed ✓">
        <div className="space-y-6 stagger">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Prove your device{' '}
            <span className="text-bitcoin">hasn't been tampered with</span>
          </h1>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              This step checks that your Passport's software hasn't been modified
              since it left Foundation's factory. It's like a digital fingerprint
              that proves authenticity.
            </p>

            <p>
              The Envoy app will walk you through this process. It takes less than a minute.
            </p>
          </div>

          <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3 card-lift">
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              How to validate
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Open the Envoy app on your phone and follow the supply chain validation steps.
              The app will scan your Passport and confirm it's genuine.
            </p>
          </div>

          <div className="bg-bg-card rounded-xl border border-border p-5 space-y-2">
            <p className="text-sm text-text-dim">
              <strong className="text-text-muted">Alternative:</strong>{' '}
              You can also validate manually at{' '}
              <a
                href="https://validate.foundation.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bitcoin underline hover:no-underline"
              >
                validate.foundation.xyz
              </a>
            </p>
          </div>
        </div>
      </StepLayout>
    );
  }

  if (device.id === 'seedsigner') {
    return (
      <StepLayout stepId="2.3" onContinue={handleContinue} ctaText="It boots — I see the menu ✓">
        <div className="space-y-6 stagger">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Assemble your SeedSigner and{' '}
            <span className="text-bitcoin">boot it up</span>
          </h1>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Time for the fun part — turning a pile of parts into a Bitcoin
              signing device. No soldering required; everything presses together.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                num: 1,
                text: 'Connect the camera ribbon cable to the Pi Zero\'s camera port (the small connector flips open, ribbon slides in, then flips closed).',
              },
              {
                num: 2,
                text: 'Press the WaveShare LCD hat onto the Pi Zero\'s GPIO pins until it sits flush.',
              },
              {
                num: 3,
                text: 'Fit everything into your case, if you have one.',
              },
              {
                num: 4,
                text: 'Power it via the Pi\'s USB port (a phone charger or power bank works). After ~30 seconds you\'ll see the SeedSigner home menu.',
              },
            ].map((step) => (
              <div
                key={step.num}
                className="step-row flex gap-4 bg-bg-card rounded-xl border border-border p-4"
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
              <span className="text-success font-medium">✓ Nothing to tamper with</span> —
              your SeedSigner has no WiFi, no Bluetooth, and no storage for secrets.
              Every time you unplug it, it forgets everything.
            </p>
          </div>
        </div>
      </StepLayout>
    );
  }

  // Specter DIY
  return (
    <StepLayout stepId="2.3" onContinue={handleContinue} ctaText="It boots — I see the home screen ✓">
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Power on your Specter DIY and{' '}
          <span className="text-bitcoin">confirm the version</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Time to see it come to life. Power comes from the mini-USB cable
            for now — you can switch to a powerbank once setup is done.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              num: 1,
              text: 'Move the power jumper back to the NORM position, then power the board via mini-USB (a phone charger or your computer both work).',
            },
            {
              num: 2,
              text: 'After a few seconds, the touchscreen boots into the Specter DIY home screen with the on-screen keyboard visible.',
            },
            {
              num: 3,
              text: "Open Device settings and check the firmware version matches the one you downloaded and verified in the previous step.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="step-row flex gap-4 bg-bg-card rounded-xl border border-border p-4"
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
            <span className="text-success font-medium">✓ Nothing to fake</span> —
            because you flashed the firmware yourself from a signature you
            checked, a mismatched version here is the tell that something
            went wrong during flashing, not a sign of tampering in transit.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
