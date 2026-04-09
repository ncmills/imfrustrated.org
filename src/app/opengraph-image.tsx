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
          backgroundColor: "#1A1A1A",
          position: "relative",
        }}
      >
        {/* Coral glow */}
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

        {/* Logo - speech bubble */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 40 40"
          fill="none"
          style={{ marginBottom: 24 }}
        >
          <rect x="4" y="4" width="32" height="24" rx="6" fill="#E8664A" />
          <polygon points="10,28 10,36 18,28" fill="#E8664A" />
          <line
            x1="13"
            y1="13"
            x2="17"
            y2="15"
            stroke="#FEFCFA"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="27"
            y1="13"
            x2="23"
            y2="15"
            stroke="#FEFCFA"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="15" cy="19" r="1.5" fill="#FEFCFA" />
          <circle cx="25" cy="19" r="1.5" fill="#FEFCFA" />
          <line
            x1="15"
            y1="24"
            x2="25"
            y2="24"
            stroke="#FEFCFA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#FEFCFA",
              fontFamily: "serif",
              letterSpacing: "-0.02em",
            }}
          >
            I'm Frustrated
          </span>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#E8664A",
              fontFamily: "serif",
            }}
          >
            .org
          </span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#E8664A",
            marginBottom: 20,
          }}
        />

        {/* Tagline */}
        <span
          style={{
            fontSize: 28,
            color: "rgba(254, 252, 250, 0.6)",
            fontFamily: "sans-serif",
          }}
        >
          Friends who are also lawyers.
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: 20,
            color: "rgba(254, 252, 250, 0.35)",
            fontFamily: "sans-serif",
            marginTop: 12,
          }}
        >
          Free legal guidance to help you figure out your next step.
        </span>
      </div>
    ),
    { ...size }
  );
}
