import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import PostCard from "@/components/post-card";
import {
  fetchCategories,
  fetchCategoryBySlug,
  fetchPostsByCategory,
} from "@/lib/data";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = await fetchCategoryBySlug(params.slug);

  return {
    title: category.label,
    description: category.description,
    openGraph: {
      title: category.slug,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await fetchCategoryBySlug(params.slug);

  if (!category) notFound();

  const filteredPosts = await fetchPostsByCategory(category.id);

  return (
    <div>
      <h1 className="mb-2">Blog 📚</h1>
      <h2 className="mb-6">{category?.label}</h2>
      <p className="mb-10">{category?.description}</p>

      <div className="flex flex-col gap-10">
        {filteredPosts.map((item) => (
          <PostCard
            imageSrc={item.imageSrc}
            publishedAt={item.publishedAt}
            slug={item.slug}
            summary={item.summary}
            title={item.title}
            key={item.slug}
            categoryLabel={item.category.label}
            categorySlug={item.category.slug}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((item) => ({
    slug: item.slug,
  }));
}
