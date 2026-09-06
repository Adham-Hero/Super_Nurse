import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ServiceCard({ index, icon: Icon, title, tags, link, linkLabel }) {
  const { t } = useApp();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        className="nc-thumb"
        style={{
          background: t.panel,
          border: `1px solid ${t.line}`,
          borderRadius: 10,
          aspectRatio: "4 / 3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: t.shadow,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 25% 20%, ${t.accent}22, transparent 65%)`,
          }}
        />
        <Icon size={44} color={t.accent} strokeWidth={1.2} />
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: t.faint }}>_{index}.</span>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: t.text }}>{title}</h3>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingInlineStart: 26, marginBottom: link ? 12 : 0 }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
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
              marginInlineStart: 26,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              color: t.accent,
            }}
          >
            {linkLabel || "Open"} <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
