import { Metadata } from "next";
import { Suspense } from "react";

import BlogPosts, { BlogPostsSkeleton } from "@/components/blog-posts";
import Search from "@/components/search";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nisi esse ipsum ut ex laborum laboris fugiat quis.",
};

type BlogPageProps = {
  searchParams: {
    query?: string;
  };
};

async function BlogPage({ searchParams }: BlogPageProps) {
  const query = searchParams?.query || "";

  return (
    <div>
      <h1 className="mb-10">Blog 📚</h1>

      <Search />

      <Suspense key={query} fallback={<BlogPostsSkeleton />}>
        <BlogPosts query={query} />
      </Suspense>
    </div>
  );
}

export default BlogPage;
