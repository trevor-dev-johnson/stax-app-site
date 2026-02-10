import SectionCard from '@/components/SectionCard';

const mustWork = [
  'Real on-chain $SKR balance reads',
  'High-water mark balance logic',
  'Milestone-based progress tracking',
  'Daily streak tracking without check-ins',
  'Weekly close ritual: snapshot + reset',
  'Leaderboards for weekly % growth (bucketed by starting balance)',
  'Leaderboards for weekly streaks',
  'Anonymous by default, opt-in identity',
  'User-generated weekly share cards',
  'Settings with transparency explanations',
];

const simulated = [
  'Leaderboard population from other users',
  'Historical weekly summaries beyond current week',
  'Season-level summaries',
  'Community-wide aggregate stats',
];

const outOfScope = [
  'Token rewards, emissions, claiming, or check-ins',
  'Price charts, yield, APY, staking, swaps, or trading',
  'Smart contracts or custody of funds',
  'Multi-token tracking, notifications, or social feeds',
  'Monetization',
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-30" />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-20 pt-16 md:px-10">
        <p className="mb-4 w-fit rounded-full border border-stax-glow/50 bg-stax-glow/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-stax-glow">
          Stax MVP Landing Page
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Build your <span className="text-stax-accent">$SKR discipline</span>, not speculation.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-stax-slate md:text-lg">
          Stax is a calm, communal product where consistent habits matter more than account size. Every feature in this MVP is scoped to prove that incentives are fair, intentional, and hard to game.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <SectionCard title="Must work in MVP">
            <ul className="space-y-2">
              {mustWork.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-stax-accent">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Can be mocked/simulated">
            <ul className="space-y-2">
              {simulated.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-stax-glow">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Explicitly out of scope">
            <ul className="space-y-2">
              {outOfScope.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-rose-300">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>

        <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold">MVP Success Criteria</h2>
          <p className="mt-4 text-stax-slate">
            Judges should clearly see that Stax rewards consistency over wealth, uses $SKR intentionally, and creates a non-speculative community loop through weekly rituals and transparent progress mechanics.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-stax-slate md:grid-cols-4">
            {['Correct incentives', 'Clean narrative', 'Community-first mechanics', 'Hackathon feasibility'].map((item) => (
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
