import type { ChangelogItem } from '@/content/team';

export function ChangelogSection({ changelog }: { changelog: ChangelogItem[] }) {
  return (
    <section id="changelog" className="border-t border-line px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">Shipped</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Changelog</h2>

      <div className="mt-8 max-w-2xl space-y-6">
        {changelog.map((release) => (
          <div key={release.title} className="rounded-lg border border-line bg-panel p-6">
            <p className="font-display text-sm font-medium text-fg">{release.title}</p>
            <ul className="mt-3 space-y-2">
              {release.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-fg-dim">
                  <span
                    aria-hidden
                    className="mt-[7px] h-0 w-0 shrink-0 border-y-4 border-l-[6px] border-y-transparent border-l-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
