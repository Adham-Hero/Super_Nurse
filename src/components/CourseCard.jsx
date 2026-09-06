import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function CourseCard({ icon: Icon, name, description, onClick }) {
  const { t } = useApp();

  return (
    <button
      onClick={onClick}
      className="nc-modern-card nc-course-card"
      style={{
        background: t.panel,
        border: `1px solid ${t.line}`,
        borderRadius: 16,
        padding: "20px 18px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        textAlign: "start",
        cursor: "pointer",
        boxShadow: t.shadow,
        color: t.text,
        width: "100%",
        "--accent": t.accent,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: `${t.accent}17`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={18} color={t.accent} strokeWidth={1.7} />
      </div>

      <span style={{ fontSize: 14.5, fontWeight: 700 }}>{name}</span>

      {description && (
        <p
          style={{
            margin: 0,
            fontSize: 12.5,
            lineHeight: 1.55,
            color: t.muted,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
      )}

      <span
        style={{
          marginTop: "auto",
          paddingTop: 6,
          fontSize: 12,
          color: t.accent,
          fontWeight: 600,
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        View resources <ArrowUpRight size={12} />
      </span>
    </button>
  );
}
