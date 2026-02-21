import { ReactNode } from "react"

export type Post = {
  _id: string
  slug: string
  title: string
  description?: string
  Content: () => ReactNode
}