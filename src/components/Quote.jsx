import React from "react";
import { useApp } from "../context/AppContext";

export default function Quote() {
  const { t, s } = useApp();

  return (
    <section style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px", borderTop: `1px solid ${t.line}` }}>
      <p style={{ fontSize: "clamp(20px, 3vw, 30px)", lineHeight: 1.6, color: t.text, maxWidth: 820, fontWeight: 500 }}>
        {s.quote}
      </p>
    </section>
  );
}
