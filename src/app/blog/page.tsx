import { Metadata } from "next";
import { Suspense } from "react";

import BlogPosts, { BlogPostsSkeleton } from "@/components/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Nisi esse ipsum ut ex laborum laboris fugiat quis.",
};

async function BlogPage() {
  return (
    <div>
      <h1 className="mb-10">Blog 📚</h1>

      <Suspense fallback={<BlogPostsSkeleton />}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

export default BlogPage;
