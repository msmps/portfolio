import createMDX from "@next/mdx";
import shikiRehype from "@shikijs/rehype";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
  },
};

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      [
        shikiRehype,
        {
          themes: { light: "github-light", dark: "github-dark-default" },
          defaultColor: false,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
