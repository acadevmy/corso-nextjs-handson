"use server";

import { sql } from "@vercel/postgres";

import { Post } from "./definitions";

export async function createPost(currentState: any, formData: FormData) {
  try {
    await new Promise((res) => setTimeout(res, 3000));

    const { imageSrc, slug, title, summary, content, category } =
      Object.fromEntries(formData.entries()) as unknown as Post;

    const publishedAt = new Date().toISOString();
    await sql`
      INSERT INTO posts ("imageSrc", slug, title, summary, content, category, "publishedAt")
      VALUES (${imageSrc}, ${slug}, ${title}, ${summary}, ${content}, ${category as unknown as string}, ${publishedAt} )
    `;
  } catch (e) {
    return {
      error: "Qualcosa è andato storto",
    };
  }
}
