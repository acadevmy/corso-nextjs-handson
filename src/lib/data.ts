import { sql } from "@vercel/postgres";

import { Category, Post, Work } from "./definitions";

// posts
export async function fetchPosts() {
  const data = await sql<Post>`
    SELECT posts.*, to_jsonb(categories) as category
    FROM posts
    JOIN categories ON posts.category = categories.id
    ORDER BY "publishedAt" DESC
  `;

  return data.rows;
}

export async function fetchLatestPosts() {
  const data = await sql<Post>`
    SELECT posts.*, to_jsonb(categories) as category
    FROM posts
    JOIN categories ON posts.category = categories.id
    ORDER BY "publishedAt" DESC
    LIMIT 2
  `;

  return data.rows;
}

export async function fetchPostBySlug(slug: string) {
  const data = await sql<Post>`
    SELECT posts.*, to_jsonb(categories) as category
    FROM posts
    JOIN categories ON posts.category = categories.id
    WHERE posts.slug = ${slug}
  `;

  return data.rows[0];
}

export async function fetchPostsByCategory(categoryId: string) {
  const data = await sql<Post>`
    SELECT posts.*, to_jsonb(categories) as category
    FROM posts
    JOIN categories ON posts.category = categories.id
    WHERE posts.category = ${categoryId}
    ORDER BY "publishedAt" DESC
  `;

  return data.rows;
}

// works
export async function fetchWorks() {
  const data = await sql<Work>`
    SELECT *
    FROM works
    ORDER BY "startDate" DESC
  `;

  return data.rows;
}

export async function fetchLatestWorks() {
  // await new Promise((res) => setTimeout(res, 3000));

  const data = await sql<Work>`
    SELECT *
    FROM works
    ORDER BY "startDate" DESC
    LIMIT 2
  `;

  return data.rows;
}

// categories
export async function fetchCategories() {
  const data = await sql<Category>`
    SELECT *
    FROM categories
  `;

  return data.rows;
}

export async function fetchCategoryBySlug(slug: string) {
  const data = await sql<Category>`
    SELECT *
    FROM categories
    WHERE slug = ${slug}
  `;

  return data.rows[0];
}
