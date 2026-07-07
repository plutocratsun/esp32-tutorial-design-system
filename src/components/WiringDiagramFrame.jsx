export default function WiringDiagramFrame({ caption, children }) {
  return (
    <figure className="rounded-card border-2 border-dashed border-secondary/40 bg-white p-4">
      <div className="flex min-h-40 items-center justify-center">{children}</div>
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-xs text-ink/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
