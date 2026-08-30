import type { Connector } from '@/content/team';

export function ConnectorsSection({ connectors, adminTools }: { connectors: Connector[]; adminTools: string[] }) {
  return (
    <section id="connectors" className="border-t border-line px-6 py-16 sm:px-10 lg:px-16">
      <p className="font-display text-xs uppercase tracking-[0.4em] text-accent">Reach</p>
      <h2 className="mt-3 font-display text-2xl font-medium sm:text-3xl">Connectors &amp; MCP servers</h2>
      <p className="mt-2 max-w-xl text-fg-dim">
        Marvin and the team reach external services through MCP (Model Context Protocol) tools.
      </p>

      <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {connectors.map((connector) => (
          <div key={connector.name} className="border-b border-line pb-4">
            <dt className="font-display text-sm uppercase tracking-wide text-fg">{connector.name}</dt>
            <dd className="mt-1 text-sm text-fg-dim">{connector.description}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 rounded-lg border border-line bg-panel p-6">
        <p className="font-display text-xs uppercase tracking-wide text-accent">Admin tooling</p>
        <ul className="mt-3 space-y-2 text-sm text-fg-dim">
          {adminTools.map((tool) => (
            <li key={tool} className="flex gap-2">
              <span aria-hidden className="text-accent">
                ▸
              </span>
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
