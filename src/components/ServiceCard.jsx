import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ServiceCard({ icon: Icon, title, description, tags, link, linkLabel }) {
  const { t } = useApp();

  return (
    <div
      className="nc-modern-card"
      style={{
        background: t.panel,
        border: `1px solid ${t.line}`,
        borderRadius: 18,
        padding: "24px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        height: "100%",
        boxShadow: t.shadow,
        "--accent": t.accent,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 13,
          background: `${t.accent}17`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={21} color={t.accent} strokeWidth={1.7} />
      </div>

      <h3 style={{ margin: 0, fontSize: 16.5, fontWeight: 700, color: t.text }}>{title}</h3>

      {description && (
        <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.65, color: t.muted }}>{description}</p>
      )}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto", paddingTop: 6 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 11.5,
              color: t.muted,
              border: `1px solid ${t.line}`,
              borderRadius: 20,
              padding: "3px 10px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: `${t.accent}14`,
            color: t.accent,
            borderRadius: 10,
            padding: "10px 14px",
            fontSize: 13.5,
            fontWeight: 700,
          }}
        >
          {linkLabel || "Open"} <ArrowUpRight size={15} />
        </a>
      )}
    </div>
  );
}
