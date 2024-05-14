import PostCard from "@/components/post-card";
import { fetchPosts } from "@/lib/data";

async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1 className="mb-10">Blog 📚</h1>

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
    </div>
  );
}

export default BlogPage;
