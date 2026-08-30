import Image from 'next/image';

import type { Marvin } from '@/content/team';

export function Hero({ marvin }: { marvin: Marvin }) {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-void px-6 py-28 sm:px-10 lg:px-16">
      <Image
        src="/hero-robot.jpg"
        alt="Close-up of a white toy robot against a blue and pink gradient background"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[65%_30%]"
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(10,13,16,0.96)_0%,rgba(10,13,16,0.75)_38%,rgba(10,13,16,0.35)_65%,rgba(10,13,16,0.65)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_top,rgba(10,13,16,0.9)_0%,rgba(10,13,16,0.1)_45%,rgba(10,13,16,0.55)_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(79,214,196,0.14)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 scanlines" />

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

      <p className="absolute bottom-4 right-6 text-[11px] leading-snug text-fg-dim/50 sm:right-10 lg:right-16">
        <a
          href="https://www.pexels.com/photo/close-up-shot-of-white-toy-robot-on-blue-and-pink-background-8294661/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-fg-dim/30 underline-offset-2 hover:text-fg-dim/80"
        >
          Photo by Pavel Danilyuk
        </a>
      </p>
    </section>
  );
}
