import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPrevStep, stepToRoute, STEPS, getStepIndex } from '../hooks/useProgress';

interface StepLayoutProps {
  stepId: string;
  children: ReactNode;
  onContinue: () => void;
  ctaText: string;
  ctaDisabled?: boolean;
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  showWarningOnBack?: boolean;
}

export function StepLayout({
  stepId,
  children,
  onContinue,
  ctaText,
  ctaDisabled = false,
  secondaryCta,
  showWarningOnBack = false,
}: StepLayoutProps) {
  const navigate = useNavigate();
  const prevStep = getPrevStep(stepId);
  const stepIdx = getStepIndex(stepId);
  const step = STEPS[stepIdx];

  const handleBack = () => {
    if (showWarningOnBack) {
      const confirmed = window.confirm(
        'Are you sure you want to go back? Make sure you have completed this step before leaving.'
      );
      if (!confirmed) return;
    }
    if (prevStep) {
      navigate(stepToRoute(prevStep));
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 min-h-[calc(100vh-120px)] flex flex-col">
      {/* Step indicator */}
      <div className="flex items-center gap-3 mb-8">
        {prevStep && (
          <button
            onClick={handleBack}
            className="p-2 -ml-2 text-text-muted hover:text-text transition-colors"
            aria-label="Go back"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
        {step && step.phase > 0 && (
          <span className="text-sm text-text-dim">
            Phase {step.phase} · Step {stepId}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">{children}</div>

      {/* CTA */}
      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={onContinue}
          disabled={ctaDisabled}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold text-base transition-all
            ${ctaDisabled
              ? 'bg-border text-text-dim cursor-not-allowed'
              : 'bg-bitcoin hover:bg-bitcoin-hover text-white cursor-pointer active:scale-[0.98]'
            }
          `}
        >
          {ctaText}
        </button>
        {secondaryCta && (
          <button
            onClick={secondaryCta.onClick}
            className="w-full py-3 px-6 rounded-xl font-medium text-sm text-text-muted hover:text-text border border-border hover:border-text-dim transition-all cursor-pointer"
          >
            {secondaryCta.text}
          </button>
        )}
      </div>
    </div>
  );
}
