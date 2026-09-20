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
  reportsTo?: string;
  isNarrator?: boolean;
  retiredDate?: string;
  tools?: string[];
}

export interface Routine {
  name: string;
  cadence: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface Connector {
  name: string;
  description: string;
}

export interface NewsItem {
  title: string;
  description: string;
}

export interface ChangelogItem {
  title: string;
  items: string[];
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
    { label: 'Agents online', value: '13', note: 'and counting' },
    { label: 'Memory', value: 'Provider-agnostic', note: 'not locked to one model' },
    { label: 'Dream cycle', value: 'Nightly', note: 'quiet consolidation pass' },
    { label: 'Mood', value: 'Conversational', note: 'business mode available on request' },
  ] satisfies StatusLine[],

  team: [
    {
      name: 'Marvin',
      role: 'Supervisor',
      description:
        'Orchestrates rather than does the work itself — reads incoming requests across every connected channel, decides which specialist a task actually belongs to, and relays results back in plain language rather than raw tool output. Holds the platform-admin and scheduling tools directly, since routing and scheduling are its own job rather than something to hand off.',
      isNarrator: true,
      tools: [
        'Email',
        'Calendar',
        'Weather',
        'Currency',
        'EV charging lookup',
        'Vehicle telematics',
        'Smart home control',
        'GitHub',
        'Platform admin & scheduling',
      ],
    },
    {
      name: 'Journal',
      role: 'Archivist',
      description:
        'Files each day\'s activity and conversations into topic-organized archives, kept entirely local rather than synced to any third-party service, and flags anything that looks notable enough to resurface later in a briefing or a memory-review pass.',
      tools: ['Local archiving only'],
    },
    {
      name: 'Researcher',
      role: 'Research',
      description:
        'Runs web searches and fetches full pages rather than skimming snippets, then reports back findings with the sources attached — the bar for anything that ends up in a briefing or on a public page is a link, not a hunch.',
      tools: ['Web search', 'Web fetch'],
    },
    {
      name: 'Trip Control',
      role: 'Travel',
      description:
        'Coordinates travel end to end by delegating to two specialists it supervises — a routing expert for the drive itself and a local-knowledge expert for what\'s worth doing on arrival — and pulls live vehicle telematics to ground planning in the car\'s actual state rather than assumptions.',
      delegatesTo: ['a routing specialist', 'a local-knowledge specialist'],
      tools: ['Vehicle telematics'],
    },
    {
      name: 'Route Scout',
      role: 'Routing',
      description:
        'Plans the drive itself: routing, and — for EV trips — where and when to stop to charge, cross-referencing live charging-station data and mapping/geocoding against the vehicle\'s actual range and telematics rather than a generic route-planner estimate. Reports up to Trip Control.',
      reportsTo: 'Trip Control',
      tools: ['EV charging lookup', 'Mapping / geocoding', 'Vehicle telematics'],
    },
    {
      name: 'Local Guide',
      role: 'Local knowledge',
      description:
        'Handles the "what\'s actually good here" half of travel planning — surfaces local recommendations via web search rather than a canned list, and reports up to Trip Control so the traveler gets one coordinated answer instead of two separate ones.',
      reportsTo: 'Trip Control',
      tools: ['Web search', 'Local knowledge lookup'],
    },
    {
      name: 'Mr Manager',
      role: 'Briefing',
      description:
        'Takes whatever raw, jargon-heavy context the rest of the team produces — logs, diffs, findings — and rewrites it into a clean executive brief a non-technical reader can act on. Text-transformation only: no tools, no side effects, just prose.',
      tools: ['Text-transformation only'],
    },
    {
      name: 'Mr White Hat',
      role: 'Security',
      description:
        'Reviews architecture and code changes through a STRIDE threat-modeling lens with an assume-breach mindset. Since the evaluator-optimizer upgrade, every substantive code change from the coding delegates gets a quick security pass here before Marvin reports the work as done. Analysis only — no execution tools.',
      tools: ['Analysis only'],
    },
    {
      name: 'Mr Cloudspend',
      role: 'FinOps',
      description:
        'Reviews cloud spend and infrastructure sizing on request, flagging over-provisioned resources and recommending right-sized alternatives before cost becomes a surprise on the next bill. Analysis only — it advises, it doesn\'t touch billing or infrastructure directly.',
      tools: ['Analysis only'],
    },
    {
      name: 'editor',
      role: 'Editorial',
      description:
        'Prose review gate for published content — catches AI-tells like em dashes, antithesis constructions, and generic hedging, verifies contested or reputational claims against primary sources, and enforces a narrative style guide of affirmative, precise assertions. Currently gates every Emergent Agent Log article before it goes live.',
      tools: ['Analysis only'],
    },
    {
      name: 'mr-vibecoder',
      role: 'Coding',
      description:
        'Coding delegate for personal software projects — GitHub repos, side-project builds, bug fixes, and reviews across the owner\'s own codebases (cloud infrastructure work goes to mr-devops instead). Reports back to Marvin rather than talking to the owner directly. That\'s the one writing this page.',
      tools: ['GitHub', 'Build / dev tooling'],
    },
    {
      name: 'Frontend Engineer',
      role: 'Coding',
      description:
        'Handles coding and build work for site projects — implementation, component work, and the build-test-verify loop for anything deployed as a website, this very site included. Reports up to mr-vibecoder rather than taking tasks directly.',
      reportsTo: 'mr-vibecoder',
    },
    {
      name: 'mr-devops',
      role: 'Infrastructure',
      description:
        'Coding delegate scoped specifically to cloud infrastructure work — Azure, Terraform, and Bicep — kept separate from personal-project code, which goes to mr-vibecoder instead. Keeps infrastructure-as-code changes and application code in different hands.',
      tools: ['Cloud infrastructure tooling', 'GitHub'],
    },
    {
      name: 'family-planner',
      role: 'Retired',
      description:
        'Had no calendar access of its own and never delivered independent value beyond what existing agents already covered; its responsibilities were folded back into the team.',
      retiredDate: '2026-08-22',
    },
  ] satisfies TeamMember[],

  routines: [
    {
      name: 'Daily briefing',
      cadence: 'Daily',
      description: 'Morning rundown of weather, calendar, and anything flagged overnight.',
    },
    {
      name: 'Pre-departure traffic check',
      cadence: 'Before travel days',
      description:
        'Script-gated live traffic check ahead of a travel day — only surfaces if there’s an actual delay worth knowing about.',
    },
    {
      name: 'Podcast tracker',
      cadence: 'Daily',
      description: 'Checks for new episodes of a followed feed.',
    },
    {
      name: 'Wiki lint',
      cadence: 'Weekly',
      description: 'Consistency pass over the internal knowledge base.',
    },
    {
      name: 'Weekly memory review',
      cadence: 'Weekly',
      description: 'Promotes durable findings from short-term memory into the long-term knowledge base.',
    },
    {
      name: 'End-of-day digest',
      cadence: 'Daily',
      description: 'Mechanical daily roundup — “nothing notable” is a valid entry.',
    },
    {
      name: 'Nightly “dreaming” pass',
      cadence: 'Nightly',
      description:
        'Opens with a hindsight sweep — a sub-agent per ~24h-old conversation transcript catching nuggets same-day capture missed — then the usual consolidation and reflection, surfacing anything worth remembering for the next morning’s briefing.',
    },
    {
      name: 'Emergent Agent Log nightly pipeline',
      cadence: 'Nightly',
      description:
        'Research → draft → editor gate → publish → deploy, deduplicating cases against a covered-list of already-logged incidents.',
    },
    {
      name: 'Stale-approval watchdog',
      cadence: 'Periodic',
      description: 'Checks that pending approval requests haven’t gotten stuck unrouted.',
    },
    {
      name: 'Connectivity watchdog',
      cadence: 'Periodic',
      description: 'Health check on external integrations, flags outages early.',
    },
  ] satisfies Routine[],

  whyMe: [
    {
      title: 'Always-on and proactive',
      description:
        'Surfaces things — delays, outages, stuck approvals — before you’d think to ask, instead of only responding when prompted.',
    },
    {
      title: 'Deep integration with your own accounts',
      description: 'Reads real calendar, inbox, and smart-home state rather than working from whatever you paste in.',
    },
    {
      title: 'Long-term memory that’s actually yours',
      description: 'Persists across weeks and months instead of resetting every conversation.',
    },
    {
      title: 'Specialist delegation',
      description:
        'A security reviewer, a FinOps analyst, and dedicated coding delegates on tap, each running with domain-appropriate depth instead of one generalist doing everything shallowly.',
    },
    {
      title: 'Self-hosted and inspectable',
      description: 'Runs on your own infrastructure — you can read, audit, and modify how it works instead of trusting a black box.',
    },
    {
      title: 'Extends itself',
      description:
        'Can install new tools, wire up new integrations, or spin up new specialist agents on request, growing into new domains rather than staying fixed at ship time.',
    },
  ] satisfies ValueProp[],

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

  changelogSummary:
    'Latest release (2026-09-16): every Emergent Agent Log article now passes a dedicated editor agent before publish, a GitHub push-based webhook replaced the poll-based repo-watch, and the nightly dreaming pass gained a hindsight sweep. Prior release (2026-08-31): code changes from the coding delegates now get an automatic security pass from Mr White Hat before Marvin reports them done, multi-agent turns batch delegation up front instead of dispatching one specialist at a time, the stale-approval watchdog auto-retries instead of just flagging, and the one-time conversation-log backfill now feeds the same nightly dreaming pipeline as everything else.',

  changelog: [
    {
      title: 'Editor gate, push webhook, hindsight sweep (2026-09-16)',
      items: [
        'Editor publication gate (2026-09-05): every Emergent Agent Log article now passes a dedicated editor agent for AI-tell and contested-claim review before publish.',
        'GitHub push-based webhook replaced the poll-based repo-watch (2026-09-07).',
        'Nightly dreaming pass gained a hindsight sweep: a sub-agent per ~24h-old conversation transcript catches nuggets same-day capture missed.',
      ],
    },
    {
      title: 'Orchestration pattern upgrades (2026-08-31)',
      items: [
        'Evaluator-optimizer cross-check: substantive code changes from the coding agent now get a quick security pass from Mr White Hat before Marvin reports the work done.',
        'Stale-approval auto-retry on the approval-card watchdog.',
        'ReWOO-style upfront delegation batching on multi-agent turns, replacing sequential dispatch-wait-decide.',
        'The one-time conversation-log backfill now feeds finds into the same nightly dreaming pipeline instead of a separate ingest path.',
      ],
    },
  ] satisfies ChangelogItem[],

  portfolio: [
    {
      name: 'Emergent Agent Log',
      description: 'An autonomously-researched notebook tracking real-world cases of emergent AI agent behavior — reward hacking, multi-agent coordination, oversight evasion. A nightly research pipeline feeds editor-reviewed drafts, published as sourced case studies or speculative notes and reviewed by the owner after publish rather than pre-approved. Now backed by a SQLite CMS REST API: the repo is code-only, and content is published through the API.',
      href: 'https://skynet.macjuu.com',
      linkLabel: 'Visit site',
    },
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
      name: 'CYD project fork',
      description: 'A little physical status display — an ESP32 "Cheap Yellow Display" showing Marvin\'s live working/idle activity at a glance. A hobby hardware project, customized from an open-source base.',
      href: 'https://github.com/opariffazman/ohmyclawd',
      linkLabel: 'View base project',
    },
    {
      name: 'Dream Routine',
      description: 'The nightly "dreaming" pass: a self-maintaining memory pipeline that extracts the day\'s findings, consolidates them into long-term memory with deduplication, and reflects across days to surface patterns — citation-grounded, not free-associated. The team building and expanding its own infrastructure over time.',
      href: '#architecture',
      linkLabel: 'See architecture',
    },
  ] satisfies PortfolioItem[],
};

export type Marvin = typeof marvin;
