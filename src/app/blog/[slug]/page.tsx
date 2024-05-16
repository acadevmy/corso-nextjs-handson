import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CategoryChip from "@/components/category-chip";
import { fetchPostBySlug, fetchPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug);

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      images: [
        {
          url: post.imageSrc,
        },
      ],
    },
  };
}

async function PostPage({ params }: PostPageProps) {
  const post = await fetchPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div>
      <div className="relative w-full h-80 mb-10 bg-zinc-400 rounded-md overflow-hidden">
        <Image src={post.imageSrc} alt="" fill />
      </div>

      <CategoryChip label={post.category.label} />

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
