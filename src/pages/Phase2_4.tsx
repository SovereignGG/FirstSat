import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';
import { useDevice } from '../devices';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase2_4({ onComplete }: Props) {
  const navigate = useNavigate();
  const device = useDevice();

  const handleContinue = () => {
    onComplete('2.4');
    navigate(stepToRoute(getNextStep('2.4')!));
  };

  if (device.id === 'passport') {
    return (
      <StepLayout stepId="2.4" onContinue={handleContinue} ctaText="PIN is set →">
        <div className="space-y-6 stagger">
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

  if (device.id === 'seedsigner') {
    return (
      <StepLayout stepId="2.4" onContinue={handleContinue} ctaText="I understand statelessness →">
        <div className="space-y-6 stagger">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            No PIN needed — your SeedSigner{' '}
            <span className="text-bitcoin">stores nothing</span>
          </h1>

          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              Other hardware wallets keep your seed inside the device, so they need a
              PIN to guard it. SeedSigner flips that model:{' '}
              <strong className="text-text">
                your seed only exists on the device while it's powered on
              </strong>
              . Unplug it, and it's gone.
            </p>
            <p>
              Each time you want to sign a transaction, you'll load your seed for a
              few seconds — by scanning a SeedQR backup (you'll make one in the next
              phase) or typing the words.
            </p>
          </div>

          <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
              What this means for you
            </h3>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-start gap-2">
                <span className="text-bitcoin mt-0.5">•</span>
                A thief who steals your SeedSigner gets a useless gadget — there's
                nothing on it
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bitcoin mt-0.5">•</span>
                Your paper backup <strong className="text-text">is</strong> your
                wallet — protecting it is everything
              </li>
              <li className="flex items-start gap-2">
                <span className="text-bitcoin mt-0.5">•</span>
                No PIN to forget, no device to brick
              </li>
            </ul>
          </div>

          <div className="bg-bitcoin/5 border border-bitcoin/20 rounded-xl p-5">
            <p className="text-sm text-text-muted leading-relaxed">
              <strong className="text-bitcoin">Security shifts to your backups:</strong>{' '}
              Phase 3 is extra important for SeedSigner users. Whoever holds your
              seed words holds your Bitcoin — so we'll store them well.
            </p>
          </div>
        </div>
      </StepLayout>
    );
  }

  // ColdCard Q
  return (
    <StepLayout stepId="2.4" onContinue={handleContinue} ctaText="PIN is set →">
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Set your PIN and meet your{' '}
          <span className="text-bitcoin">anti-phishing words</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            The Q uses a two-part PIN, like <span className="font-mono text-text">1234-5678</span>.
            Between the two parts, the device shows you two special words — your
            anti-phishing words.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              num: 1,
              text: 'Choose a PIN prefix (2-6 digits) and enter it.',
            },
            {
              num: 2,
              text: 'The Q displays two anti-phishing words. Memorize them — they\'ll be the same every time you enter this prefix on this device.',
            },
            {
              num: 3,
              text: 'Enter the second part of your PIN (2-6 digits) to finish.',
            },
            {
              num: 4,
              text: 'From now on: if the words ever look different after your prefix, stop — you may be holding a swapped or tampered device.',
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

        <div className="bg-warning/5 border border-warning/30 rounded-xl p-5">
          <div className="flex gap-3">
            <span className="text-warning text-lg flex-shrink-0">⚠️</span>
            <div>
              <p className="text-warning font-semibold mb-1">There is no "forgot PIN"</p>
              <p className="text-sm text-text-muted leading-relaxed">
                The Q slows down after every wrong attempt to block brute-force
                attacks, and there's no reset or recovery. Pick a PIN you'll
                remember — and skip the "duress" and "brick me" features for now.
                They're for advanced users.
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
