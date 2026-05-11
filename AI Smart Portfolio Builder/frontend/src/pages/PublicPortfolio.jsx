import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import { TemplateRenderer } from "../components/templates/TemplateRenderer";

export function PublicPortfolioPage() {
  const { username } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const draft = useMemo(() => {
    if (!data) return null;
    return {
      title: data.portfolio?.title,
      template: data.portfolio?.template,
      bio: data.portfolio?.bio,
      projects: data.projects || [],
      skills: data.skills || [],
    };
  }, [data]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setError("");
      try {
        const res = await api.get(`/public/portfolio/${username}`);
        if (!cancelled) setData(res.data);
      } catch (err) {
        if (!cancelled) setError(err?.response?.data?.error || "Not found");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [username]);

  if (loading) return <div className="text-sm text-slate-600 dark:text-slate-400">Loading...</div>;
  if (error) return <div className="text-sm text-red-600">{error}</div>;
  if (!draft) return null;

  return (
    <div className="space-y-4">
      <div className="text-xs text-slate-500 dark:text-slate-400">
        Public portfolio: <span className="font-mono">@{data.user?.username}</span>
      </div>
      <TemplateRenderer template={draft.template} user={data.user} draft={draft} />
    </div>
  );
}

