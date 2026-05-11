import { create } from "zustand";

export const TEMPLATE_IDS = ["minimal", "modern", "bold"];

const emptyDraft = () => ({
  title: "My Portfolio",
  template: "minimal",
  bio: "",
  projects: [
    { title: "Project 1", description: "", technologies: ["React", "Node.js"] },
  ],
  skills: [{ name: "JavaScript", level: "Intermediate" }],
});

export const portfolioStore = create((set, get) => ({
  draft: emptyDraft(),
  activePortfolioId: null,

  resetDraft: () => set({ draft: emptyDraft(), activePortfolioId: null }),

  setDraft: (patch) => set({ draft: { ...get().draft, ...patch } }),

  setTemplate: (template) => set({ draft: { ...get().draft, template } }),

  updateProject: (index, patch) =>
    set({
      draft: {
        ...get().draft,
        projects: get().draft.projects.map((p, i) => (i === index ? { ...p, ...patch } : p)),
      },
    }),

  addProject: () =>
    set({
      draft: {
        ...get().draft,
        projects: [...get().draft.projects, { title: "", description: "", technologies: [] }],
      },
    }),

  removeProject: (index) =>
    set({
      draft: { ...get().draft, projects: get().draft.projects.filter((_, i) => i !== index) },
    }),

  updateSkill: (index, patch) =>
    set({
      draft: {
        ...get().draft,
        skills: get().draft.skills.map((s, i) => (i === index ? { ...s, ...patch } : s)),
      },
    }),

  addSkill: () =>
    set({
      draft: {
        ...get().draft,
        skills: [...get().draft.skills, { name: "", level: "Intermediate" }],
      },
    }),

  removeSkill: (index) =>
    set({
      draft: { ...get().draft, skills: get().draft.skills.filter((_, i) => i !== index) },
    }),

  setActivePortfolioId: (id) => set({ activePortfolioId: id }),
}));

