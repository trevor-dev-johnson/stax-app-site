import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 selection:bg-orange-500/30 font-sans">
      {/* Subtle Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-orange-600/5 blur-[120px]" />
      </div>

      {/* Header */}
      <nav className="relative z-10 flex justify-between items-center max-w-3xl mx-auto px-6 py-12">
        <div className="text-xl font-bold tracking-tighter uppercase italic text-white">
          Stax
        </div>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
          Seeker Dapp Store
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 pt-12 pb-24">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8">
          Build your <br />
          <span className="text-orange-500">STAX.</span>
        </h1>

        <p className="max-w-xl text-xl md:text-2xl text-slate-400 leading-relaxed">
          The non-custodial Seeker dapp that{" "}
          <span className="text-slate-100">
            turns saving into a habit of growth.
          </span>
        </p>

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/30">
          No charts. No price tracking. No speculation.
        </p>
      </section>

      {/* Read-Only Trust Section */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500 mb-12">
          Read-Only by Design
        </h2>

        <div className="grid gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              No transaction signing.
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Stax never requests permission to move funds or sign transactions.
              It only reads your wallet balance to measure long-term growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-2">
                Non-Custodial
              </h4>
              <p className="text-sm text-slate-500">
                Your private keys remain inside Seeker’s secure element. Stax
                never sees them.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-2">
                Discipline First
              </h4>
              <p className="text-sm text-slate-500">
                No charts or price watching. Only balance milestones and
                consistency tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-16 border-t border-white/5">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-12">
          The Framework
        </h2>

        <ul className="space-y-8">
          <li className="flex items-start gap-6">
            <span className="text-orange-500 font-mono pt-1 text-sm">01</span>
            <p className="text-lg text-white">
              Connect your wallet in read-only mode.
            </p>
          </li>

          <li className="flex items-start gap-6">
            <span className="text-orange-500 font-mono pt-1 text-sm">02</span>
            <p className="text-lg text-white">
              Track progress toward your long-term stax.
            </p>
          </li>

          <li className="flex items-start gap-6">
            <span className="text-orange-500 font-mono pt-1 text-sm">03</span>
            <p className="text-lg text-white">
              Earn streaks for every week of consistent growth.
            </p>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-3xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/20 tracking-widest uppercase">
            Built for the Solana Seeker Ecosystem
          </p>
          <p className="text-[10px] text-white/20 tracking-widest uppercase">
            © 2026 Stax
          </p>
        </div>
      </footer>
    </main>
  );
}
