import { Post } from "@/app/components/post";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my written thoughts on software engineering, ai, and more.",
};

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section>
      <h1 className="text-2xl font-bold mb-7">Writing</h1>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Post
            key={post.slug}
            title={post.title}
            slug={post.slug}
            description={post.description}
            showViews
          />
        ))}
      </div>
    </section>
  );
}
