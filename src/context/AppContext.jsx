import React, { createContext, useContext, useState } from "react";
import { themes } from "../theme";
import { content } from "../content";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [mode, setMode] = useState("dark");
  const [lang, setLang] = useState("en");

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
