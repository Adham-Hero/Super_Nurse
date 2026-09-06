import React from "react";
import { useApp } from "../context/AppContext";

export default function Footer() {
  const { t, s } = useApp();

  return (
    <footer style={{ borderTop: `1px solid ${t.line}`, padding: "70px 24px 34px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, marginBottom: 34, color: t.text }}>
          {s.footerQuestion}
        </h2>
        <div style={{ borderTop: `1px solid ${t.line}`, paddingTop: 20, fontSize: 13, color: t.faint }}>
          {s.footerCredit}
        </div>
      </div>
    </footer>
  );
}
