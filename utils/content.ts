import { serialize } from "next-mdx-remote/serialize"
import jsonContent from "../content.json"
import { generateContent } from "../scripts/generate-content"
import { Content, Post } from "../types"
import rehypePrism from "@mapbox/rehype-prism"

export async function getMdxSource(source: string) {
  return serialize(source, {
    scope: {},
    mdxOptions: {
      rehypePlugins: [rehypePrism as any],
    },
  })
}

export function getContent() {
  return process.env.NODE_ENV === "production"
    ? (jsonContent as Content)
    : generateContent()
}

export function getPages() {
  const content = getContent()
  return content.pages
}

export function getPosts() {
  const content = getContent()
  return process.env.NODE_ENV === "development"
    ? content.posts
    : content.posts.filter((post) => post.data.status === "published")
}

export function getPagePaths() {
  return getPages().map(({ slug }) => ({
    params: { slug },
  }))
}

export function getPostPaths() {
  return getPosts().map(({ slug }) => ({
    params: { slug },
  }))
}

export function getPage(slug: string) {
  return getPages().find((page) => page.slug === slug)!
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug)!
}

export function getPostList() {
  return getPosts().map((post) => ({
    url: "/posts/" + post.slug,
    slug: post.slug,
    data: post.data,
  }))
}

export function getPostLinks(post: Post) {
  const posts = getPosts()
  const prev = posts[post.index - 1]
  const next = posts[post.index + 1]

  return {
    prev: prev
      ? {
          url: "/posts/" + prev.slug,
          slug: prev.slug,
          data: prev.data,
        }
      : null,
    next: next
      ? {
          url: "/posts/" + next.slug,
          slug: next.slug,
          data: next.data,
        }
      : null,
  }
}
