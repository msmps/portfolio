import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://msmp.me",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://msmp.me/p/hello-world",
      lastModified: "2025-01-08",
    },
    {
      url: "https://msmp.me/p/timestamps",
      lastModified: "2025-06-05",
    },
  ];
}
