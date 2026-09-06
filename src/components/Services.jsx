import React from "react";
import { useApp } from "../context/AppContext";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { t, s, lang } = useApp();

  return (
    <section id="services" style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px", borderTop: `1px solid ${t.line}` }}>
      <span style={{ fontSize: 12, letterSpacing: lang === "en" ? "0.1em" : "normal", color: t.faint }}>
        {s.servicesEyebrow}
      </span>
      <h2 style={{ fontSize: 22, fontWeight: 700, margin: "10px 0 32px", color: t.text }}>{s.servicesTitle}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="nc-grid-3">
        {s.services.map((sv) => (
          <ServiceCard
            key={sv.title}
            icon={sv.icon}
            title={sv.title}
            description={sv.description}
            tags={sv.tags}
            link={sv.link}
            linkLabel={sv.linkLabel}
          />
        ))}
      </div>
    </section>
  );
}
