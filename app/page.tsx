import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";
import { Post } from "./components/post";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://msmp.me",
  },
};

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section>
      <h1 className="text-2xl font-bold mb-7 motion-safe:animate-entry">
        Matt Simpson
      </h1>
      <p className="prose prose-neutral dark:prose-invert motion-safe:animate-entry [--stagger:1]">
        I&apos;m a software engineer, tech enthusiast, and creator from the UK.
        I currently work at <span className="font-semibold">Capital One</span>{" "}
        as a Principal Software Engineer — focusing on customer acquisitions.
      </p>

      <div className="my-16 motion-safe:animate-entry [--stagger:2]">
        <h2 className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm">
          <a href="/blog/">Writing</a>
        </h2>

        <div className="flex flex-col gap-4">
          {posts.slice(0, 3).map((post) => (
            <Post
              key={post.slug}
              title={post.title}
              slug={post.slug}
              description={post.description}
            />
          ))}
        </div>
      </div>

      <p className="prose prose-neutral dark:prose-invert prose-a:underline-offset-2 prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-900 prose-a:transition-colors prose-a:duration-200 motion-safe:animate-entry [--stagger:3]">
        Let&apos;s hang out{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://x.com/msmps_"
        >
          @msmps
        </a>{" "}
        or <a href="mailto:hello@msmp.me">hello@msmp.me</a>.
      </p>
    </section>
  );
}
