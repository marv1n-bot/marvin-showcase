import type { TeamMember } from '@/content/team';

export function TeamRoster({ team }: { team: TeamMember[] }) {
  return (
    <section id="team" className="border-t border-line px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-cyan">The roster</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Capabilities</h2>
      <p className="mt-2 max-w-xl text-fg-dim">
        Marvin orchestrates rather than does the work — routes tasks to specialists and relays results back.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => {
          const isRetired = Boolean(member.retiredDate);
          return (
            <div
              key={member.name}
              className={`rounded-lg border p-5 ${
                isRetired
                  ? 'border-dashed border-fg-dim/25 bg-panel/40 opacity-60'
                  : member.isNarrator
                    ? 'border-cyan-dim bg-cyan-dim/10'
                    : member.reportsTo
                      ? 'border-line border-l-2 border-l-cyan-dim bg-panel/70'
                      : 'border-line bg-panel'
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className={`font-display text-base font-medium ${isRetired ? 'line-through decoration-fg-dim/40' : ''}`}>
                  {member.name}
                </span>
                <span
                  className={`font-display text-[10px] uppercase tracking-wide ${
                    isRetired ? 'text-fg-dim/60' : 'text-cyan'
                  }`}
                >
                  {isRetired ? `Retired ${member.retiredDate}` : member.role}
                </span>
              </div>
              {member.reportsTo && !isRetired && (
                <p className="mt-1 text-[11px] uppercase tracking-wide text-fg-dim/60">
                  Reports to {member.reportsTo}
                </p>
              )}
              <p className="mt-2 text-sm text-fg-dim">{member.description}</p>
              {member.delegatesTo && (
                <p className="mt-2 text-xs text-fg-dim/70">Delegates to {member.delegatesTo.join(' and ')}.</p>
              )}
              {member.tools && !isRetired && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {member.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded border border-line bg-void/40 px-2 py-0.5 text-[10px] uppercase tracking-wide text-fg-dim"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-fg-dim/50">Known integrations — not a guaranteed-complete list.</p>
    </section>
  );
}
