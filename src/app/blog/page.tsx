import PostCard from "@/components/post-card";

const posts = [
  {
    imageSrc:
      "https://fastly.picsum.photos/id/1015/1920/1920.jpg?hmac=JDdYl803NLWk-oY2XxB_WKgjS9MaYCQUfMuMB87dPcc",
    slug: "post-1",
    title:
      "Sunt qui laborum labore reprehenderit in mollit voluptate esse tempor voluptate pariatur sint laboris dolor.",
    summary:
      "Proident laborum amet aliquip sint. Labore cupidatat esse et enim. Quis nulla qui duis laborum et ut qui amet eu irure. Aliqua id exercitation quis consequat. Non irure aliquip ea ex officia proident cillum quis deserunt mollit enim et quis incididunt. Labore eu reprehenderit duis incididunt ea do enim exercitation aliqua anim.",
    content:
      "Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur.",
    publishedAt: new Date(2024, 4, 23),
  },
  {
    imageSrc:
      "https://fastly.picsum.photos/id/450/1920/1920.jpg?hmac=hEqhr_DEqJQ9FDEpaBxmLMOa763Hl9eAIYLo6HCRdCQ",
    slug: "post-2",
    title:
      "Nisi aliquip elit consectetur non adipisicing aliqua non elit magna officia.",
    summary:
      "Est mollit cillum ullamco sit commodo cillum ad. Est veniam ad amet voluptate incididunt proident et in cillum ex do ipsum. Non ipsum dolor elit exercitation minim sit. Irure sint ipsum aliqua dolore est ad nostrud. Quis anim occaecat proident in commodo excepteur. Consequat fugiat exercitation deserunt anim eiusmod incididunt officia fugiat aute. Ea nulla id excepteur deserunt non sit id et do.",
    content:
      "Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur.",
    publishedAt: new Date(2024, 4, 22),
  },
  {
    imageSrc:
      "https://fastly.picsum.photos/id/901/1920/1920.jpg?hmac=irNUs7dMedqII1jIv4h3WByrN4B1ckIGGZeuP_8lno4",
    slug: "post-3",
    title:
      "Ex reprehenderit sit minim incididunt proident aliqua et veniam voluptate.",
    summary:
      "Tempor irure reprehenderit incididunt ut tempor velit Lorem. Quis proident excepteur qui ex aliquip enim labore elit fugiat adipisicing ut anim. Dolore quis eiusmod sint mollit proident mollit esse nisi anim nulla Lorem. Cupidatat consectetur dolor Lorem elit est pariatur anim ut et fugiat qui irure ea in.",
    content:
      "Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur. Lorem do proident eu nisi ea. Minim consequat Lorem quis dolor. Voluptate culpa excepteur nostrud Lorem cupidatat qui tempor consectetur.",
    publishedAt: new Date(2023, 4, 22),
  },
];

function BlogPage() {
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
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
