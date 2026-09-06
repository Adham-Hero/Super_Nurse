import React from "react";
import { useApp } from "../context/AppContext";

export default function Studies() {
  const { t, s, lang } = useApp();

  return (
    <section id="studies" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px", borderTop: `1px solid ${t.line}` }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 40, color: t.text }}>{s.studiesTitle}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        {s.stackGroups.map((g) => (
          <div key={g.label}>
            <span
              style={{
                fontSize: 12,
                letterSpacing: "0.08em",
                color: t.faint,
                textTransform: lang === "en" ? "uppercase" : "none",
              }}
            >
              {g.label}
            </span>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 16 }}>
              {g.items.map((it) => (
                <div
                  key={it.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: t.panel,
                    border: `1px solid ${t.line}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    boxShadow: t.shadow,
                  }}
                >
                  <it.icon size={18} color={t.accent} strokeWidth={1.6} />
                  <span style={{ fontSize: 14, color: t.text }}>{it.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
