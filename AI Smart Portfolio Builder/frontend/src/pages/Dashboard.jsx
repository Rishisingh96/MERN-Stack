import { useMemo } from "react";
import { Link } from "react-router-dom";
import { authStore } from "../store/authStore";
import { config } from "../config";

export function DashboardPage() {
  const user = authStore((s) => s.user);

  const publicUrl = useMemo(() => {
    if (!user?.username) return "";
    return `${window.location.origin}/portfolio/${user.username}`;
  }, [user?.username]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950 lg:col-span-2">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Welcome{user?.name ? `, ${user.name}` : ""}. Build a portfolio with AI and export it when you're ready.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/create"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
          >
            Create / Edit Portfolio
          </Link>
          {user?.username ? (
            <a
              href={publicUrl}
              className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
            >
              View public page
            </a>
          ) : null}
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/30 dark:text-slate-200">
          <div className="font-medium">API base</div>
          <div className="mt-1 font-mono text-xs">{config.apiBaseUrl}</div>
        </div>
      </section>

      <aside className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-lg font-semibold">Public share</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Your latest portfolio will be available at:
        </p>
        <div className="mt-3 break-words rounded-xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs dark:border-slate-800 dark:bg-slate-900/30">
          {user?.username ? `/portfolio/${user.username}` : "Set a username during registration"}
        </div>
      </aside>
    </div>
  );
}

