"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import { signIn, signOut } from "@/auth";

// posts
const CreatePostSchema = z.object({
  imageSrc: z.string().url({ message: "Formato url non valido" }),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: "Formato slug errato" }),
  title: z
    .string()
    .min(8, { message: "Il titolo deve avere almeno 8 caratteri" }),
  summary: z
    .string()
    .min(8, { message: "Il riassunto deve avere almeno 8 caratteri" }),
  content: z
    .string()
    .min(8, { message: "Il contenuto deve avere almeno 8 caratteri" }),
  category: z.string(),
});

export async function createPost(currentState: any, formData: FormData) {
  try {
    const validateFields = validatePostFormData(formData);

    if (validateFields.error) {
      return {
        errors: validateFields.error.errors,
        errorMessage: validateFields.error.errorMessage,
      };
    }

    const publishedAt = new Date().toISOString();

    const { imageSrc, slug, title, summary, content, category } =
      validateFields.data;

    await sql`
      INSERT INTO posts ("imageSrc", slug, title, summary, content, category, "publishedAt")
      VALUES (${imageSrc}, ${slug}, ${title}, ${summary}, ${content}, ${category}, ${publishedAt} )
    `;
  } catch (e) {
    return {
      errorMessage: "Qualcosa è andato storto nella crezione del post",
    };
  }

  revalidateBlogsPaths();
  redirect("/admin");
}

export async function updatePost(
  postSlug: string,
  currentState: any,
  formData: FormData,
) {
  try {
    const validateFields = validatePostFormData(formData);

    if (validateFields.error) {
      return {
        errors: validateFields.error.errors,
        errorMessage: validateFields.error.errorMessage,
      };
    }

    const { imageSrc, slug, title, summary, content, category } =
      validateFields.data;

    await sql`
      UPDATE posts
      SET "imageSrc" = ${imageSrc}, slug = ${slug}, title = ${title}, summary = ${summary}, content = ${content}, category = ${category}
      WHERE slug = ${postSlug}
    `;
  } catch (e) {
    return {
      errorMessage: "Qualcosa è andato storto nell'aggiornamento del post",
    };
  }

  revalidateBlogsPaths();
  redirect("/admin");
}

export async function deletePost(id: string) {
  try {
    await sql`
      DELETE
      FROM posts
      WHERE id = ${id}
    `;

    revalidateBlogsPaths();
    redirect("/admin");
  } catch (e) {
    return {
      errorMessage: "Qualcosa è andato storto nell'eliminazione del post",
    };
  }
}

// auth
export async function logout() {
  await signOut();
}
export async function login() {
  await signIn("github", { redirectTo: "/admin" });
}

// utils
function revalidateBlogsPaths() {
  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/blog");
  revalidatePath("/blog/categories/[slug]", "page");
}

function validatePostFormData(formData: FormData) {
  const validateFields = CreatePostSchema.safeParse({
    imageSrc: formData.get("imageSrc"),
    slug: formData.get("slug"),
    title: formData.get("title"),
    summary: formData.get("summary"),
    content: formData.get("content"),
    category: formData.get("category"),
  });

  if (!validateFields.success) {
    return {
      error: {
        errors: validateFields.error.flatten().fieldErrors,
        errorMessage: "Errore di validazione. Controlla i campi.",
      },
    };
  }

  return {
    success: true,
    data: validateFields.data,
  };
}
