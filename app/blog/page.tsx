import Link from "next/link";
import { posts } from "../../data/posts";

export const metadata = {
  title: "Blog List",
};

export default function BlogPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
