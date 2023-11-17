import { getViews } from "@/lib/stats";
import { Suspense } from "react";
import ViewCount from "../blog/view-count";

export function Post({
  title,
  description,
  slug,
  showViews = false,
}: {
  title: string;
  description: string;
  slug: string;
  showViews?: boolean;
}) {
  return (
    <article className="w-full">
      <a
        className="mb-0 text-neutral-900 dark:text-white text-lg underline underline-offset-2 decoration-neutral-400 hover:decoration-neutral-900 transition-colors duration-200"
        href={`/blog/${slug}`}
      >
        {title}
      </a>
      <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
      {showViews && (
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={slug} />
        </Suspense>
      )}
    </article>
  );
}

export async function Views({ slug }: { slug: string }) {
  const views = await getViews();

  return <ViewCount views={views} slug={slug} />;
}
