import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useApp } from "../context/AppContext";
import { scrollToSection } from "../hooks/useScrollTo";
import nurseImage from "../assets/nurse-hero.png";

export default function Hero() {
  const { t, s, lang } = useApp();

  return (
    <section
      id="home"
      className="nc-hero-grid"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "130px 24px 60px",
        display: "grid",
        gridTemplateColumns: "1.15fr 0.85fr",
        gap: 40,
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ marginBottom: 24 }}>
          <span style={{ fontSize: 13, color: t.muted }}>{s.heroTag}</span>
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 86px)",
            fontWeight: 800,
            textTransform: lang === "en" ? "uppercase" : "none",
            lineHeight: 1.02,
            margin: "0 0 26px",
            letterSpacing: lang === "en" ? "-0.02em" : "normal",
            color: t.text,
          }}
        >
          {s.heroTitleLines[0]}
          <br />
          {s.heroTitleLines[1]}
        </h1>

        <p style={{ maxWidth: 520, fontSize: 16, lineHeight: 1.8, color: t.muted, marginBottom: 30 }}>
          {s.heroSubtitle}
        </p>

        <button
          className="nc-cta"
          onClick={() => scrollToSection("studies")}
          style={{
            background: t.accent,
            color: t.ctaText,
            border: "none",
            borderRadius: 30,
            padding: "14px 26px",
            fontSize: 14,
            fontWeight: 700,
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          {s.cta} <ArrowUpRight size={16} style={{ transform: lang === "ar" ? "scaleX(-1)" : "none" }} />
        </button>

        <div style={{ marginTop: 16 }}>
          <span style={{ fontSize: 13, color: t.faint }}>● {s.enrollment}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: 64, marginTop: 72 }} className="nc-stats">
          {s.stats.map(([n, l]) => (
            <div key={l}>
              <div style={{ fontSize: 38, fontWeight: 800, color: t.text }}>{n}</div>
              <div style={{ fontSize: 13, color: t.muted, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="nc-hero-art"
        style={{
          position: "relative",
          borderRadius: 20,
          background: "#ECEDE7",
          border: `1px solid ${t.line}`,
          boxShadow: t.shadow,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 380,
        }}
      >
        <img
          src={nurseImage}
          alt="Nurse illustration"
          style={{
            width: "82%",
            maxWidth: 280,
            height: "auto",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
