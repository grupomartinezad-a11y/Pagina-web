import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = "https://socialdigitalpro2024.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["", "/privacy-policy"];
  return routing.locales.flatMap((locale) =>
    paths.map((p) => ({
      url: `${SITE}/${locale}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.6,
    })),
  );
}
