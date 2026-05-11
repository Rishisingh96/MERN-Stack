import { api } from "./api";

export async function createPortfolio(payload) {
  const res = await api.post("/portfolio/create", payload);
  return res.data;
}

export async function getPortfolio(id) {
  const res = await api.get(`/portfolio/${id}`);
  return res.data;
}

export async function updatePortfolio(payload) {
  const res = await api.put("/portfolio/update", payload);
  return res.data;
}

export async function deletePortfolio(id) {
  const res = await api.delete("/portfolio/delete", { data: { id } });
  return res.data;
}

