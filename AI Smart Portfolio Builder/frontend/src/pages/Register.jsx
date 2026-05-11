import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { authStore } from "../store/authStore";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function RegisterPage() {
  const navigate = useNavigate();
  const setAuth = authStore((s) => s.setAuth);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.post("/auth/register", { name, username, email, password });
      setAuth(res.data);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <h1 className="text-xl font-semibold">Create account</h1>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Your public share URL will use your username.</p>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <Input label="Full name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        <Input label="Username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" />
        <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        ) : null}

        <Button loading={loading} type="submit" className="w-full">
          Register
        </Button>
      </form>

      <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-slate-900 hover:underline dark:text-white">
          Login
        </Link>
      </div>
    </div>
  );
}

