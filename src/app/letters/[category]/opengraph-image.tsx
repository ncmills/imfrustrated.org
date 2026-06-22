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

  const [bricolage, hanken] = await Promise.all([
    fetch(new URL("../../_fonts/Bricolage.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("../../_fonts/Hanken.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(180deg, #f6f3ec 0%, #eef1e9 100%)",
          position: "relative",
          padding: "80px 80px",
          fontFamily: "Hanken Grotesk",
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
            background: "rgba(217, 227, 214, 0.6)",
            filter: "blur(140px)",
            display: "flex",
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
            background: "rgba(240, 216, 203, 0.55)",
            filter: "blur(120px)",
            display: "flex",
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
          <span style={{ width: 36, height: 2, backgroundColor: "#c8775a", display: "flex" }} />
          <span
            style={{
              fontSize: 20,
              color: "#c8775a",
              fontFamily: "Hanken Grotesk",
              fontWeight: 500,
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
            fontWeight: 700,
            color: "#33453d",
            fontFamily: "Bricolage Grotesque",
            letterSpacing: "-0.022em",
            lineHeight: 1.02,
            maxWidth: 1040,
          }}
        >
          {label} letters that
          <br />
          get a response<span style={{ color: "#c8775a" }}>.</span>
        </span>

        <div style={{ display: "flex", marginTop: 28 }}>
          <span
            style={{
              fontSize: 26,
              color: "#5c6b62",
              fontFamily: "Hanken Grotesk",
              fontWeight: 500,
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
            borderTop: "1px solid #dfdacd",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="56" height="52" viewBox="0 0 48 44" fill="none">
              <path d="M8 7 H40 a5 5 0 0 1 5 5 V29 a5 5 0 0 1 -5 5 H21 l-8 7 v-7 H8 a5 5 0 0 1 -5 -5 V12 a5 5 0 0 1 5 -5 Z" fill="#33453d" />
              <path d="M13 20.5 L20 18 L27 22.5 L34 18 L40 20.5" fill="none" stroke="#e0a98f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#33453d",
                  fontFamily: "Bricolage Grotesque",
                  letterSpacing: "-0.018em",
                }}
              >
                I&rsquo;m Frustrated<span style={{ color: "#c8775a", fontFamily: "Bricolage Grotesque", fontSize: 16, marginLeft: 4 }}>.org</span>
              </span>
              <span
                style={{
                  fontSize: 16,
                  color: "#5c6b62",
                  fontFamily: "Hanken Grotesk",
                  fontWeight: 500,
                }}
              >
                Friends who are also lawyers.
              </span>
            </div>
          </div>

          <span style={{ fontSize: 18, color: "#5c6b62", fontFamily: "Hanken Grotesk", fontWeight: 500 }}>
            imfrustrated.org/letters/{category}
          </span>
        </div>
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
