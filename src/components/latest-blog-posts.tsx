import { fetchLatestPosts } from "@/lib/data";

import PostCard from "./post-card";

export default async function LatestBlogPosts() {
  const data = await fetchLatestPosts();

  return (
    <div>
      <h2 className="mb-6">Gli ultimi articoli</h2>

      <div className="flex gap-10">
        {data.map((item) => (
          <div key={item.slug} className="flex-1">
            <PostCard
              publishedAt={item.publishedAt}
              slug={item.slug}
              summary={item.summary}
              title={item.title}
              categoryLabel={item.category.label}
              categorySlug={item.category.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
