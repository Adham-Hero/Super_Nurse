import React from "react";
import { useApp } from "../context/AppContext";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { t, s } = useApp();

  return (
    <section id="services" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px 100px", borderTop: `1px solid ${t.line}` }}>
      <span style={{ fontSize: 12, letterSpacing: "0.1em", color: t.faint }}>{s.servicesEyebrow}</span>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: "10px 0 40px", color: t.text }}>{s.servicesTitle}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "36px 28px" }} className="nc-grid-3">
        {s.services.map((sv, i) => (
          <ServiceCard key={sv.title} index={String(i + 1).padStart(2, "0")} icon={sv.icon} title={sv.title} tags={sv.tags} />
        ))}
      </div>
    </section>
  );
}
