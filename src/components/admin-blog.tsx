import { Trash } from "lucide-react";
import Link from "next/link";

import { deletePost } from "@/lib/actions";
import { fetchPosts } from "@/lib/data";

import PostCard from "./post-card";

type Props = {};

async function AdminBlog({}: Props) {
  const posts = await fetchPosts();
  return (
    <div className="mt-20">
      <div className="flex justify-between">
        <h2>Impostazioni blog</h2>

        <Link href="/admin/blog/create" className="btn btn-primary">
          Nuovo articolo
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-5">
        {posts.map((item) => (
          <div key={item.slug} className="flex gap-5">
            <PostCard
              publishedAt={item.publishedAt}
              slug={item.slug}
              summary={item.summary}
              title={item.title}
              categoryLabel={item.category.label}
              categorySlug={item.category.slug}
            />

            <div className="flex flex-col justify-center">
              <form action={deletePost.bind(null, item.id)}>
                <button type="submit" className="btn btn-danger">
                  <Trash />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminBlog;
