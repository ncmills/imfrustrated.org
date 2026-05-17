import { ImageResponse } from "next/og";
import { categoryMeta, getLettersByCategory, type LetterCategory } from "@/data/letters";

export const runtime = "edge";
export const alt = "Free letter template library — I'm Frustrated dot Org";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = categoryMeta[category as LetterCategory];
  const letters = meta ? getLettersByCategory(meta.slug) : [];
  const label = meta?.label ?? "Letters";
  const count = letters.length;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#faf6ef",
          position: "relative",
          padding: "80px 80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(45, 74, 62, 0.06)",
            filter: "blur(140px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(192, 138, 62, 0.09)",
            filter: "blur(120px)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <span style={{ width: 36, height: 2, backgroundColor: "#c08a3e" }} />
          <span
            style={{
              fontSize: 20,
              color: "#c08a3e",
              fontFamily: "sans-serif",
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            {label} Letter Templates
          </span>
        </div>

        <span
          style={{
            fontSize: 96,
            fontWeight: 600,
            color: "#1f1a14",
            fontFamily: "serif",
            letterSpacing: "-0.022em",
            lineHeight: 1.02,
            maxWidth: 1040,
          }}
        >
          {label} letters that
          <br />
          get a response<span style={{ color: "#c08a3e" }}>.</span>
        </span>

        <div style={{ display: "flex", marginTop: 28 }}>
          <span
            style={{
              fontSize: 26,
              color: "#6b5d4a",
              fontFamily: "sans-serif",
              fontStyle: "italic",
            }}
          >
            {count} {count === 1 ? "template" : "templates"} · free · attorney-written
          </span>
        </div>

        <div style={{ display: "flex", flex: 1 }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #d9d2c2",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 5.5c10.493 0 19 7.387 19 16.5 0 9.113-8.507 16.5-19 16.5-1.866 0-3.668-.234-5.372-.67L9.6 42.5l2.658-8.02C8.136 31.44 5 26.98 5 22 5 12.887 13.507 5.5 24 5.5Z"
                fill="#2d4a3e"
              />
              <path d="M13.5 16 L20 20" stroke="#c08a3e" strokeWidth="2.8" strokeLinecap="round" />
              <path d="M34.5 16 L28 20" stroke="#c08a3e" strokeWidth="2.8" strokeLinecap="round" />
              <circle cx="18" cy="24" r="1.8" fill="#c08a3e" />
              <circle cx="30" cy="24" r="1.8" fill="#c08a3e" />
              <path d="M18.5 32 Q24 28 29.5 32" stroke="#c08a3e" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#1f1a14",
                  fontFamily: "serif",
                  letterSpacing: "-0.018em",
                }}
              >
                I&rsquo;m Frustrated<span style={{ color: "#c08a3e", fontFamily: "monospace", fontSize: 16, marginLeft: 4 }}>.org</span>
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: "#6b5d4a",
                  fontFamily: "sans-serif",
                  fontStyle: "italic",
                }}
              >
                Friends who are also lawyers.
              </span>
            </div>
          </div>

          <span style={{ fontSize: 18, color: "#6b5d4a", fontFamily: "monospace" }}>
            imfrustrated.org/letters/{category}
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
