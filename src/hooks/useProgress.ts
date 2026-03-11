import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'first-sat-progress';

export interface ProgressState {
  completedSteps: string[];
  currentStep: string;
}

const defaultState: ProgressState = {
  completedSteps: [],
  currentStep: 'landing',
};

function loadProgress(): ProgressState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore
  }
  return defaultState;
}

export const STEPS = [
  { id: 'landing', phase: 0, label: 'Welcome' },
  { id: '1.1', phase: 1, label: 'The Problem' },
  { id: '1.2', phase: 1, label: 'Your Journey' },
  { id: '2.1', phase: 2, label: 'Unboxing' },
  { id: '2.2', phase: 2, label: 'Download Envoy' },
  { id: '2.3', phase: 2, label: 'Validation' },
  { id: '2.4', phase: 2, label: 'Set PIN' },
  { id: '2.5', phase: 2, label: 'Firmware' },
  { id: '3.1', phase: 3, label: 'Seed Phrase Intro' },
  { id: '3.2', phase: 3, label: 'Write It Down' },
  { id: '3.3', phase: 3, label: 'microSD Backup' },
  { id: '3.4', phase: 3, label: 'Steel Backup' },
  { id: '4.1', phase: 4, label: 'Install Sparrow' },
  { id: '4.2', phase: 4, label: 'Pair Sparrow' },
  { id: '4.3', phase: 4, label: 'Sparrow Overview' },
  { id: '5.1', phase: 5, label: 'Install BULL' },
  { id: '5.2', phase: 5, label: 'Pair BULL' },
  { id: '5.3', phase: 5, label: 'BULL Overview' },
  { id: '6.1', phase: 6, label: 'Before You Send' },
  { id: '6.2', phase: 6, label: 'Verify Address' },
  { id: '6.3', phase: 6, label: 'Test Transaction' },
  { id: '6.4', phase: 6, label: 'Unruggable!' },
] as const;

export const PHASES = [
  { number: 0, name: 'Welcome', steps: 1 },
  { number: 1, name: 'Why This Matters', steps: 2 },
  { number: 2, name: 'Passport Setup', steps: 5 },
  { number: 3, name: 'Seed Phrase', steps: 4 },
  { number: 4, name: 'Sparrow Wallet', steps: 3 },
  { number: 5, name: 'BULL Wallet', steps: 3 },
  { number: 6, name: 'First Sat', steps: 4 },
] as const;

export function stepToRoute(stepId: string): string {
  if (stepId === 'landing') return '/';
  return `/step/${stepId}`;
}

export function routeToStep(path: string): string {
  if (path === '/') return 'landing';
  const match = path.match(/^\/step\/(.+)$/);
  return match ? match[1] : 'landing';
}

export function getStepIndex(stepId: string): number {
  return STEPS.findIndex((s) => s.id === stepId);
}

export function getNextStep(stepId: string): string | null {
  const idx = getStepIndex(stepId);
  if (idx < 0 || idx >= STEPS.length - 1) return null;
  return STEPS[idx + 1].id;
}

export function getPrevStep(stepId: string): string | null {
  const idx = getStepIndex(stepId);
  if (idx <= 0) return null;
  return STEPS[idx - 1].id;
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const completeStep = useCallback((stepId: string) => {
    setState((prev) => {
      if (prev.completedSteps.includes(stepId)) return prev;
      const next = getNextStep(stepId);
      return {
        completedSteps: [...prev.completedSteps, stepId],
        currentStep: next ?? prev.currentStep,
      };
    });
  }, []);

  const canAccess = useCallback(
    (stepId: string): boolean => {
      if (stepId === 'landing') return true;
      const idx = getStepIndex(stepId);
      if (idx <= 0) return true;
      const prevStepId = STEPS[idx - 1].id;
      return state.completedSteps.includes(prevStepId);
    },
    [state.completedSteps]
  );

  const isCompleted = useCallback(
    (stepId: string): boolean => state.completedSteps.includes(stepId),
    [state.completedSteps]
  );

  const getProgress = useCallback((): number => {
    return Math.round((state.completedSteps.length / (STEPS.length - 1)) * 100);
  }, [state.completedSteps]);

  const resetProgress = useCallback(() => {
    setState(defaultState);
  }, []);

  return {
    ...state,
    completeStep,
    canAccess,
    isCompleted,
    getProgress,
    resetProgress,
  };
}
