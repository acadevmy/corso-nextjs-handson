type PostPage = {
  params: {
    slug: string;
  };
};

function PostPage({ params }: PostPage) {
  return <div>{params.slug}</div>;
}

export default PostPage;
