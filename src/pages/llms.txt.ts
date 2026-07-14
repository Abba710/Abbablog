import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const posts = await getCollection("posts");

  const content = [
    "# Abba Blog",
    "",
    "> Personal blog about software development, browser extensions, privacy, productivity and independent projects.",
    "",
    "## Articles",
    "",
    ...posts.map((post) =>
      [
        `### ${post.data.title}`,
        "",
        `Description: ${post.data.description}`,
        `Category: ${post.data.category}`,
        `Tags: ${post.data.tags.join(", ")}`,
        `URL: https://abbablog.me/posts/${post.id}/`,
        "",
      ].join("\n"),
    ),
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
