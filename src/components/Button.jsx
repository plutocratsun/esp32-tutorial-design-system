const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "border-2 border-secondary text-secondary bg-transparent hover:bg-secondary/10",
};

export default function Button({ variant = "primary", children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-heading font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
