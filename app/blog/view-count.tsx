"use client";

import { useEffect } from "react";
import { incrementViewCount } from "../actions";

type ViewCountProps = {
  slug: string;
  views: {
    slug: string;
    count: number | null;
  }[];
  track?: boolean;
};

export default function ViewCount({
  slug,
  views,
  track = false,
}: ViewCountProps) {
  const data = views && views.find((view) => view.slug === slug);
  const count = data?.count ?? 0;

  useEffect(() => {
    if (track) {
      incrementViewCount(slug);
    }
  }, [track, slug]);

  return (
    <span className="text-neutral-600 dark:text-neutral-400 text-sm">
      {`${count.toLocaleString()}`} views
    </span>
  );
}
