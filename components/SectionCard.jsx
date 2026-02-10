export default function SectionCard({ title, children }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-stax-panel/70 p-6 shadow-card backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
      <div className="space-y-2 text-sm text-stax-slate">{children}</div>
    </article>
  );
}
