import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";

export default function Studies() {
  const { t, s, lang } = useApp();
  const [selected, setSelected] = useState(null);

  return (
    <section id="studies" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px", borderTop: `1px solid ${t.line}` }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: t.text }}>{s.studiesTitle}</h2>
      {s.studiesHint && <p style={{ fontSize: 13.5, color: t.muted, marginBottom: 36 }}>{s.studiesHint}</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {s.stackGroups.map((g) => (
          <div key={g.label}>
            <span
              style={{
                display: "inline-block",
                fontSize: 11.5,
                letterSpacing: lang === "en" ? "0.08em" : "normal",
                textTransform: lang === "en" ? "uppercase" : "none",
                color: t.accent,
                background: `${t.accent}14`,
                borderRadius: 20,
                padding: "5px 14px",
                marginBottom: 16,
                fontWeight: 700,
              }}
            >
              {g.label}
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="nc-grid-3">
              {g.items.map((it) => (
                <CourseCard
                  key={it.name}
                  icon={it.icon}
                  name={it.name}
                  description={it.description}
                  onClick={() => setSelected(it)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
