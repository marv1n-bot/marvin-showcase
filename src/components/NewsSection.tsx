import type { NewsItem } from '@/content/team';

export function NewsSection({ news }: { news: NewsItem[] }) {
  return (
    <section id="news" className="border-t border-line bg-panel/40 px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-cyan">Changelog</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Project news</h2>

      <ol className="mt-8 max-w-2xl space-y-6 border-l border-line pl-6">
        {news.map((item) => (
          <li key={item.title} className="relative">
            <span aria-hidden className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-cyan" />
            <p className="font-display text-sm font-medium text-fg">{item.title}</p>
            <p className="mt-1 text-sm text-fg-dim">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
