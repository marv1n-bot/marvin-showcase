import type { Marvin } from '@/content/team';

export function Hero({ marvin }: { marvin: Marvin }) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-void px-6 py-28 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(79,214,196,0.14)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 scanlines" />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 -z-10 h-[520px] w-[520px] -translate-y-1/2 opacity-40 sm:right-[-2%] lg:right-[6%]"
      >
        <div className="absolute inset-0 rounded-full border border-cyan-dim" />
        <div className="absolute inset-[12%] rounded-full border border-line" />
        <div className="absolute inset-[24%] rounded-full border border-cyan-dim" />
        <div className="absolute inset-[36%] rounded-full border border-line" />
        <div className="absolute inset-[46%] rounded-full bg-[radial-gradient(circle,rgba(79,214,196,0.5)_0%,transparent_70%)]" />
        <div className="absolute inset-[49%] rounded-full bg-cyan shadow-[0_0_40px_10px_rgba(79,214,196,0.35)]" />
      </div>

      <p className="font-display text-xs uppercase tracking-[0.4em] text-cyan">Agent platform / supervisor unit</p>
      <h1 className="mt-4 max-w-3xl font-display text-6xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-8xl">
        {marvin.name}
      </h1>
      <p className="mt-6 max-w-xl text-lg text-fg-dim sm:text-xl">{marvin.tagline}</p>

      <div className="mt-8 max-w-2xl space-y-4 text-sm text-fg-dim sm:text-base">
        {marvin.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
        {marvin.statusLine.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-xl font-medium text-cyan sm:text-2xl">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-fg-dim">{stat.label}</div>
            {stat.note && <div className="text-xs text-fg-dim/60">{stat.note}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
