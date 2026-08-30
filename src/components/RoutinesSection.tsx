import type { Routine } from '@/content/team';

export function RoutinesSection({ routines }: { routines: Routine[] }) {
  return (
    <section id="routines" className="border-t border-line bg-panel/40 px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-cyan">On autopilot</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Routines</h2>
      <p className="mt-2 max-w-xl text-fg-dim">
        Scheduled passes that run without being asked — cadence and purpose only, details kept private.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routines.map((routine) => (
          <div key={routine.name} className="rounded-lg border border-line bg-panel p-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-display text-base font-medium">{routine.name}</span>
              <span className="font-display text-[10px] uppercase tracking-wide text-cyan">{routine.cadence}</span>
            </div>
            <p className="mt-2 text-sm text-fg-dim">{routine.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
