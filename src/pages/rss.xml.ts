import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "../lib/blog";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: "wuchuan's digital garden",
    description: "Evolving notes about technology, work, decisions, and life.",
    site: context.site ?? "https://wuchuan.xyz",
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedDate,
      link: `/blog/${post.id}`,
    })),
    customData: "<language>en-sg</language>",
  });
}
