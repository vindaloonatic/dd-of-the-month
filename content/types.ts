import { ReactNode } from "react"

export type Post = {
  _id: number
  slug: string
  title: string
  description?: string
  Content: () => ReactNode
}