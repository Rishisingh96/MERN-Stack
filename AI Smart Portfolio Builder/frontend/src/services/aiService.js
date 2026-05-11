import { api } from "./api";

export async function generateBio(payload) {
  const res = await api.post("/ai/generate-bio", payload);
  return res.data;
}

export async function generateProjectDescription(payload) {
  const res = await api.post("/ai/generate-project-description", payload);
  return res.data;
}

export async function suggestSkills(payload) {
  const res = await api.post("/ai/suggest-skills", payload);
  return res.data;
}

