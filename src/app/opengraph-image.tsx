import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "I'm Frustrated dot Org — Free legal guidance from friends who are also lawyers";
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
          background:
            "linear-gradient(180deg, #faf6ef 0%, #f0e9dc 100%)",
          position: "relative",
          padding: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(45, 74, 62, 0.08)",
            filter: "blur(90px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(192, 138, 62, 0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Glyph */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 48 48"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M24 5.5c10.493 0 19 7.387 19 16.5 0 9.113-8.507 16.5-19 16.5-1.866 0-3.668-.234-5.372-.67L9.6 42.5l2.658-8.02C8.136 31.44 5 26.98 5 22 5 12.887 13.507 5.5 24 5.5Z"
            fill="#2d4a3e"
          />
          <path d="M13.5 16 L20 20" stroke="#c08a3e" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M34.5 16 L28 20" stroke="#c08a3e" strokeWidth="2.8" strokeLinecap="round" />
          <circle cx="18" cy="24" r="1.8" fill="#c08a3e" />
          <circle cx="30" cy="24" r="1.8" fill="#c08a3e" />
          <path
            d="M18.5 32 Q24 28 29.5 32"
            stroke="#c08a3e"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginBottom: 18,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 600,
              color: "#1f1a14",
              fontFamily: "Georgia, serif",
              letterSpacing: "-0.025em",
            }}
          >
            I&rsquo;m Frustrated
          </span>
          <span
            style={{
              fontSize: 44,
              fontWeight: 500,
              color: "#c08a3e",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              position: "relative",
              top: 10,
              letterSpacing: "-0.01em",
            }}
          >
            .org
          </span>
        </div>

        {/* Rule */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#c08a3e",
            marginBottom: 26,
          }}
        />

        {/* Tagline */}
        <span
          style={{
            fontSize: 36,
            color: "#3a3128",
            fontFamily: "Georgia, serif",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Friends who are also lawyers<span style={{ color: "#c08a3e" }}>.</span>
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: 22,
            color: "#6b5d4a",
            fontFamily: "sans-serif",
            marginTop: 14,
            textAlign: "center",
          }}
        >
          The conversation you have before you hire a lawyer.
        </span>
      </div>
    ),
    { ...size }
  );
}
