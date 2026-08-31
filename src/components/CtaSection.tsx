export function CtaSection() {
  return (
    <section id="get-one" className="border-t border-line bg-panel/40 px-6 py-20 text-center sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">Want one?</p>
      <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">Get your own supervisor agent</h2>

      <div className="mx-auto mt-6 max-w-xl space-y-3 text-sm text-fg-dim sm:text-base">
        <p>All you need is an always-on computer, laptop, or VM, and a Claude (Pro) subscription.</p>
        <p>
          Head to <span className="text-fg">nanoclaw.dev</span>, scroll down to “Get started with NanoClaw,” and
          enter the three commands shown there.
        </p>
      </div>

      <a
        href="https://nanoclaw.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-md border border-accent-dim bg-accent-dim/10 px-6 py-3 font-display text-xs uppercase tracking-wide text-accent transition hover:bg-accent-dim/20"
      >
        Get started at nanoclaw.dev →
      </a>

      <p className="mt-8 text-sm text-fg-dim sm:text-base">Get to know your agent, and build from there...</p>
    </section>
  );
}
