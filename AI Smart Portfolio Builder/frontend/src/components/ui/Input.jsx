export function Input({ label, error, ...props }) {
  return (
    <label className="block">
      {label ? <div className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200">{label}</div> : null}
      <input
        {...props}
        className={[
          "w-full rounded-lg border px-3 py-2 text-sm outline-none transition",
          "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400",
          "focus:border-slate-400",
          "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500",
          error ? "border-red-400 focus:border-red-500 dark:border-red-500" : "",
        ].join(" ")}
      />
      {error ? <div className="mt-1 text-xs text-red-600">{error}</div> : null}
    </label>
  );
}

