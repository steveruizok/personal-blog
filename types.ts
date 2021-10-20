export interface PageFrontmatter {
  title: string
}

export interface Page {
  slug: string
  content: string
  data: PageFrontmatter
}

export interface PostFrontmatter {
  title: string
  date: string
  hero: string
  status: string
  description: string
}

export interface Post {
  index: number
  date: number
  slug: string
  content: string
  data: PostFrontmatter
}

export interface PostListItem {
  slug: string
  url: string
  data: PostFrontmatter
}

export type Content = {
  pages: Page[]
  posts: Post[]
}
