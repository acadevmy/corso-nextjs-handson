import UpsertBlogPostForm from "@/components/forms/upsert-blog-post-form";
import { fetchCategories, fetchPostBySlug } from "@/lib/data";

type BlogUpdatePageProps = {
  params: {
    slug: string;
  };
};

async function BlogUpdatePage({ params }: BlogUpdatePageProps) {
  const categories = await fetchCategories();
  const post = await fetchPostBySlug(params.slug);

  return (
    <div>
      <h1 className="mb-4">Modifica post 📝</h1>
      <h2 className="mb-10">
        Proident laborum nulla dolore est laboris tempor enim non irure qui.
      </h2>

      <UpsertBlogPostForm
        categories={categories}
        defaultValues={post}
        slug={post.slug}
      />
    </div>
  );
}

export default BlogUpdatePage;
