import { posts } from "../../../data/posts";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return <h1>Bài viết không tồn tại</h1>;
  }

  return (
    <article>
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
