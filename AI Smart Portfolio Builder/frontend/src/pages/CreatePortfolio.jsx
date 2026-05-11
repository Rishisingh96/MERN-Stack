import { useMemo, useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { authStore } from "../store/authStore";
import { portfolioStore, TEMPLATE_IDS } from "../store/portfolioStore";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { TemplateRenderer } from "../components/templates/TemplateRenderer";
import { createPortfolio, updatePortfolio } from "../services/portfolioService";
import { generateBio, generateProjectDescription, suggestSkills } from "../services/aiService";

function splitTech(value) {
  return String(value || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function CreatePortfolioPage() {
  const user = authStore((s) => s.user);

  const draft = portfolioStore((s) => s.draft);
  const setDraft = portfolioStore((s) => s.setDraft);
  const setTemplate = portfolioStore((s) => s.setTemplate);
  const updateProject = portfolioStore((s) => s.updateProject);
  const addProject = portfolioStore((s) => s.addProject);
  const removeProject = portfolioStore((s) => s.removeProject);
  const updateSkill = portfolioStore((s) => s.updateSkill);
  const addSkill = portfolioStore((s) => s.addSkill);
  const removeSkill = portfolioStore((s) => s.removeSkill);
  const activePortfolioId = portfolioStore((s) => s.activePortfolioId);
  const setActivePortfolioId = portfolioStore((s) => s.setActivePortfolioId);

  const previewRef = useRef(null);

  const [saving, setSaving] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const payload = useMemo(
    () => ({
      title: draft.title,
      template: draft.template,
      bio: draft.bio,
      projects: draft.projects,
      skills: draft.skills,
    }),
    [draft]
  );

  async function onSave() {
    setError("");
    setSuccess("");
    setSaving(true);
    try {
      if (activePortfolioId) {
        const res = await updatePortfolio({ id: activePortfolioId, ...payload });
        setSuccess("Updated.");
        return res;
      }
      const res = await createPortfolio(payload);
      setActivePortfolioId(res.portfolio._id);
      setSuccess("Created.");
      return res;
    } catch (err) {
      setError(err?.response?.data?.error || "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function onGenerateBio() {
    setError("");
    setSuccess("");
    setAiLoading(true);
    try {
      const res = await generateBio({
        name: user?.name || "Developer",
        role: "Full-stack Developer",
        years: 2,
        skills: (draft.skills || []).map((s) => s.name).filter(Boolean),
        highlights: ["Portfolio builder", "AI-assisted writing"],
        tone: "professional",
      });
      setDraft({ bio: res.bio });
      setSuccess("Bio generated.");
    } catch (err) {
      setError(err?.response?.data?.error || "AI bio failed (check OPENAI_API_KEY).");
    } finally {
      setAiLoading(false);
    }
  }

  async function onImproveProject(index) {
    setError("");
    setSuccess("");
    setAiLoading(true);
    try {
      const project = draft.projects[index];
      const res = await generateProjectDescription({
        title: project.title || "Project",
        technologies: project.technologies || [],
        bullets: [],
        targetRole: "Full-stack Developer",
      });
      updateProject(index, { description: res.description });
      setSuccess("Project description improved.");
    } catch (err) {
      setError(err?.response?.data?.error || "AI project description failed.");
    } finally {
      setAiLoading(false);
    }
  }

  async function onSuggestSkills() {
    setError("");
    setSuccess("");
    setAiLoading(true);
    try {
      const res = await suggestSkills({
        role: "Full-stack Developer",
        seniority: "mid",
        currentSkills: (draft.skills || []).map((s) => s.name).filter(Boolean),
      });
      const merged = Array.from(
        new Set([...(draft.skills || []).map((s) => s.name).filter(Boolean), ...(res.skills || [])])
      ).slice(0, 20);
      setDraft({ skills: merged.map((name) => ({ name, level: "Intermediate" })) });
      setSuccess("Skills suggested.");
    } catch (err) {
      setError(err?.response?.data?.error || "AI skills suggestion failed.");
    } finally {
      setAiLoading(false);
    }
  }

  async function exportPdf() {
    setError("");
    setSuccess("");
    if (!previewRef.current) return;
    try {
      const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: null });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let y = 0;

      pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
      while (imgHeight + y > pageHeight) {
        y -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, y, imgWidth, imgHeight);
      }
      pdf.save(`${(user?.username || "portfolio")}.pdf`);
    } catch (err) {
      setError("PDF export failed");
    }
  }

  function exportHtml() {
    setError("");
    setSuccess("");
    if (!previewRef.current) return;
    const html = `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${draft.title}</title></head><body>${previewRef.current.outerHTML}</body></html>`;
    const blob = new Blob([html], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(user?.username || "portfolio")}.html`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-xl font-semibold">Create portfolio</h1>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={onSuggestSkills} loading={aiLoading} type="button">
              Suggest skills
            </Button>
            <Button variant="secondary" onClick={onGenerateBio} loading={aiLoading} type="button">
              Generate bio
            </Button>
            <Button onClick={onSave} loading={saving} type="button">
              {activePortfolioId ? "Update" : "Save"}
            </Button>
          </div>
        </div>

        {error ? (
          <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-200">
            {success}
          </div>
        ) : null}

        <div className="mt-6 space-y-4">
          <Input label="Portfolio title" value={draft.title} onChange={(e) => setDraft({ title: e.target.value })} />

          <label className="block">
            <div className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200">Template</div>
            <select
              value={draft.template}
              onChange={(e) => setTemplate(e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
            >
              {TEMPLATE_IDS.map((id) => (
                <option key={id} value={id}>
                  {id}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <div className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200">Bio</div>
            <textarea
              value={draft.bio}
              onChange={(e) => setDraft({ bio: e.target.value })}
              rows={5}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
              placeholder="Write a short bio, or generate with AI."
            />
          </label>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">Projects</h2>
            <Button variant="secondary" type="button" onClick={addProject}>
              Add project
            </Button>
          </div>

          <div className="mt-4 space-y-4">
            {draft.projects.map((p, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-200">Project #{idx + 1}</div>
                  <div className="flex gap-2">
                    <Button variant="secondary" type="button" loading={aiLoading} onClick={() => onImproveProject(idx)}>
                      Improve with AI
                    </Button>
                    <Button variant="secondary" type="button" onClick={() => removeProject(idx)}>
                      Remove
                    </Button>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3">
                  <Input
                    label="Title"
                    value={p.title}
                    onChange={(e) => updateProject(idx, { title: e.target.value })}
                  />
                  <label className="block">
                    <div className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200">Technologies (comma separated)</div>
                    <input
                      value={(p.technologies || []).join(", ")}
                      onChange={(e) => updateProject(idx, { technologies: splitTech(e.target.value) })}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
                      placeholder="React, Node.js, MongoDB"
                    />
                  </label>
                  <label className="block">
                    <div className="mb-1 text-sm font-medium text-slate-700 dark:text-slate-200">Description</div>
                    <textarea
                      value={p.description}
                      onChange={(e) => updateProject(idx, { description: e.target.value })}
                      rows={4}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold">Skills</h2>
            <Button variant="secondary" type="button" onClick={addSkill}>
              Add skill
            </Button>
          </div>

          <div className="mt-4 space-y-3">
            {draft.skills.map((s, idx) => (
              <div key={idx} className="grid grid-cols-1 gap-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800 md:grid-cols-3">
                <Input label="Name" value={s.name} onChange={(e) => updateSkill(idx, { name: e.target.value })} />
                <Input label="Level" value={s.level} onChange={(e) => updateSkill(idx, { level: e.target.value })} />
                <div className="flex items-end">
                  <Button variant="secondary" type="button" onClick={() => removeSkill(idx)} className="w-full">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Button variant="secondary" type="button" onClick={exportPdf}>
            Export PDF
          </Button>
          <Button variant="secondary" type="button" onClick={exportHtml}>
            Export HTML
          </Button>
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold">Live preview</h2>
          <div className="text-xs text-slate-500 dark:text-slate-400">Updates as you type</div>
        </div>

        <div ref={previewRef}>
          <TemplateRenderer template={draft.template} user={user} draft={draft} />
        </div>
      </section>
    </div>
  );
}

