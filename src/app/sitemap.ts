import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imfrustrated.org";

  return [
    {
      url: baseUrl,
      lastModified: "2026-04-08",
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
