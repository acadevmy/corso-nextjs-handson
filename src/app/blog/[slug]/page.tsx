import { posts } from "@/lib/data";

type PostPage = {
  params: {
    slug: string;
  };
};

function PostPage({ params }: PostPage) {
  return <div>{params.slug}</div>;
}

export async function generateStaticParams() {
  return posts.map((item) => ({
    slug: item.slug,
  }));
}

export default PostPage;
