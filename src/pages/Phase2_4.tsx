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
            Set a PIN to <span className="text-bitcoin">protect your Passport Core</span>
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

  // Specter DIY
  return (
    <StepLayout stepId="2.4" onContinue={handleContinue} ctaText="I understand agnostic mode →">
      <div className="space-y-6 stagger">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          No PIN needed — your Specter DIY{' '}
          <span className="text-bitcoin">forgets on power off</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Specter DIY defaults to what its creators call{' '}
            <strong className="text-text">"agnostic mode"</strong>: your seed
            only exists in the board's memory while it's powered on. Unplug
            it, and it's gone — nothing is written to storage.
          </p>
          <p>
            Each time you want to sign something, you'll load your seed for a
            few seconds — by scanning a SeedQR with the scanner module (you'll
            make one in the next phase) or entering the words on the touchscreen.
          </p>
        </div>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            What this means for you
          </h3>
          <ul className="space-y-2 text-sm text-text-muted">
            <li className="flex items-start gap-2">
              <span className="text-bitcoin mt-0.5">•</span>
              A thief who steals your board gets a generic dev kit — there's
              nothing Bitcoin-specific on it
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
            <strong className="text-bitcoin">Advanced option:</strong>{' '}
            Specter DIY also supports an optional BIP-39 passphrase (a 13th or
            25th word) for a hidden wallet, and a "reckless mode" that stores
            an encrypted seed on the board behind a PIN. Both are for advanced
            users — skip them for now and rely on your written backup instead.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
