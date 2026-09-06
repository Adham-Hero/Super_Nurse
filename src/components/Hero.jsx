import React from "react";
import { ArrowUpRight, HeartPulse } from "lucide-react";
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 420,
        }}
      >
        {/* organic blob backdrop, tinted with the active accent color */}
        <div
          style={{
            position: "absolute",
            width: "88%",
            height: "88%",
            background: `linear-gradient(160deg, ${t.accent}33, ${t.accent}0d)`,
            borderRadius: "42% 58% 63% 37% / 45% 40% 60% 55%",
            filter: "blur(0.5px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "60%",
            height: "60%",
            border: `1.5px dashed ${t.line}`,
            borderRadius: "50%",
          }}
        />

        <img
          src={nurseImage}
          alt="Illustration of a nurse in scrubs with a stethoscope"
          style={{
            position: "relative",
            width: "62%",
            maxWidth: 240,
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.25))",
          }}
        />

        {/* floating stat badge */}
        <div
          style={{
            position: "absolute",
            bottom: "8%",
            insetInlineStart: "6%",
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: t.panel,
            border: `1px solid ${t.line}`,
            borderRadius: 14,
            padding: "10px 14px",
            boxShadow: t.shadow,
          }}
          className="nc-floating-badge"
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: 9,
              background: `${t.accent}1f`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <HeartPulse size={15} color={t.accent} strokeWidth={1.8} />
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: t.text }}>{s.stats[2][0]}</div>
            <div style={{ fontSize: 10.5, color: t.muted }}>{s.stats[2][1]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
