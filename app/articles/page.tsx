import { allPosts } from "@/content/posts"
import Link from "next/link"

export default function ArticlesPage() {
  return (
    <div className="prose mx-auto p-4">
      <h1>Monthly Articles</h1>
      <div className="prose dark:prose-invert">
        {allPosts.map(post => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}

      </div>
    </div>
  );
}