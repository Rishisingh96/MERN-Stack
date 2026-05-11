export function Button({ variant = "primary", loading, children, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
      : "border border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900";

  return (
    <button {...props} className={[base, styles, props.className || ""].join(" ")} disabled={loading || props.disabled}>
      {loading ? "Loading..." : children}
    </button>
  );
}

