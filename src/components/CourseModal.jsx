import React, { useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function CourseModal({ course, onClose }) {
  const { t, s } = useApp();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!course) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.panel,
          border: `1px solid ${t.line}`,
          borderRadius: 16,
          maxWidth: 480,
          width: "100%",
          padding: "30px 28px",
          position: "relative",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <button
          onClick={onClose}
          className="nc-iconbtn"
          aria-label="Close"
          style={{
            position: "absolute",
            top: 16,
            insetInlineEnd: 16,
            background: "none",
            border: `1px solid ${t.line}`,
            borderRadius: "50%",
            width: 30,
            height: 30,
            color: t.muted,
          }}
        >
          <X size={15} />
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: `${t.accent}1f`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <course.icon size={20} color={t.accent} strokeWidth={1.7} />
          </div>
          <h3 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: t.text }}>{course.name}</h3>
        </div>

        <p style={{ fontSize: 14.5, lineHeight: 1.75, color: t.muted, margin: "0 0 22px" }}>
          {course.description}
        </p>

        {course.resources && course.resources.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {course.resources.map((r) => (
              <a
                key={r.url}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 14px",
                  border: `1px solid ${t.line}`,
                  borderRadius: 10,
                  fontSize: 13.5,
                  color: t.text,
                }}
              >
                {r.label}
                <ExternalLink size={14} color={t.accent} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
