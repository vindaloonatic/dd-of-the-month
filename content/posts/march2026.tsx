import { Post } from "../types"

const March2026: Post = {
  _id: "march-2026",
  slug: "/posts/march-2026",
  title: "March 2026",
  description: "dungeon1 job1",
  Content: () => (
    <>
      <p>This post is written in JSX.</p>
      <p>
        I can use <strong>real components</strong>, not markdown
      </p>
      <p>just import the full component later into the content attribute instead of writing everything in this file</p>
    </>
  ),
}

export default March2026