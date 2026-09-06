import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import CourseModal from "./CourseModal";

export default function Studies() {
  const { t, s, lang } = useApp();
  const [selected, setSelected] = useState(null);

  return (
    <section id="studies" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px", borderTop: `1px solid ${t.line}` }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: t.text }}>{s.studiesTitle}</h2>
      {s.studiesHint && (
        <p style={{ fontSize: 13.5, color: t.muted, marginBottom: 32 }}>{s.studiesHint}</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
        {s.stackGroups.map((g) => (
          <div key={g.label}>
            <span
              style={{
                fontSize: 12,
                letterSpacing: lang === "en" ? "0.08em" : "normal",
                color: t.faint,
                textTransform: lang === "en" ? "uppercase" : "none",
              }}
            >
              {g.label}
            </span>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 16 }}>
              {g.items.map((it) => (
                <button
                  key={it.name}
                  onClick={() => setSelected(it)}
                  className="nc-iconbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: t.panel,
                    border: `1px solid ${t.line}`,
                    borderRadius: 10,
                    padding: "12px 16px",
                    boxShadow: t.shadow,
                    color: t.text,
                    cursor: "pointer",
                  }}
                >
                  <it.icon size={18} color={t.accent} strokeWidth={1.6} />
                  <span style={{ fontSize: 14 }}>{it.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
