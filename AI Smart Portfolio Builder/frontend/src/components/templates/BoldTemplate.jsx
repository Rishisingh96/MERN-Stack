export function BoldTemplate({ user, draft }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            {user?.username ? `@${user.username}` : "Public portfolio"}
          </div>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {draft.title || "Portfolio"}
          </h1>
          <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{user?.name || "Your Name"}</div>
        </div>

        <div className="rounded-2xl bg-slate-900 px-5 py-4 text-white dark:bg-slate-100 dark:text-slate-900">
          <div className="text-xs font-semibold uppercase tracking-widest opacity-80">Skills</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {draft.skills?.slice(0, 12).map((s, idx) => (
              <span key={idx} className="rounded-full bg-white/10 px-3 py-1 text-xs dark:bg-slate-900/10">
                {s.name || "Skill"}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Bio</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700 dark:text-slate-300">
            {draft.bio || "Generate a bio to make your portfolio feel polished and hiring-ready."}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Highlights</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
            <li>Fast, responsive UI</li>
            <li>AI-assisted writing</li>
            <li>Export and share publicly</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Projects</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-2">
          {draft.projects?.map((p, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800">
              <div className="text-base font-semibold text-slate-900 dark:text-slate-100">{p.title || "Untitled project"}</div>
              {p.description ? <div className="mt-2 whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">{p.description}</div> : null}
              {p.technologies?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.technologies.map((t, i) => (
                    <span key={i} className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-700 dark:border-slate-800 dark:text-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

