import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "I'm Frustrated dot Org — you don't always need a lawyer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bricolage, hanken] = await Promise.all([
    fetch(new URL("./_fonts/Bricolage.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./_fonts/Hanken.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

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
          background: "linear-gradient(180deg, #f6f3ec 0%, #eef1e9 100%)",
          position: "relative",
          padding: "80px",
          fontFamily: "Hanken Grotesk",
        }}
      >
        <div style={{ position: "absolute", top: -140, right: -120, width: 520, height: 520, borderRadius: "50%", background: "rgba(217, 227, 214, 0.7)", filter: "blur(90px)", display: "flex" }} />
        <div style={{ position: "absolute", bottom: -120, left: -110, width: 440, height: 440, borderRadius: "50%", background: "rgba(240, 216, 203, 0.6)", filter: "blur(80px)", display: "flex" }} />

        {/* The Aside mark */}
        <svg width="116" height="106" viewBox="0 0 48 44" fill="none" style={{ marginBottom: 30 }}>
          <path d="M8 7 H40 a5 5 0 0 1 5 5 V29 a5 5 0 0 1 -5 5 H21 l-8 7 v-7 H8 a5 5 0 0 1 -5 -5 V12 a5 5 0 0 1 5 -5 Z" fill="#33453d" />
          <path d="M13 20.5 L20 18 L27 22.5 L34 18 L40 20.5" fill="none" stroke="#e0a98f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 26 }}>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#33453d", fontFamily: "Bricolage Grotesque", letterSpacing: "-0.02em" }}>
            I&rsquo;m Frustrated
          </span>
          <span style={{ fontSize: 58, fontWeight: 700, color: "#c8775a", fontFamily: "Bricolage Grotesque", letterSpacing: "-0.02em" }}>
            .org
          </span>
        </div>

        {/* Headline */}
        <span style={{ fontSize: 66, fontWeight: 700, color: "#33453d", fontFamily: "Bricolage Grotesque", letterSpacing: "-0.035em", textAlign: "center", lineHeight: 1.05 }}>
          You don&rsquo;t always need a lawyer.
        </span>

        {/* Subtitle */}
        <span style={{ fontSize: 26, color: "#5c6b62", fontFamily: "Hanken Grotesk", fontWeight: 500, marginTop: 22, textAlign: "center", maxWidth: 820 }}>
          Friends who are also lawyers — plus free tools to resolve it yourself.
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: bricolage, weight: 700, style: "normal" },
        { name: "Hanken Grotesk", data: hanken, weight: 500, style: "normal" },
      ],
    }
  );
}
