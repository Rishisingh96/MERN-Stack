import axios from "axios";
import { config } from "../config";
import { authStore } from "../store/authStore";

export const api = axios.create({
  baseURL: `${config.apiBaseUrl}/api`,
  timeout: 20000,
});

api.interceptors.request.use((req) => {
  const token = authStore.getState().token;
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      authStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

