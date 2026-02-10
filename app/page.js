import SectionCard from '@/components/SectionCard';

const corePillars = [
  'Track your weekly momentum with clear progress snapshots',
  'Build consistency through streak-based accountability',
  'Compete fairly with growth-focused community leaderboards',
  'Stay private by default, share only when you choose',
];

const whatStaxDoes = [
  'Turns on-chain activity into a simple weekly habit loop',
  'Rewards discipline and consistency over raw wallet size',
  'Makes progress visible through transparent, easy-to-read metrics',
  'Keeps the experience focused, calm, and non-speculative',
];

const whyItMatters = [
  'Most crypto products optimize for attention and trading behavior',
  'Stax optimizes for long-term habits and steady participation',
  'Community rituals help users stay engaged without noisy gimmicks',
  'A focused product makes it easier to keep showing up every week',
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-16 md:px-10">
        <p className="mb-4 w-fit rounded-full border border-stax-glow/50 bg-stax-glow/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stax-glow">
          Stax
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          A better way to build <span className="text-stax-accent">$SKR consistency</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base text-stax-slate md:text-lg">
          Stax helps people build long-term on-chain discipline through weekly progress, streaks, and community accountability.
          It is designed to be simple, transparent, and focused on habits over hype.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <SectionCard title="Core pillars">
            <ul className="space-y-2">
              {corePillars.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-stax-accent">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="What Stax does">
            <ul className="space-y-2">
              {whatStaxDoes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-stax-glow">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Why it matters">
            <ul className="space-y-2">
              {whyItMatters.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-rose-300">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold">The Stax Promise</h2>
          <p className="mt-4 text-stax-slate">
            Stax exists to make consistent participation in the ecosystem easier, clearer, and more meaningful. The product is
            intentionally lightweight so users can focus on showing up, week after week.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-stax-slate md:grid-cols-4">
            {['Habit-first', 'Transparent', 'Community-driven', 'Built for consistency'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-center">
                {item}
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
