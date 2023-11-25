import { Mdx } from "@/app/components/mdx";
import { getViews } from "@/lib/stats";
import { allPosts } from "contentlayer/generated";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import ViewCount from "../view-count";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, slug, description, date } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `https://www.msmp.me/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Post({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-0">{post.title}</h1>

        <div className="metadata flex items-center justify-between">
          <time className="text-neutral-600 dark:text-neutral-400 text-sm">
            {new Date(post.date).toLocaleString("en-GB", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>

          <Suspense fallback={<p className="h-5" />}>
            <Views slug={params.slug} />
          </Suspense>
        </div>
      </div>

      <Mdx code={post.body.code} />
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViews();

  return <ViewCount views={views} slug={slug} track />;
}
