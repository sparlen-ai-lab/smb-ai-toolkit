import { ImageResponse } from "next/og";

export const alt = "Sparlen — AI Agent Consulting & Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#07090f",
          color: "#e8edf4",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 99,
              backgroundColor: "#3ec8b8",
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: "-0.03em" }}>Sparlen</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            AI agents that run your business workflows.
          </div>
          <div style={{ fontSize: 28, color: "#9aa3b2" }}>
            Consulting and development
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
