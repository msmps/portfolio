import "server-only";

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const views = sqliteTable("views", {
  slug: text("slug").unique().primaryKey(),
  count: integer("count", { mode: "number" }).default(0),
});

const client = createClient({
  url: process.env.DATABASE_URL! ?? "",
  authToken: process.env.DATABASE_AUTH_TOKEN! ?? "",
});

export const db = drizzle(client, {
  schema: {
    views,
  },
});
