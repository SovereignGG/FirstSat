import { useNavigate } from 'react-router-dom';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface LandingProps {
  onStart: () => void;
  hasProgress: boolean;
  currentStep: string;
}

export function Landing({ onStart, hasProgress, currentStep }: LandingProps) {
  const navigate = useNavigate();

  const handleStart = () => {
    onStart();
    navigate(stepToRoute(getNextStep('landing')!));
  };

  const handleResume = () => {
    navigate(stepToRoute(currentStep));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full text-center">
          {/* Bitcoin icon */}
          <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-bitcoin/10 border border-bitcoin/20">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M23.2 14.1c.3-2-1.2-3.1-3.3-3.8l.7-2.7-1.6-.4-.6 2.6c-.4-.1-.9-.2-1.3-.3l.7-2.6-1.7-.4-.7 2.7c-.3-.1-.7-.2-1-.3l-2.3-.6-.4 1.8s1.2.3 1.2.3c.7.2.8.6.8 1l-.8 3.3c0 .1.1.1.1.1l-.1 0-1.2 4.7c-.1.2-.3.6-.8.4 0 0-1.2-.3-1.2-.3l-.8 1.9 2.2.5c.4.1.8.2 1.2.3l-.7 2.7 1.6.4.7-2.7c.4.1.9.2 1.3.3l-.7 2.7 1.7.4.7-2.7c2.8.5 4.9.3 5.8-2.2.7-2 0-3.2-1.5-3.9 1.1-.3 1.9-1 2.1-2.5zm-3.8 5.3c-.5 2-3.9.9-5 .7l.9-3.6c1.1.3 4.6.8 4.1 2.9zm.5-5.4c-.5 1.8-3.3.9-4.2.7l.8-3.2c.9.2 3.9.7 3.4 2.5z"
                fill="#f7931a"
              />
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Your First Sat.
            <br />
            <span className="text-bitcoin">Safely in Cold Storage.</span>
          </h1>

          <p className="text-text-muted text-lg mb-10 max-w-md mx-auto leading-relaxed">
            A step-by-step guide to setting up your Foundation Passport and
            moving your first Bitcoin off an exchange. Takes about 30 minutes.
          </p>

          {/* What you'll need */}
          <div className="bg-bg-card rounded-2xl border border-border p-6 mb-8 text-left">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              What you'll need
            </h3>
            <ul className="space-y-3">
              {[
                { icon: '📦', text: 'Foundation Passport (in the box)' },
                { icon: '📱', text: 'Your phone (for Envoy app)' },
                { icon: '💻', text: 'Your computer (for Sparrow)' },
                { icon: '⏱️', text: '30 minutes of uninterrupted time' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-text-muted">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            {hasProgress && (
              <button
                onClick={handleResume}
                className="w-full py-4 px-6 rounded-xl font-semibold text-base bg-bitcoin hover:bg-bitcoin-hover text-white transition-all cursor-pointer active:scale-[0.98]"
              >
                Resume where you left off →
              </button>
            )}
            <button
              onClick={handleStart}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all cursor-pointer active:scale-[0.98] ${
                hasProgress
                  ? 'bg-bg-card hover:bg-bg-card-hover text-text border border-border'
                  : 'bg-bitcoin hover:bg-bitcoin-hover text-white'
              }`}
            >
              {hasProgress ? 'Start over →' : "Let's get started →"}
            </button>
          </div>

          <p className="text-xs text-text-dim mt-6">
            Open source. Free forever. No sign up required.
          </p>
        </div>
      </div>
    </div>
  );
}
