"use server";

import { sql } from "@vercel/postgres";

import { Post } from "./definitions";

export async function createPost(formData: FormData) {
  const { imageSrc, slug, title, summary, content, category } =
    Object.fromEntries(formData.entries()) as unknown as Post;

  const publishedAt = new Date().toISOString();
  await sql`
    INSERT INTO posts ("imageSrc", slug, title, summary, content, category, "publishedAt")
    VALUES (${imageSrc}, ${slug}, ${title}, ${summary}, ${content}, ${category as unknown as string}, ${publishedAt} )
  `;
}
