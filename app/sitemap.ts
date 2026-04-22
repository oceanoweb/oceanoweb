import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      // Update this date whenever the homepage content changes significantly.
      // Using new Date() would signal a change on every build, misleading crawlers.
      lastModified: new Date("2025-02-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
