import { fetchPosts } from "@/lib/data";

import PostCard, { PostCardSkeleton } from "./post-card";

async function BlogPosts() {
  const posts = await fetchPosts();

  return (
    <div className="flex flex-col gap-10">
      {posts.map((item) => (
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
  );
}

export function BlogPostsSkeleton() {
  return (
    <div className="flex flex-col gap-10">
      <PostCardSkeleton />
      <PostCardSkeleton />
      <PostCardSkeleton />
    </div>
  );
}

export default BlogPosts;
