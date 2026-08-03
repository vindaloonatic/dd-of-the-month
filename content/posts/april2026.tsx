import { Post } from "../types"
import April2026Content from "./april2026content"

const April2026: Post = {
  _id: 2,
  slug: "/posts/april-2026",
  title: "April 2026",
  description: "Pilgrim's Traverse - VPR",
  Content: () => (
    <April2026Content />
  ),
}

export default April2026