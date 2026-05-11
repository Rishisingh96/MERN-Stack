import { create } from "zustand";

const TOKEN_KEY = "aspb_token";
const USER_KEY = "aspb_user";
const THEME_KEY = "aspb_theme";

function safeJsonParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export const authStore = create((set, get) => ({
  token: localStorage.getItem(TOKEN_KEY) || null,
  user: safeJsonParse(localStorage.getItem(USER_KEY)) || null,
  theme: localStorage.getItem(THEME_KEY) || "light",

  setAuth: ({ token, user }) => {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    set({ token, user });
  },

  logout: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    set({ token: null, user: null });
  },

  toggleTheme: () => {
    const next = get().theme === "dark" ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    set({ theme: next });
  },
}));

