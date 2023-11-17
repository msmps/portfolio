import "server-only";

import { unstable_cache } from "next/cache";
import { db, views } from "./db";

export const getViews = unstable_cache(
  async () => {
    return db.select().from(views);
  },
  ["views-count"],
  {
    revalidate: 30,
  }
);
