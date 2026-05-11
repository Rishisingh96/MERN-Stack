import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { authStore } from "../store/authStore";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuth = authStore((s) => s.setAuth);

  const from = useMemo(() => location.state?.from || "/dashboard", [location.state]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/login", { email, password });
      setAuth(res.data);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Access your dashboard and build portfolios with live preview.
        </p>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
              {error}
            </div>
          ) : null}

          <Button loading={loading} type="submit" className="w-full">
            Login
          </Button>
        </form>

        <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
          New here?{" "}
          <Link to="/register" className="font-medium text-slate-900 hover:underline dark:text-white">
            Create an account
          </Link>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-900 p-6 text-white dark:bg-slate-900">
        <h2 className="text-lg font-semibold">What you get</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          <li>AI-written bio and project descriptions</li>
          <li>3 responsive templates + light/dark mode</li>
          <li>Export to PDF or static HTML</li>
          <li>Public share link: /portfolio/:username</li>
        </ul>
      </div>
    </div>
  );
}

