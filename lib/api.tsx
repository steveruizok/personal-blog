// @ts-ignore
import { frontMatter as posts } from '../pages/posts/*.mdx'

const allPosts: Blog.Post[] = (posts as Blog.Post[]).sort(
  (a, b) => a.date - b.date
)

export function getAllPosts() {
  return allPosts
}

export function getPostBySlug(slug: string) {
  return allPosts.find((p) => p.slug === slug)
}

export function getNeighborPosts(
  slug: string
): {
  prev?: Blog.Post
  next?: Blog.Post
} {
  const post = getPostBySlug(slug)
  const index = allPosts.indexOf(post)

  return { prev: allPosts[index - 1], next: allPosts[index + 1] }
}
