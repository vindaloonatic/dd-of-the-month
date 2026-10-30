import { Post } from "../types"
import May2026Content from "./may2026content"

const May2026: Post = {
  _id: 3,
  slug: "/posts/may-2026",
  title: "May 2026",
  description: "Palace of the Dead - RDM",
  Content: () => (
    <May2026Content />
  ),
}

export default May2026