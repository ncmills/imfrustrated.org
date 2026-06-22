import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Free Tools — I'm Frustrated dot Org — free legal tools for the people we serve";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [bricolage, hanken] = await Promise.all([
    fetch(new URL("../_fonts/Bricolage.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("../_fonts/Hanken.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
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
          fontFamily: "Hanken Grotesk",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(217, 227, 214, 0.6)",
            filter: "blur(90px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -110,
            width: 440,
            height: 440,
            borderRadius: "50%",
            background: "rgba(240, 216, 203, 0.55)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        <span
          style={{
            fontSize: 24,
            color: "#c8775a",
            fontFamily: "Hanken Grotesk",
            fontWeight: 500,
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
            color: "#33453d",
            fontFamily: "Bricolage Grotesque",
            letterSpacing: "-0.035em",
            textAlign: "center",
            lineHeight: 1.05,
            maxWidth: 980,
          }}
        >
          Free legal tools, built for the
          <br />
          people we serve<span style={{ color: "#c8775a" }}>.</span>
        </span>

        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#c8775a",
            marginTop: 36,
            marginBottom: 24,
            display: "flex",
          }}
        />

        <span
          style={{
            fontSize: 24,
            color: "#5c6b62",
            fontFamily: "Hanken Grotesk",
            fontWeight: 500,
          }}
        >
          imfrustrated.org/free-tools
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
