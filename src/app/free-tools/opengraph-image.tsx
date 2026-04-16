import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Tools — I'm Frustrated dot Org — free legal tools for the people we serve";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1A1A1A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(232, 102, 74, 0.12)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(232, 102, 74, 0.08)",
            filter: "blur(60px)",
          }}
        />

        <span
          style={{
            fontSize: 24,
            color: "#E8664A",
            fontFamily: "sans-serif",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Free Tools
        </span>

        <span
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#FEFCFA",
            fontFamily: "serif",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          Free legal tools, built for the
          <br />
          people we serve<span style={{ color: "#E8664A" }}>.</span>
        </span>

        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#E8664A",
            marginTop: 36,
            marginBottom: 24,
          }}
        />

        <span
          style={{
            fontSize: 24,
            color: "rgba(254, 252, 250, 0.55)",
            fontFamily: "sans-serif",
          }}
        >
          imfrustrated.org/free-tools
        </span>
      </div>
    ),
    { ...size }
  );
}
