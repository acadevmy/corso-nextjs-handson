import React from "react";

import PostCard from "@/components/post-card";
import { categories, posts } from "@/lib/data";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);
  const filteredPosts = posts.filter((item) => item.category === category?.id);

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
            categoryLabel={category?.label}
            categorySlug={category?.slug}
          />
        ))}
      </div>
    </div>
  );
}
