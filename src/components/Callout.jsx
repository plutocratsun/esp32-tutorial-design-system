const styles = {
  tip: { border: "border-primary", bg: "bg-primary/10", label: "Tip" },
  warning: { border: "border-warning", bg: "bg-warning/15", label: "Watch out" },
  danger: { border: "border-danger", bg: "bg-danger/10", label: "Danger" },
};

export default function Callout({ type = "tip", children }) {
  const s = styles[type];
  return (
    <div className={`rounded-card border-l-4 ${s.border} ${s.bg} px-4 py-3 text-left`}>
      <p className="font-heading text-sm font-semibold text-ink">{s.label}</p>
      <div className="mt-1 text-sm text-ink/80">{children}</div>
    </div>
  );
}
