import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://mightbemedia.in";

// Content milestone dates
const HOMEPAGE_LAST_MODIFIED = new Date("2026-03-20T00:00:00.000Z");
const PROJECTS_LAST_MODIFIED = new Date("2026-03-15T00:00:00.000Z");
const BLOG_INDEX_LAST_MODIFIED = new Date("2026-03-15T10:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Primary Pillar Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: HOMEPAGE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: PROJECTS_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: BLOG_INDEX_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2. Data-Driven Dynamic Blog Article Routes
  // Automatically populates any newly added published blog post from central data
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
