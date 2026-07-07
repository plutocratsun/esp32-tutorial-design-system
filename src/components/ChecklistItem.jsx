export default function ChecklistItem({ children, checked = false }) {
  return (
    <li className="flex items-center gap-3 text-left">
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 ${
          checked ? "border-secondary bg-secondary text-white" : "border-ink/30"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none">
            <path
              d="M3 8.5L6.5 12L13 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className="text-ink/90">{children}</span>
    </li>
  );
}
