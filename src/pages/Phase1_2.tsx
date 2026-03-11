import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

const phaseDescriptions = [
  { phase: 1, desc: 'Understand why self-custody matters', time: '2 min', icon: '💡' },
  { phase: 2, desc: 'Set up your Foundation Passport', time: '10 min', icon: '📦' },
  { phase: 3, desc: 'Secure your seed phrase (most critical)', time: '8 min', icon: '🔐' },
  { phase: 4, desc: 'Connect to Sparrow on your computer', time: '5 min', icon: '💻' },
  { phase: 5, desc: 'Connect to BULL Wallet on your phone', time: '3 min', icon: '📱' },
  { phase: 6, desc: 'Send your first sat to cold storage', time: '5 min', icon: '🎉' },
];

export function Phase1_2({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('1.2');
    navigate(stepToRoute(getNextStep('1.2')!));
  };

  return (
    <StepLayout stepId="1.2" onContinue={handleContinue} ctaText="Start Phase 2 →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Here's your <span className="text-bitcoin">journey</span>
        </h1>

        <p className="text-text-muted leading-relaxed">
          Six phases, about 30 minutes total. Each one builds on the last.
          By the end, you'll have Bitcoin in cold storage that only you control.
        </p>

        {/* Phase map */}
        <div className="space-y-3">
          {phaseDescriptions.map((item) => (
            <div
              key={item.phase}
              className="flex items-center gap-4 bg-bg-card rounded-xl border border-border p-4 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bitcoin/10 flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-bitcoin">
                    Phase {item.phase}
                  </span>
                  <span className="text-xs text-text-dim">· {item.time}</span>
                </div>
                <p className="text-sm text-text-muted mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-text-dim text-center">
          Estimated total: ~30 minutes
        </p>
      </div>
    </StepLayout>
  );
}
