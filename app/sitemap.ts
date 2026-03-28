import { MetadataRoute } from "next";
import { GAMES, LEVELS, SKILLS } from "@/lib/games-data";
import { BLOG_ARTICLES } from "@/lib/blog-data";
import { DOWNLOADABLE_RESOURCES } from "@/lib/resources-data";

const BASE_URL = "/";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/games`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/sitemap-page`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  // All 24 game pages
  const gamePages: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${BASE_URL}/games/${game.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Level category pages
  const levelPages: MetadataRoute.Sitemap = LEVELS.map((level) => ({
    url: `${BASE_URL}/games/${level.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Skill category pages
  const skillPages: MetadataRoute.Sitemap = SKILLS.map((skill) => ({
    url: `${BASE_URL}/games/${skill.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Downloadable resource pages
  const resourcePages: MetadataRoute.Sitemap = DOWNLOADABLE_RESOURCES.map((res) => ({
    url: `${BASE_URL}/resources/download/${res.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...gamePages,
    ...levelPages,
    ...skillPages,
    ...blogPages,
    ...resourcePages,
  ];
}
