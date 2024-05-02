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
      <p className="text-zinc-500 text-sm pb-1">
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
