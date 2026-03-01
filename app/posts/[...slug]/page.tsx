import { allPosts } from "@/content/posts";
import { notFound } from "next/navigation";

type Params = { slug: string[] };
type PostPageProps = {
  params: Params | Promise<Params>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  const slugStr = Array.isArray(slug) ? slug.join("/") : slug;

  const post = allPosts.find((p) => p.slug.endsWith(slugStr));

  if (!post) return notFound();

  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <post.Content />
    </article>
  );
}