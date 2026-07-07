import { useState } from "react";

export default function CodeBlock({ children, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(children));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-card overflow-hidden bg-dark text-left shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 text-xs text-white/50">
        <span className="font-mono">{language ?? "text"}</span>
        <button
          onClick={handleCopy}
          className="font-heading font-medium text-secondary hover:text-secondary/80"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 pb-4 font-mono text-sm text-white">
        <code>{children}</code>
      </pre>
    </div>
  );
}
