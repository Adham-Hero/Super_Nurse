import React from "react";
import { useApp } from "../context/AppContext";

export default function History() {
  const { t, s } = useApp();

  return (
    <section id="history" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px", borderTop: `1px solid ${t.line}` }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, color: t.text }}>{s.historyTitle}</h2>
      <p style={{ color: t.muted, fontSize: 14.5, marginBottom: 34 }}>{s.historySubtitle}</p>

      <div>
        {s.history.map((h, i) => (
          <div
            key={h.period}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 0",
              borderBottom: i !== s.history.length - 1 ? `1px solid ${t.line}` : "none",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, color: t.text }}>{h.title}</div>
              <div style={{ fontSize: 13.5, color: t.muted, marginTop: 3 }}>{h.note}</div>
            </div>
            <div style={{ fontSize: 14, color: t.faint }}>{h.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
