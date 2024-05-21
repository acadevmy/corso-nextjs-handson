import CreateBlogPostForm from "@/components/forms/create-blog-post-form";

function BlogCreatePage() {
  return (
    <div>
      <h1 className="mb-4">Crea un nuovo post ✍️</h1>
      <h2 className="mb-10">
        Proident laborum nulla dolore est laboris tempor enim non irure qui.
      </h2>

      <CreateBlogPostForm />
    </div>
  );
}

export default BlogCreatePage;
