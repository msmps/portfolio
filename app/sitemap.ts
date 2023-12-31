import { allPosts } from "@/.contentlayer/generated";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://msmp.me/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    ...posts,
    {
      url: "https://msmp.me",
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: "https://msmp.me/blog",
      lastModified: new Date().toISOString().split("T")[0],
    },
  ];
}
