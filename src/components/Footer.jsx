import React from "react";
import { useApp } from "../context/AppContext";
import { footer } from "../data/footer";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer style={{ borderTop: `1px solid ${t.line}`, padding: "34px 24px" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          textAlign: "center",
          fontSize: 13,
          color: t.faint,
        }}
      >
        {footer.credit}
      </div>
    </footer>
  );
}
