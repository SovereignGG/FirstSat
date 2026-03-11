import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useProgress, routeToStep } from './hooks/useProgress';
import { ProgressBar } from './components/ProgressBar';
import { Footer } from './components/Footer';
import { Landing } from './pages/Landing';
import { Phase1_1 } from './pages/Phase1_1';
import { Phase1_2 } from './pages/Phase1_2';
import { Phase2_1 } from './pages/Phase2_1';
import { Phase2_2 } from './pages/Phase2_2';
import { Phase2_3 } from './pages/Phase2_3';
import { Phase2_4 } from './pages/Phase2_4';
import { Phase2_5 } from './pages/Phase2_5';
import { Phase3_1 } from './pages/Phase3_1';
import { Phase3_2 } from './pages/Phase3_2';
import { Phase3_3 } from './pages/Phase3_3';
import { Phase3_4 } from './pages/Phase3_4';
import { Phase4_1 } from './pages/Phase4_1';
import { Phase4_2 } from './pages/Phase4_2';
import { Phase4_3 } from './pages/Phase4_3';
import { Phase5_1 } from './pages/Phase5_1';
import { Phase5_2 } from './pages/Phase5_2';
import { Phase5_3 } from './pages/Phase5_3';
import { Phase6_1 } from './pages/Phase6_1';
import { Phase6_2 } from './pages/Phase6_2';
import { Phase6_3 } from './pages/Phase6_3';
import { Phase6_4 } from './pages/Phase6_4';

function GuardedRoute({
  stepId,
  canAccess,
  children,
}: {
  stepId: string;
  canAccess: (id: string) => boolean;
  children: React.ReactNode;
}) {
  if (!canAccess(stepId)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

export default function App() {
  const {
    completedSteps,
    currentStep,
    completeStep,
    canAccess,
    resetProgress,
  } = useProgress();

  const location = useLocation();
  const currentStepId = routeToStep(location.pathname);
  const isLanding = location.pathname === '/';
  const hasProgress = completedSteps.length > 0;

  const handleStart = () => {
    if (hasProgress) {
      resetProgress();
    }
    completeStep('landing');
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      {!isLanding && (
        <ProgressBar
          currentStepId={currentStepId}
          completedSteps={completedSteps}
        />
      )}

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                onStart={handleStart}
                hasProgress={hasProgress}
                currentStep={currentStep}
              />
            }
          />
          <Route path="/step/1.1" element={<GuardedRoute stepId="1.1" canAccess={canAccess}><Phase1_1 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/1.2" element={<GuardedRoute stepId="1.2" canAccess={canAccess}><Phase1_2 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/2.1" element={<GuardedRoute stepId="2.1" canAccess={canAccess}><Phase2_1 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/2.2" element={<GuardedRoute stepId="2.2" canAccess={canAccess}><Phase2_2 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/2.3" element={<GuardedRoute stepId="2.3" canAccess={canAccess}><Phase2_3 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/2.4" element={<GuardedRoute stepId="2.4" canAccess={canAccess}><Phase2_4 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/2.5" element={<GuardedRoute stepId="2.5" canAccess={canAccess}><Phase2_5 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/3.1" element={<GuardedRoute stepId="3.1" canAccess={canAccess}><Phase3_1 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/3.2" element={<GuardedRoute stepId="3.2" canAccess={canAccess}><Phase3_2 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/3.3" element={<GuardedRoute stepId="3.3" canAccess={canAccess}><Phase3_3 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/3.4" element={<GuardedRoute stepId="3.4" canAccess={canAccess}><Phase3_4 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/4.1" element={<GuardedRoute stepId="4.1" canAccess={canAccess}><Phase4_1 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/4.2" element={<GuardedRoute stepId="4.2" canAccess={canAccess}><Phase4_2 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/4.3" element={<GuardedRoute stepId="4.3" canAccess={canAccess}><Phase4_3 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/5.1" element={<GuardedRoute stepId="5.1" canAccess={canAccess}><Phase5_1 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/5.2" element={<GuardedRoute stepId="5.2" canAccess={canAccess}><Phase5_2 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/5.3" element={<GuardedRoute stepId="5.3" canAccess={canAccess}><Phase5_3 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/6.1" element={<GuardedRoute stepId="6.1" canAccess={canAccess}><Phase6_1 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/6.2" element={<GuardedRoute stepId="6.2" canAccess={canAccess}><Phase6_2 onComplete={completeStep} /></GuardedRoute>} />
          <Route path="/step/6.3" element={<GuardedRoute stepId="6.3" canAccess={canAccess}><Phase6_3 onComplete={completeStep} /></GuardedRoute>} />
          <Route
            path="/step/6.4"
            element={
              <GuardedRoute stepId="6.4" canAccess={canAccess}>
                <Phase6_4 onReset={() => { resetProgress(); window.location.href = '/'; }} />
              </GuardedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
