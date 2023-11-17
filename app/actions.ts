"use server";

import { db, views } from "@/lib/db";

export async function incrementViewCount(slug: string) {
  const data = await db.query.views.findFirst({
    columns: {
      count: true,
    },
    where: (views, { eq }) => eq(views.slug, slug),
  });

  const count = data?.count ? data.count : 0;

  await db
    .insert(views)
    .values({ slug, count: 1 })
    .onConflictDoUpdate({
      target: views.slug,
      set: {
        count: count + 1,
      },
    });

  return;
}
