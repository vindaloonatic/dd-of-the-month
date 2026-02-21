import { allPosts } from "@/content/posts"
import { notFound } from "next/navigation"

type PostPageProps = {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find(p => p.slug.endsWith(params.slug))

  if (!post) notFound()

  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <post.Content />
    </article>
  )
}