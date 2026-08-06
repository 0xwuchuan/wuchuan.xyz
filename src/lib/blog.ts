import { getCollection, type CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

export async function getPublishedPosts(): Promise<BlogEntry[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.sort(
    (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
  );
}

export function formatShortDate(date: Date, includeYear = false): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    ...(includeYear ? { year: "numeric" } : {}),
    timeZone: "UTC",
  })
    .format(date)
    .toLowerCase();
}

export function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(date)
    .toLowerCase();
}
