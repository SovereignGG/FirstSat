import { PHASES, STEPS, getStepIndex } from '../hooks/useProgress';

interface ProgressBarProps {
  currentStepId: string;
  completedSteps: string[];
}

export function ProgressBar({ currentStepId, completedSteps }: ProgressBarProps) {
  const currentIdx = getStepIndex(currentStepId);
  const currentPhase = currentIdx >= 0 ? STEPS[currentIdx].phase : 0;
  const totalSteps = STEPS.length - 1; // exclude landing
  const completedCount = completedSteps.length;
  const percent = Math.round((completedCount / totalSteps) * 100);

  return (
    <div className="w-full px-4 py-3 border-b border-border bg-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-2xl mx-auto">
        {/* Phase pills */}
        <div className="flex items-center gap-1.5 mb-2 overflow-x-auto">
          {PHASES.filter((p) => p.number > 0).map((phase) => {
            const isActive = phase.number === currentPhase;
            const phaseSteps = STEPS.filter((s) => s.phase === phase.number);
            const allDone = phaseSteps.every((s) =>
              completedSteps.includes(s.id)
            );
            const someStarted = phaseSteps.some(
              (s) =>
                completedSteps.includes(s.id) ||
                s.id === currentStepId
            );

            return (
              <div
                key={phase.number}
                className={`
                  flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-medium transition-all
                  ${allDone
                    ? 'bg-success/20 text-success'
                    : isActive
                      ? 'bg-bitcoin/20 text-bitcoin'
                      : someStarted
                        ? 'bg-border text-text-muted'
                        : 'bg-bg-card text-text-dim'
                  }
                `}
              >
                {allDone ? '✓ ' : ''}Phase {phase.number}
              </div>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-bitcoin rounded-full transition-all duration-500 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>
          <span className="text-xs text-text-muted font-medium flex-shrink-0">
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}
