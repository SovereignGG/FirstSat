import { useState } from 'react';

interface ChecklistProps {
  items: string[];
  columns?: 1 | 2;
}

/** Tappable checklist with a satisfying pop animation on check. */
export function Checklist({ items, columns = 2 }: ChecklistProps) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  };

  return (
    <div
      className={`grid gap-2 ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}
    >
      {items.map((item) => {
        const isChecked = checked.has(item);
        return (
          <button
            key={item}
            type="button"
            onClick={() => toggle(item)}
            aria-pressed={isChecked}
            className={`check-item flex items-center gap-2.5 text-sm text-left rounded-lg border border-border bg-bg px-3 py-2.5 ${
              isChecked ? 'checked' : ''
            }`}
          >
            <span
              className={`w-5 h-5 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${
                isChecked
                  ? 'bg-success/20 border-success/50'
                  : 'border-border bg-bg-card'
              }`}
            >
              {isChecked && (
                <svg
                  className="tick"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M2 6.5L4.5 9L10 3.5"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span
              className={`transition-colors ${
                isChecked ? 'text-text' : 'text-text-muted'
              }`}
            >
              {item}
            </span>
          </button>
        );
      })}
    </div>
  );
}
