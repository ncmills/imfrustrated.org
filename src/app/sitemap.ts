import type { MetadataRoute } from "next";
import { getAllLetters, getAvailableCategories } from "@/data/letters";
import { getParkingUrls } from "@/data/parking";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://imfrustrated.org";
  const lastModified = new Date().toISOString();

  const core: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/free-tools`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/letters`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.dateModified ?? p.datePublished,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const categoryHubs: MetadataRoute.Sitemap = getAvailableCategories().map((c) => ({
    url: `${baseUrl}/letters/${c.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const letterPages: MetadataRoute.Sitemap = getAllLetters().map((l) => ({
    url: `${baseUrl}/letters/${l.category}/${l.slug}`,
    lastModified: l.updatedAt ?? l.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const parkingPages: MetadataRoute.Sitemap = getParkingUrls().map((u) => ({
    url: u.url,
    lastModified: u.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...core, ...blogPosts, ...categoryHubs, ...letterPages, ...parkingPages];
}
