export function MinimalTemplate({ user, draft }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">{draft.title || "Untitled Portfolio"}</h1>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {user?.name ? user.name : "Your Name"} {user?.username ? `· @${user.username}` : ""}
        </div>
      </header>

      {draft.bio ? (
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Bio</h2>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-6">{draft.bio}</p>
        </section>
      ) : null}

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Projects</h2>
        <div className="mt-3 space-y-4">
          {draft.projects?.length ? (
            draft.projects.map((p, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="font-medium">{p.title || "Untitled project"}</div>
                {p.description ? <div className="mt-1 whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-300">{p.description}</div> : null}
                {p.technologies?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.technologies.map((t, i) => (
                      <span key={i} className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="text-sm text-slate-600 dark:text-slate-400">No projects yet.</div>
          )}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {draft.skills?.length ? (
            draft.skills.map((s, idx) => (
              <span key={idx} className="rounded-full border border-slate-200 px-3 py-1 text-xs dark:border-slate-800">
                {s.name || "Skill"} {s.level ? <span className="text-slate-500 dark:text-slate-400">· {s.level}</span> : null}
              </span>
            ))
          ) : (
            <div className="text-sm text-slate-600 dark:text-slate-400">No skills yet.</div>
          )}
        </div>
      </section>
    </div>
  );
}

