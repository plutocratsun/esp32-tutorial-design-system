export default function StepCard({ number, title, children, media }) {
  return (
    <div className="rounded-card border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-white">
          {number}
        </span>
        <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-3 pl-12 text-ink/80">{children}</div>
      {media && <div className="mt-4 pl-12">{media}</div>}
    </div>
  );
}
