import React from "react";
import { useApp } from "../context/AppContext";

export default function About() {
  const { t, s } = useApp();

  return (
    <section
      id="about"
      className="nc-about"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "70px 24px",
        borderTop: `1px solid ${t.line}`,
        display: "grid",
        gridTemplateColumns: "0.8fr 1.2fr",
        gap: 50,
      }}
    >
      <div>
        <span style={{ fontSize: 13, color: t.faint }}>{s.aboutLabel}</span>
      </div>
      <div>
        <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 18px", color: t.text }}>{s.aboutTitle}</h2>
        <p style={{ color: t.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 14 }}>{s.aboutP1}</p>
        <p style={{ color: t.muted, lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>{s.aboutP2}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {s.aboutTags.map((tag) => (
            <span key={tag} style={{ fontSize: 12.5, color: t.text, border: `1px solid ${t.line}`, borderRadius: 20, padding: "6px 14px" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
