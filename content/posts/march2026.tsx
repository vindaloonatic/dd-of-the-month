import { Post } from "../types"
import March2026Content from "./march2026content"

const March2026: Post = {
  _id: 1,
  slug: "/posts/march-2026",
  title: "March 2026",
  description: "Heaven on High - GNB",
  Content: () => (
    <March2026Content />
  ),
}

export default March2026