import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "../theme";
import { content } from "../content";

const AppContext = createContext(null);

const MODE_KEY = "sn_theme_mode";
const LANG_KEY = "sn_lang";

function readStored(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }) {
  const [mode, setMode] = useState(() => readStored(MODE_KEY, "dark"));
  const [lang, setLang] = useState(() => readStored(LANG_KEY, "en"));

  useEffect(() => {
    try {
      window.localStorage.setItem(MODE_KEY, mode);
    } catch {
      /* storage unavailable — ignore, in-memory state still works */
    }
  }, [mode]);

  useEffect(() => {
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* storage unavailable — ignore, in-memory state still works */
    }
  }, [lang]);

  const toggleMode = () => setMode((m) => (m === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((l) => (l === "en" ? "ar" : "en"));

  const value = {
    mode,
    lang,
    t: themes[mode],
    s: content[lang],
    toggleMode,
    toggleLang,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}
