import { useNavigate } from 'react-router-dom';
import { StepLayout } from '../components/StepLayout';
import { stepToRoute, getNextStep } from '../hooks/useProgress';

interface Props {
  onComplete: (stepId: string) => void;
}

export function Phase1_1({ onComplete }: Props) {
  const navigate = useNavigate();

  const handleContinue = () => {
    onComplete('1.1');
    navigate(stepToRoute(getNextStep('1.1')!));
  };

  return (
    <StepLayout stepId="1.1" onContinue={handleContinue} ctaText="I understand, let's continue →">
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Your Bitcoin on an exchange
          <br />
          <span className="text-bitcoin">isn't really yours.</span>
        </h1>

        <div className="space-y-4 text-text-muted leading-relaxed">
          <p>
            When your Bitcoin sits on an exchange like Coinbase, Binance, or Kraken,
            you don't actually hold it. The exchange does. You have an IOU — a promise
            that they'll give it back when you ask.
          </p>

          <p>
            Most of the time, that works. Until it doesn't.
          </p>

          <div className="bg-bg-card rounded-xl border border-border p-5 space-y-3">
            <p className="text-text font-semibold">What happens when an exchange fails?</p>
            <p>
              When FTX collapsed, millions of people lost their Bitcoin overnight. Celsius,
              BlockFi, Voyager — same story. The exchange had custody. The users had nothing.
            </p>
          </div>

          <p>
            There's a saying in Bitcoin:{' '}
            <strong className="text-text">"Not your keys, not your coins."</strong>
          </p>

          <p>
            In plain English: if you don't hold the private keys to your Bitcoin, someone
            else controls it. And that means someone else can lose it, freeze it, or
            refuse to give it back.
          </p>

          <p className="text-text font-medium">
            That's what we're here to fix. Let's move your Bitcoin to a place where
            only you have the keys.
          </p>
        </div>
      </div>
    </StepLayout>
  );
}
