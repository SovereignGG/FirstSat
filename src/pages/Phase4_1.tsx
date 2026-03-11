import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase4_1({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('4.1');
    navigate(stepToRoute(getNextStep('4.1')!));
  };

  return (
    <StepLayout stepId="4.1" onContinue={handleContinue} ctaText="Sparrow is installed →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Install <span className="text-bitcoin">Sparrow</span> on your computer
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            Sparrow is the best desktop Bitcoin wallet available. It's open source,
            privacy-focused, and works perfectly with your Passport.
          </p>
          <p>
            Think of Sparrow as your control center — it lets you see your balance,
            manage transactions, and interact with your Passport from your computer.
          </p>
        </div>

        <a
          href="https://sparrowwallet.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-bg-card hover:bg-bg-card-hover border border-border rounded-xl p-5 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-text font-semibold">Download Sparrow Wallet</p>
              <p className="text-sm text-text-dim mt-1">sparrowwallet.com</p>
            </div>
            <span className="text-text-muted">→</span>
          </div>
        </a>

        <div className="bg-bg-card rounded-xl border border-border p-5 space-y-2">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider">
            Verify your download
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            The Sparrow website provides checksums to verify your download is authentic.
            This confirms no one modified the file between their server and your computer.
            It's optional but good practice — the instructions are on the download page.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
