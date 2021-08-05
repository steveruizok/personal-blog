// @ts-ignore
import { frontMatter as posts } from "../pages/posts/*.mdx"

let allPosts: Blog.Post[] = (posts as Blog.Post[]).sort(
  (a, b) => b.dateTime - a.dateTime
)

if (process.env.NODE_ENV === "production") {
  allPosts = allPosts.filter((post) => post.status === "published")
}

export function getAllPosts() {
  return allPosts
}

export function getRecentPosts(num = 5) {
  return allPosts.slice(0, num)
}

export function getPostBySlug(slug: string) {
  return allPosts.find((p) => p.slug === slug)
}

export function getNeighborPosts(slug: string): {
  prev?: Blog.Post
  next?: Blog.Post
} {
  const post = getPostBySlug(slug)
  const index = allPosts.indexOf(post)

  return { prev: allPosts[index - 1], next: allPosts[index + 1] }
}
