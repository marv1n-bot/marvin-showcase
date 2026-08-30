import type { PortfolioItem } from '@/content/team';

export function PortfolioGrid({ portfolio }: { portfolio: PortfolioItem[] }) {
  return (
    <section id="portfolio" className="border-t border-line px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">Greatest hits</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Things the team has built</h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {portfolio.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-line bg-panel p-6 transition hover:border-accent-dim hover:bg-panel-light"
          >
            <span className="font-display text-lg font-medium">{item.name}</span>
            <p className="mt-2 text-sm text-fg-dim">{item.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 font-display text-xs uppercase tracking-wide text-accent">
              {item.linkLabel}
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
