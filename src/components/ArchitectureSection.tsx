import type { Marvin } from '@/content/team';

export function ArchitectureSection({ architecture }: { architecture: Marvin['architecture'] }) {
  return (
    <section id="architecture" className="border-t border-line bg-panel/40 px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-cyan">Under the hood</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Architecture</h2>

      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
        {architecture.flow.map((step, index) => (
          <div key={step} className="flex flex-1 items-center gap-2">
            <div className="flex-1 rounded-md border border-line bg-panel px-4 py-3 text-center font-display text-xs uppercase tracking-wide text-fg sm:text-[11px]">
              {step}
            </div>
            {index < architecture.flow.length - 1 && (
              <span aria-hidden className="hidden font-display text-cyan sm:block">
                →
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-fg-dim">{architecture.flowNote}</p>

      <ul className="mt-8 max-w-2xl space-y-3">
        {architecture.points.map((point) => (
          <li key={point} className="flex gap-3 text-sm text-fg-dim sm:text-base">
            <span aria-hidden className="mt-1 text-cyan">
              ▸
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
