import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { AppBadges } from '../components/AppBadges';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_2({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();

  const handleContinue = () => {
    onComplete('2.2');
    navigate(stepToRoute(getNextStep('2.2')!));
  };

  if (device.id === 'passport') {
    return (
      <StepLayout stepId="2.2" onContinue={handleContinue} ctaText="I've downloaded Envoy →">
        <div className="space-y-6 stagger">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Download the <span className="text-bitcoin">Envoy app</span> on your phone
          </h1>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Envoy is Foundation's companion app, designed specifically for your Passport.
              It's what you'll use to pair with your device and manage your wallet on mobile.
            </p>
          </div>

          <AppBadges
            appStoreUrl="https://apps.apple.com/app/envoy-by-foundation/id1584811818"
            playStoreUrl="https://play.google.com/store/apps/details?id=com.foundationdevices.envoy"
          />

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

  if (device.id === 'seedsigner') {
    return (
      <StepLayout stepId="2.2" onContinue={handleContinue} ctaText="SeedSigner OS is on my microSD →">
        <div className="space-y-6 stagger">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Download and flash <span className="text-bitcoin">SeedSigner OS</span>
          </h1>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              SeedSigner runs its own tiny operating system from the microSD card.
              You'll download the latest release and write ("flash") it onto the
              card from your computer.
            </p>
          </div>

          <a
            href="https://seedsigner.com/downloads"
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift block bg-bg-card border border-border rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text font-semibold">Download SeedSigner OS</p>
                <p className="text-sm text-text-dim mt-1">seedsigner.com/downloads</p>
              </div>
              <span className="text-text-muted">→</span>
            </div>
          </a>

          <div className="space-y-3">
            {[
              {
                num: 1,
                text: 'Download the image for your hardware (Pi Zero) from seedsigner.com or the official GitHub releases.',
              },
              {
                num: 2,
                text: 'Verify the download — the site explains how to check the PGP signature. This proves the software is the real, unmodified release.',
              },
              {
                num: 3,
                text: 'Flash the image to your microSD card using Raspberry Pi Imager or Balena Etcher.',
              },
              {
                num: 4,
                text: 'Insert the microSD into the Pi Zero. Keep the device powered off for now.',
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
              <span className="text-success font-medium">✓ Why verify?</span> — With
              SeedSigner, the software <em>is</em> the device. Verifying the signature
              is the SeedSigner equivalent of checking a tamper-evident seal.
            </p>
          </div>
        </div>
      </StepLayout>
    );
  }

  // ColdCard Q
  return (
    <StepLayout stepId="2.2" onContinue={handleContinue} ctaText="My Q is powered on →">
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Power on your <span className="text-bitcoin">ColdCard Q</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Cut open the bag (keep it — the number is on it), and let's bring
            your Q to life. It runs on batteries or USB-C, and never needs to be
            plugged into a computer.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              num: 1,
              text: 'Open the battery compartment on the back and insert 3x AAA batteries — or connect a USB-C cable to a wall charger.',
            },
            {
              num: 2,
              text: 'Hold the power button until the screen lights up.',
            },
            {
              num: 3,
              text: 'Read and accept the Terms of Sale shown on screen.',
            },
            {
              num: 4,
              text: "The Q will display its serial and bag number — don't tap past this yet. We'll verify it in the next step.",
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
            <span className="text-success font-medium">✓ Fully airgapped</span> — the
            Q talks to the outside world through QR codes, NFC and a microSD card.
            No companion app is required; you'll pair it directly with Sparrow and
            BULL Wallet later.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
