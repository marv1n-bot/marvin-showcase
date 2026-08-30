import type { ValueProp } from '@/content/team';

export function WhyMeSection({ values }: { values: ValueProp[] }) {
  return (
    <section id="why" className="border-t border-line bg-panel/40 px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">The pitch</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Why me?</h2>
      <p className="mt-2 max-w-xl text-fg-dim">
        What a private, always-on agent team does that a generic assistant can’t.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value.title} className="border-l-2 border-l-accent-dim pl-4">
            <p className="font-display text-sm font-medium text-fg">{value.title}</p>
            <p className="mt-1 text-sm text-fg-dim">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
