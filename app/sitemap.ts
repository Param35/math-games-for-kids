import { MetadataRoute } from "next";
import { GAMES, LEVELS, SKILLS } from "@/lib/games-data";
import { BLOG_ARTICLES } from "@/lib/blog-data";
import { DOWNLOADABLE_RESOURCES } from "@/lib/resources-data";

const BASE_URL = "https://www.mathgamesforkids.xyz";

// Static export — fixes Google "sitemap not readable" issue
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Use a fixed date string so the sitemap is fully static and cacheable by Google
  const lastMod = "2025-04-01";

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: lastMod, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/games`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/resources`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/sitemap-page`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.4 },
  ];

  const gamePages: MetadataRoute.Sitemap = GAMES.map((game) => ({
    url: `${BASE_URL}/games/${game.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const levelPages: MetadataRoute.Sitemap = LEVELS.map((level) => ({
    url: `${BASE_URL}/games/${level.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const skillPages: MetadataRoute.Sitemap = SKILLS.map((skill) => ({
    url: `${BASE_URL}/games/${skill.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_ARTICLES.map((article) => ({
    url: `${BASE_URL}/blog/${article.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePages: MetadataRoute.Sitemap = DOWNLOADABLE_RESOURCES.map((res) => ({
    url: `${BASE_URL}/resources/download/${res.slug}`,
    lastModified: lastMod,
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
