import React, { useEffect, useState } from "react";
import { Syringe, Menu, X, Sun, Moon, Languages } from "lucide-react";
import { useApp } from "../context/AppContext";
import { scrollToSection } from "../hooks/useScrollTo";

export default function Nav() {
  const { t, s, mode, lang, toggleMode, toggleLang } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = s.navLinks.map((l) => l.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [s.navLinks]);

  const go = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      dir="ltr"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? t.navBg : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.line}` : "1px solid transparent",
        transition: "all .25s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div className="nc-link" onClick={() => go("home")} style={{ display: "flex", alignItems: "center", gap: "9px", color: t.text }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: `${t.accent}1f`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Syringe size={16} color={t.accent} strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: 15, fontWeight: 700 }}>{s.brand}</span>
        </div>

        <nav className="nc-desktop-nav" style={{ display: "flex", gap: 26 }}>
          {s.navLinks.map((l) => {
            const isActive = activeId === l.id;
            return (
              <span
                key={l.id}
                className="nc-link"
                onClick={() => go(l.id)}
                style={{
                  fontSize: 13.5,
                  color: isActive ? t.accent : t.muted,
                  fontWeight: isActive ? 700 : 400,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  transition: "color .2s ease",
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: t.accent,
                      display: "inline-block",
                    }}
                  />
                )}
                {l.label}
              </span>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            className="nc-iconbtn"
            onClick={toggleLang}
            style={{ background: "none", border: `1px solid ${t.line}`, borderRadius: 20, color: t.muted, padding: "7px 12px", fontSize: 12.5, gap: 6 }}
          >
            <Languages size={14} /> {s.langSwitchLabel}
          </button>
          <button
            className="nc-iconbtn"
            onClick={toggleMode}
            aria-label="Toggle theme"
            style={{ background: "none", border: `1px solid ${t.line}`, borderRadius: "50%", color: t.muted, width: 32, height: 32 }}
          >
            {mode === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="nc-mobile-toggle nc-iconbtn"
            onClick={() => setMenuOpen((v) => !v)}
            style={{ background: "none", border: `1px solid ${t.line}`, borderRadius: 8, color: t.text, width: 32, height: 32 }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          dir="ltr"
          style={{
            padding: "8px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 14,
            background: t.navBg,
            backdropFilter: "blur(12px)",
            borderBottom: `1px solid ${t.line}`,
          }}
        >
          {s.navLinks.map((l) => (
            <span
              key={l.id}
              onClick={() => go(l.id)}
              style={{ fontSize: 15, color: activeId === l.id ? t.accent : t.muted, fontWeight: activeId === l.id ? 700 : 400, cursor: "pointer" }}
            >
              {l.label}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
