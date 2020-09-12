import PostLink from "./post-link"
import { getRecentPosts } from "../lib/api"

export default function PostList({ postCount = 5 }) {
  const posts = getRecentPosts(postCount)

  return (
    <>
      {posts.map((page) => (
        <PostLink key={page.__resourcePath} {...page} />
      ))}
    </>
  )
}
