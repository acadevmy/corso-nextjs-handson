import CategoryChip from "@/components/category-chip";
import { fetchPostBySlug, fetchPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type PostPage = {
  params: {
    slug: string;
  };
};

async function PostPage({ params }: PostPage) {
  const post = await fetchPostBySlug(params.slug);

  return (
    <div>
      <div className="relative w-full h-80 mb-10 bg-zinc-400 rounded-md">
        {/* <Image /> */}
      </div>

      <CategoryChip slug={post.category.slug} label={post.category.label} />

      <p className="text-zinc-500 text-sm pb-1 mt-2">
        {formatDate(post?.publishedAt)}
      </p>

      <h1 className="mb-10 text-orange-500">{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((item) => ({
    slug: item.slug,
  }));
}

export default PostPage;
