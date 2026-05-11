export function ModernTemplate({ user, draft }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-8 text-white">
        <div className="text-sm opacity-90">{user?.username ? `@${user.username}` : "@"}</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">{draft.title || "Portfolio"}</h1>
        <div className="mt-2 text-sm opacity-95">{user?.name || "Your Name"}</div>
      </div>

      <div className="grid grid-cols-1 gap-6 px-8 py-8 text-slate-900 dark:text-slate-100 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">About</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700 dark:text-slate-300">
            {draft.bio || "Add a bio (or generate one with AI) to make this portfolio shine."}
          </p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Projects</h2>
          <div className="mt-3 grid grid-cols-1 gap-4">
            {draft.projects?.map((p, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium">{p.title || "Untitled project"}</div>
                  {p.technologies?.length ? (
                    <div className="hidden flex-wrap gap-2 md:flex">
                      {p.technologies.slice(0, 3).map((t, i) => (
                        <span key={i} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                {p.description ? <div className="mt-1 whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">{p.description}</div> : null}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Skills</h2>
          <div className="mt-3 space-y-2">
            {draft.skills?.length ? (
              draft.skills.map((s, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm dark:bg-slate-900/40">
                  <span className="font-medium">{s.name || "Skill"}</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">{s.level || ""}</span>
                </div>
              ))
            ) : (
              <div className="text-sm text-slate-600 dark:text-slate-400">No skills yet.</div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

