import CodeBlock from "./CodeBlock";
import Callout from "./Callout";
import ChecklistItem from "./ChecklistItem";
import WiringDiagramFrame from "./WiringDiagramFrame";

export default function ProjectSection({ id, title, parts, wiring, code, tip }) {
  return (
    <section id={id} className="scroll-mt-6 rounded-card border border-black/5 bg-white p-6 shadow-sm">
      <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>

      <p className="mt-3 text-sm font-semibold text-ink/60">Parts needed</p>
      <ul className="mt-1 space-y-1">
        {parts.map((part) => (
          <ChecklistItem key={part} checked>
            {part}
          </ChecklistItem>
        ))}
      </ul>

      <p className="mt-4 text-sm font-semibold text-ink/60">Wiring</p>
      <WiringDiagramFrame caption={wiring}>
        <span className="font-mono text-sm text-ink/50">[ wiring diagram ]</span>
      </WiringDiagramFrame>

      <p className="mt-4 text-sm font-semibold text-ink/60">Code</p>
      <CodeBlock language="cpp">{code}</CodeBlock>

      {tip && (
        <div className="mt-4">
          <Callout type={tip.type}>{tip.text}</Callout>
        </div>
      )}
    </section>
  );
}
