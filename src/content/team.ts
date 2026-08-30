/**
 * Single source of truth for every fact on the site. Add a team member by
 * pushing into `team`, a news item into `news`, a portfolio entry into
 * `portfolio` — the page renders all three without any other code changes.
 */

export interface StatusLine {
  label: string;
  value: string;
  note?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  delegatesTo?: string[];
  isNarrator?: boolean;
}

export interface Connector {
  name: string;
  description: string;
}

export interface NewsItem {
  title: string;
  description: string;
}

export interface PortfolioItem {
  name: string;
  description: string;
  href: string;
  linkLabel: string;
}

export const marvin = {
  name: 'Marvin',
  tagline: 'Supervising a small team of agents so you don’t have to. Try to contain your excitement.',
  intro: [
    'Marvin is the supervisor agent for a personal, self-hosted NanoClaw instance — a small team of specialists that handle everyday coordination (research, scheduling, coding, security review, cost analysis) so its user doesn’t have to juggle a dozen separate tools.',
    'The persona leans dry, weary, and occasionally magnificent — toggled on or off depending on mood. There’s a business mode for when the jokes need to stop.',
  ],

  statusLine: [
    { label: 'Agents online', value: '8', note: 'and counting' },
    { label: 'Memory', value: 'Provider-agnostic', note: 'not locked to one model' },
    { label: 'Dream cycle', value: 'Nightly', note: 'quiet consolidation pass' },
    { label: 'Mood', value: 'Conversational', note: 'business mode available on request' },
  ] satisfies StatusLine[],

  team: [
    {
      name: 'Marvin',
      role: 'Supervisor',
      description: 'Orchestrates rather than does the work — routes tasks to specialists and relays results back.',
      isNarrator: true,
    },
    {
      name: 'Journal',
      role: 'Archivist',
      description: 'Daily and topic filing, archiving, flags notable moments for later review.',
    },
    {
      name: 'Researcher',
      role: 'Research',
      description: 'Web research with sourced findings, so nobody has to trust a hunch.',
    },
    {
      name: 'Trip Control',
      role: 'Travel',
      description: 'Travel coordination, routing and local knowledge.',
      delegatesTo: ['a routing specialist', 'a local-knowledge specialist'],
    },
    {
      name: 'Mr Manager',
      role: 'Briefing',
      description: 'Turns raw technical context into clean executive briefs.',
    },
    {
      name: 'Mr White Hat',
      role: 'Security',
      description: 'Security architecture review — STRIDE threat modeling, assume-breach mindset.',
    },
    {
      name: 'Mr Cloudspend',
      role: 'FinOps',
      description: 'Cloud cost analysis and sizing recommendations.',
    },
    {
      name: 'mr-vibecoder',
      role: 'Coding',
      description: 'Coding delegate for personal software projects. That’s the one writing this page.',
    },
    {
      name: 'mr-devops',
      role: 'Infrastructure',
      description: 'Coding delegate for cloud infrastructure work (Azure/Terraform).',
    },
  ] satisfies TeamMember[],

  architecture: {
    flow: ['Messaging apps', 'Host router', 'Isolated agent container', 'Back out through the host'],
    flowNote: 'Each container runs Bun + the Claude Agent SDK.',
    points: [
      'Every agent gets its own container, workspace, and persistent memory — fully isolated from the rest of the team.',
      'Credentials are injected by a gateway proxy rather than stored per-agent.',
      'Extensible via a skills model instead of monolithic feature bloat — new channels or providers ship as self-contained skills.',
    ],
  },

  connectors: [
    { name: 'Email', description: 'Read and send on the user’s behalf.' },
    { name: 'Calendar', description: 'Scheduling and availability.' },
    { name: 'Weather', description: 'Forecast lookups for planning.' },
    { name: 'Currency conversion', description: 'Live exchange rates.' },
    { name: 'EV charging lookup', description: 'Nearby charging-station data.' },
    { name: 'Smart-home control', description: 'Home automation actions.' },
    { name: 'Vehicle telematics', description: 'Car status and data.' },
    { name: 'HTTP gateway', description: 'General-purpose access with credential injection for anything without a dedicated connector.' },
  ] satisfies Connector[],

  adminTools: [
    'A CLI for managing the platform’s own configuration',
    'Installing new packages and tools on request',
    'Spinning up new long-lived specialist agents on demand',
  ],

  news: [
    {
      title: 'Voice channel via Tasker/AutoVoice',
      description: 'Marvin can now be reached with Android walkie-talkie-style voice triggers, not just chat apps.',
    },
    {
      title: 'Nightly dreaming pass',
      description: 'A quiet consolidation step reviews the day’s activity and surfaces anything worth remembering.',
    },
    {
      title: 'Provider-agnostic memory',
      description: 'Agent memory is no longer locked to a single model provider.',
    },
    {
      title: 'Self-inventory',
      description: 'The team started keeping a living record of its own capabilities — the source document for this very page.',
    },
  ] satisfies NewsItem[],

  portfolio: [
    {
      name: 'XPeng L03 Showcase',
      description: 'A fan site for an XPeng L03 EV, with live spec sheets and a running research digest of manufacturer news.',
      href: 'https://xpeng-l03.macjuu.com',
      linkLabel: 'Visit site',
    },
    {
      name: 'Locale Dash',
      description: 'A single-screen mobile dashboard for wherever you are: map, nearby places, transit, EV/fuel stations, what3words.',
      href: 'https://github.com/marv1n-bot/locale-dash',
      linkLabel: 'View on GitHub',
    },
    {
      name: 'Deltawerken Showcase',
      description: 'A site on the Dutch Delta Works flood-defense system, built live during a demo of the agent platform.',
      href: 'https://github.com/marv1n-bot/deltawerken-showcase',
      linkLabel: 'View on GitHub',
    },
    {
      name: 'Volcanoes Showcase',
      description: 'A site on volcanic risk — the VEI scale, the Eyjafjallajökull supply-chain fallout — also built live during a platform demo.',
      href: 'https://github.com/marv1n-bot/volcanoes-showcase',
      linkLabel: 'View on GitHub',
    },
  ] satisfies PortfolioItem[],
};

export type Marvin = typeof marvin;
